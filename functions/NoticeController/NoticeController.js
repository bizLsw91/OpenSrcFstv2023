const moment = require("moment");
const {addNotice, getPosts, incrementPostView, getPostById} = require("../Service/NoticeService");

function NoticeController(router, firestore) {

    router.post("/getPosts", async (req, res) => {
        console.log("NoticeController req = ", req);
        try {
            const posts = await getPosts(firestore, req.body)
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).send(error.message);
        }
    })

    router.post("/", async (req, res) => {
        try {
            const currentDateTime = moment().format('YYYYMMDDHHmmss');

            const NoticeData = {
                author: req.body.author,
                categoryCode: req.body.categoryCode || 0,
                content: req.body.content || '',
                file_idx: req.body.file_idx || 0,
                title: req.body.title,
                url_img: req.body.url_img || '',
                views: 0,
                timestamp: currentDateTime
            };

            const newIndex = await addNotice(firestore, NoticeData)
            res.status(200).json({newIndex: newIndex})
        } catch (error) {
            res.status(500).send(error.message);
        }
    })


    // 게시글 조회 및 조회수 증가 API
    router.get("/:postId", async (req, res) => {
        try {
            const postId = req.params.postId;
            await incrementPostView(firestore, postId);
            const post = await getPostById(firestore, postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

}

module.exports = NoticeController