const moment = require("moment");

function UserController (router, firestore) {
    const collectionPath = 'User'

    router.get('/', async (req, res) => {
        const snapshot = await firestore.collection(collectionPath).orderBy('timestamp', 'asc').get();
        const users = snapshot.docs.map(doc => ({ email: doc.id, ...doc.data() }));
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
            res.status(500).send(error.message);
        }
    });

    router.post("/check", async (req, res) => {
        const { email, name } = req.body; // 요청 본문에서 email과 name을 추출
        const docRef = firestore.collection('User').doc(email); // 문서 참조 생성

        try {
            const doc = await docRef.get(); // 문서 가져오기
            if (doc.exists && doc.name == name) {
                res.status(200).json(doc.data());
            } else {
                res.status(404).send('이메일 주소와 이름을 다시 확인해주세요.');
            }
        } catch (error) {
            // 서버 에러 처리
            console.error('Error fetching user:', error);
            res.status(500).send(error.message);
        }
    })


}

module.exports = UserController