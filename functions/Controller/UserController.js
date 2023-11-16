const moment = require("moment");
const {addErrLog} = require("../Service/CommonService");
const {getUserCnt, checkClose, sprintCloseChk, addUserSpr, sprintCloseChks} = require("../Service/UserService");

function UserController(router, firestore) {
    const collectionPath = 'User'
    const collectionPath2 = 'UserSpr'

    router.get('/', async (req, res) => {
        const snapshot = await firestore.collection(collectionPath).orderBy('timestamp', 'asc').get();
        const users = snapshot.docs.map(doc => ({email: doc.id, ...doc.data()}));
        res.status(200).send(users);
    });

    router.post("/", async (req, res) => {
        const currentDateTime = moment().format('YYYYMMDDHHmmss');
        const {email, isSprint, sprint} = req.body
        const collPath = !isSprint ? collectionPath : collectionPath2
        try {
            //스프린트 사전신청 정원 체크, 2배수 선착순
            if(isSprint){
                const isClosed = await sprintCloseChk(firestore, sprint)
                if(isClosed){
                    res.status(200).json({isError:true, errMsg:'sprint '+sprint+' closed', errCode:-2}).end()
                    return
                }
            }

            // doc() 메서드를 사용하여 문서 ID를 email로 설정
            const userRef = firestore.collection(collPath).doc(email);

            //중복확인
            const doc = await userRef.get()
            if(doc.exists){
                res.status(200).json({isError:true, errMsg:'email already exists', errCode:-1}).end()
                return
            }
            const userData = {
                name: req.body.name,
                company: req.body.company,
                call: req.body.call,
                timestamp: currentDateTime
            };
            if(isSprint) {
                //스프린트 사전신청 - 트랜잭션
                userData.sprint = req.body.sprint
                await addUserSpr(firestore, userData, email)
            }else{
                //일반 사전등록
                await userRef.set(userData);
            }
            res.status(200).send(`새로운 User 추가 ID: ${email}`);
        } catch (error) {
            await addErrLog(0, firestore, req, error, collPath)
            res.status(500).send(error.message);
        }
    });

    //등록확인
    router.post("/check", async (req, res) => {
        try {
            const {email, name, isSprint} = req.body; // 요청 본문에서 email과 name을 추출
            const collPath = !isSprint ? collectionPath : collectionPath2
            const docRef = firestore.collection(collPath).doc(email); // 문서 참조 생성
            const errData = {
                errCode: 0
            }
            const doc = await docRef.get(); // 문서 가져오기

            const data = doc.data();
            if (!doc.exists) {
                //등록되어있는 이메일 주소 존재 안함
                errData.errCode = -1
                res.status(200).json(errData);
            } else if (doc.exists && data.name !== name) {
                //이메일 주소 존재하지만 이름 불일치
                errData.errCode = -2
                res.status(200).json(errData);
            } else if (doc.exists && data.name === name) {
                res.status(200).json({email: email, ...data});
            } else {
                throw new Error('')
            }
        } catch (error) {
            await addErrLog(0, firestore, req, error, collectionPath)
            res.status(500).json(error);
        }
    })


    router.get("/count/conf", async (req, res) => {
        try {
            const cnt = await getUserCnt(firestore, false)
            res.status(200).json({count:cnt})
        }catch (error){
            await addErrLog(0, firestore, req, error, collectionPath)
            res.status(500).send('error while getUserCnt')
        }
    })
    router.get("/count/spr", async (req, res) => {
        try {
            const cnt = await getUserCnt(firestore, true)
            res.status(200).json({count:cnt})
        }catch (error){
            await addErrLog(0, firestore, req, error, collectionPath)
            res.status(500).send('error while getUserCnt')
        }
    })

    router.post("/checkClose", async (req, res) => {
        try {
            const isClosed = await checkClose(firestore, req)
            res.status(200).json({isClosed:isClosed})
        }catch (error){
            await addErrLog(0, firestore, req, error, collectionPath2)
            res.status(500).send('error while checkClose')
        }
    })

    router.get("/sprintCloseChk/:sprintId", async (req, res) => {
        const sprintId = req.params.sprintId
        try {
            const isClosed = await sprintCloseChk(firestore, sprintId)
            res.status(200).json({isClosed:isClosed})
        }catch (error){
            await addErrLog(0, firestore, req, error, 'Sprint')
            res.status(500).send('error while sprintCloseChk')
        }
    })
    router.get("/sprintCloseChks", async (req, res) => {
        try {
            const isClosedArr = await sprintCloseChks(firestore)
            res.status(200).json({isClosedArr:isClosedArr})
        }catch (error){
            await addErrLog(0, firestore, req, error, 'Sprint')
            res.status(500).send('error while sprintCloseChks')
        }
    })
}

module.exports = UserController