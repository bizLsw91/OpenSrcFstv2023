const moment = require("moment");
const {addErrLog} = require("../Service/CommonService");

function UserController(router, firestore) {
    const collectionPath = 'User'

    router.get('/', async (req, res) => {
        const snapshot = await firestore.collection(collectionPath).orderBy('timestamp', 'asc').get();
        const users = snapshot.docs.map(doc => ({email: doc.id, ...doc.data()}));
        res.status(200).send(users);
    });

    router.post("/", async (req, res) => {
        const currentDateTime = moment().format('YYYYMMDDHHmmss');
        const email = req.body.email; // 이메일 값을 변수로 추출

        try {
            const userData = {
                name: req.body.name,
                company: req.body.company,
                call: req.body.call,
                timestamp: currentDateTime
            };
            // doc() 메서드를 사용하여 문서 ID를 email로 설정
            const userRef = firestore.collection(collectionPath).doc(email);
            // set() 메서드를 사용하여 문서에 userData를 설정
            await userRef.set(userData);
            res.status(200).send(`새로운 User 추가 ID: ${email}`);
        } catch (error) {
            await addErrLog(0, firestore, req, error, collectionPath)
            res.status(500).send(error.message);
        }
    });

    router.post("/check", async (req, res) => {
        try {
            const {email, name} = req.body; // 요청 본문에서 email과 name을 추출
            const docRef = firestore.collection('User').doc(email); // 문서 참조 생성
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


}

module.exports = UserController