const moment = require("moment/moment");
// const {execSync} = require('child_process');

async function addErrLog(db, req, error, collection, code) {
    const errData = {
        code: code || '',
        collection:collection||'',
        // gitHead: execSync('git rev-parse HEAD').toString().trim()||'',
        ip: req.ip ||'',
        url: req.originalUrl ||'',
        payload: req.body ||'',
        stack: error.stack ||'',
        timestamp: moment().format('YYYYMMDDHHmmss')||''
    };
    // doc() 메서드를 사용하여 문서 ID를 email로 설정
    const collRef = db.collection('ErrLog');
    if(errData.collection==='User'){
        const docRef = collRef.doc(errData.url.replaceAll('/','')+'_'+errData.payload.email+'_'+errData.timestamp)
        await docRef.set(errData)
    }else{
        await collRef.add(errData);
    }
    console.log('errLog 저장')
}



module.exports = {
    addErrLog,
}