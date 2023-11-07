// const admin = require("firebase-admin");
// const firestore = admin.firestore();
//
// const ipMiddleware = async (req, res, next) => {
//     const ip = req.ip;
//     // Firestore에 IP를 저장하고 요청 횟수를 업데이트하는 함수
//     await updateRequestCount(ip);
//     next();
// };
//
// const updateRequestCount = async (ip) => {
//     const today = new Date().toISOString().slice(0, 10);
//     const ipRef = firestore.collection('IPRequests').doc(ip);
//
//     return firestore.runTransaction(async (transaction) => {
//         const ipDoc = await transaction.get(ipRef);
//
//         if (!ipDoc.exists) {
//             transaction.set(ipRef, { count: 1, date: today });
//         } else if (ipDoc.data().date === today) {
//             transaction.update(ipRef, { count: firestore.FieldValue.increment(1) });
//         } else {
//             transaction.update(ipRef, { count: 1, date: today });
//         }
//     });
// };
//
// const requestLimitMiddleware = async (req, res, next) => {
//     const ip = req.ip;
//     const limit = 100; // 하루 요청 한도
//     const ipRef = firestore.collection('IPRequests').doc(ip);
//     const ipDoc = await ipRef.get();
//
//     if (ipDoc.exists && ipDoc.data().count > limit) {
//         return res.status(429).send('요청 한도 초과');
//     } else {
//         next();
//     }
// };
//
// module.exports= {ipMiddleware, requestLimitMiddleware}