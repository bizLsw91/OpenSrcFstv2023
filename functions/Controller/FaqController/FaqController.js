const moment = require("moment");
const {getFaqs, addFaq} = require("../../Service/FaqService");

function FaqController(router, firestore) {


    router.post("/getFaqs", async (req, res) => {
        try {
            const data = await getFaqs(firestore, req?.body)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).send(error.message);
        }
    })

    router.post("/addFaq", async (req, res) => {
        try {
            const currentDateTime = moment().format('YYYYMMDDHHmmss');

            const FaqData = {
                question: req.body.question,
                answer: req.body.answer || '',
                categoryCode: req.body.categoryCode || 1,
                timestamp: currentDateTime
            };

            const newIndex = await addFaq(firestore, FaqData)
            res.status(200).json({newIndex: newIndex})
        } catch (error) {
            res.status(500).send(error.message);
        }
    })
}

module.exports = FaqController