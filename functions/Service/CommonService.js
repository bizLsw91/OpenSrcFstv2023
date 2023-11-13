const moment = require("moment/moment");
// const {execSync} = require('child_process');

/**
 * 에러 로그를 Firestore의 ErrLog 컬렉션에 추가하는 함수.
 * @param {number} callLocation - 에러가 발생한 호출 위치 (0: Backend, 1: Frontend).
 * @param {Object} db - Firestore 데이터베이스 객체.
 * @param {Object} req - Express 요청 객체.
 * @param {Error} error - 발생한 에러 객체.
 * @param {string} collection - 에러가 발생한 컬렉션 이름 (예: 'User').
 * @param {number} code - 에러 코드 또는 식별자 (선택 사항).
 */
async function addErrLog(callLocation, db, req, error, collection , code) {
    const timestamp = moment().format('YYYYMMDD_HHmmss_SSS')||'';
    const payload = callLocation === 0 ? (req.body ||'null1') : (callLocation === 1 ? (req.body.payload || 'null2') : 'null3')
    const errData = {
        code: code || 99,
        collection:collection || '',
        // gitHead: execSync('git rev-parse HEAD').toString().trim()||'',
        ip: req.ip ||'',
        url: req.originalUrl ||'',
        payload: payload,
        stack: error.stack ||'',
        timestamp: timestamp
    };
    // doc() 메서드를 사용하여 문서 ID를 email로 설정
    const collectionPath = callLocation === 0 ? 'ErrLog' : 'ErrLog_Front'
    const collRef = db.collection(collectionPath);
    const urlNick = errData.url.replaceAll('/','');
    let docRef = {}
    if(errData.collection==='User'){
        docRef = collRef.doc(urlNick+'_'+errData.payload.email+'_'+timestamp)
    }else{
        docRef = collRef.doc(timestamp+'-'+urlNick)
    }
        await docRef.set(errData);
    console.log('errLog 저장')
}



module.exports = {
    addErrLog,
}