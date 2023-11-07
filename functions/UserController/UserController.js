function UserController (router, firestore) {
    router.get('/get', async (req, res) => {
        const snapshot = await firestore.collection('user').orderBy('timestamp', 'asc').get();
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(users);
    });
}

module.exports = UserController