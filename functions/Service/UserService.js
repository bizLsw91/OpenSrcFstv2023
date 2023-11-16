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


module.exports = {
    getUserCnt,
    addUserSpr,
    sprintCloseChk,
    sprintCloseChks
}