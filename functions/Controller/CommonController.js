const {addErrLog} = require("../Service/CommonService");

function CommonController(router, firestore) {
    router.post('/Error/addErrLog', async (req, res) => {
        const collectionPath = req.body?.collectionPath || ''
        const error = req.body?.error || {stack:''}
        try {
            await addErrLog(1, firestore, req, error, collectionPath)
            res.status(200).send('addErrLog OK')
        }catch (err){
            res.status(500).send('addErrLog FAIL')
        }
    })
}


module.exports = CommonController