const moment = require('moment-timezone');
const collectionPath = 'User'
const collectionPath2 = 'UserSpr'
async function getUserCnt(db, isSprint) {
    const collPath = !isSprint ? collectionPath : collectionPath2
    const snapshot = await db.collection(collPath).get()
    const docs = snapshot.docs
    return docs.length
}
async function sprintCloseChk(db, sprintId) {
    const docSnapshot = await db.collection('Sprint').doc('p'+sprintId).get()
    const doc = docSnapshot.data()
    return doc.isClosed
}
async function sprintCloseChks(db) {
    const collSnapshot = await db.collection('Sprint').get()
    let isClosedArr = []
    collSnapshot.forEach((doc)=>{
        isClosedArr.push(doc.data().isClosed)
    })
    return isClosedArr
}

async function addUserSpr(db, userData, email) {
    const userSprCollRef = db.collection(collectionPath2);
    const sprintDocRef = db.collection('Sprint').doc('p'+userData.sprint);

    return await db.runTransaction(async (transaction) => {
        //스프린트 카운트 업
        const sprintPnumSnap = await transaction.get(sprintDocRef);
        const sprintData = sprintPnumSnap.data();
        const currCount = sprintData.count
        const limit = sprintData.limit
        transaction.update(sprintDocRef, {count: currCount+1});

        //스프린트 조건부 Close
        if(currCount+1 === limit*2){
            transaction.update(sprintDocRef, {isClosed: true});
        }

        // UserSpr 컬렉션에 새 문서 추가
        const newUserSprDocRef = userSprCollRef.doc(email);
        transaction.set(newUserSprDocRef, userData);
    });
}

async function getAllDocumentIds(db, collectionPath) {
    try {
        const snapshot = await db.collection(collectionPath).listDocuments();
        const documentIds = snapshot.map((doc) => doc.id);
        return documentIds;
    } catch (error) {
        throw new Error('Failed to get document IDs');
    }
}

async function passwordErrHandle(db, docRef, passwordErrData) {
    const tempLockCnt = 5 //임시잠금되는 실패횟수
    const tempLockTime_mm = 5 //5분 뒤에 다시 시도 가능
    const permanentLockCnt = tempLockCnt*2 //영구잠금되는 실패횟수

    let errData = {
        isSuccess: false,
        chkFailCount: 0,
        isPermanentLock:false,
        isLock:false, //등록확인 서비스 잠금여부
        lockTimestamp:'',
        unLockTimestamp:'',
        tempLockTime_mm,
        tempLockCnt,
        permanentLockCnt
    }
    try {
        if(passwordErrData) errData = passwordErrData

        if(errData.isSuccess){
            errData.chkFailCount = 0
            errData.isPermanentLock = false
            errData.isLock = false
            errData.lockTimestamp = ''
            errData.unLockTimestamp = ''
        }else{
            if(!errData.isLock && !errData.isPermanentLock) errData.chkFailCount += 1; // 등록확인 이름 불일치 건수 1 증가

            //등록확인 서비스 잠금/풀기 로직
            if(errData.chkFailCount === tempLockCnt){
                // 5번째 실패 시
                if(!errData.isLock){
                    // 5번째 실패, 잠금 처리 전 잠금처리 로직
                    errData.isLock = true
                    let lockTime = moment().tz("Asia/Seoul");
                    errData.lockTimestamp = lockTime.format('YYYYMMDDHHmmss');
                    let unlockTime = lockTime.add(tempLockTime_mm, 'minutes');
                    errData.unLockTimestamp = unlockTime.format('YYYYMMDDHHmmss');
                }else{
                    // 5번째 실패, 잠금 처리 후 시간지났는지 확인
                    let nowTS = moment().tz("Asia/Seoul").format('YYYYMMDDHHmmss')
                    if(nowTS>=errData.unLockTimestamp){
                        errData.isLock = false
                        errData.chkFailCount += 1
                    }
                }
            }else if(errData.chkFailCount === permanentLockCnt  && !errData.isPermanentLock){
                // 10번째 실패, 잠금처리 전 ->  등록확인 서비스 영구 잠금
                errData.isPermanentLock = true
            }
        }

        // DB 업데이트
        await docRef.update({ passwordErrData:errData });

        // 업데이트된 값을 포함한 관련 정보 리턴
        return errData;
    } catch (error) {
        throw new Error('Failed to passwordErrCntUp');
    }
}

module.exports = {
    getUserCnt,
    addUserSpr,
    sprintCloseChk,
    sprintCloseChks,
    getAllDocumentIds,
    passwordErrHandle,
}