const collectionPath = 'User'
const collectionPath2 = 'UserSpr'
async function getUserCnt(db, req) {
    const {isSprint} = req.body;
    const collPath = !isSprint ? collectionPath : collectionPath2
    const snapshot = await db.collection(collPath).get()
    const docs = snapshot.docs
    return docs.length
}


module.exports = {
    getUserCnt,
}