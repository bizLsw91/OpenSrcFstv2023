const collectionPath = 'User'
async function getUserCnt(db) {
    const snapshot = await db.collection(collectionPath).get()
    const docs = snapshot.docs
    return docs.length
}


module.exports = {
    getUserCnt,
}