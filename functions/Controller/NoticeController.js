const moment = require("moment");
const {addNotice, getPosts, incrementPostView, getPostById, getPrevNextIdx} = require("../Service/NoticeService");

function NoticeController(router, firestore) {

    router.post("/getPosts", async (req, res) => {
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

    // 조회수 증가 API
    router.get("/viewsUp/:postId", async (req, res) => {
        try {
            const postId = req.params.postId;
            await incrementPostView(firestore, postId);
            res.status(200).send('success');
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    // 게시글 조회
    router.get("/:postId", async (req, res) => {
        try {
            const postId = req.params.postId;
            const post = await getPostById(firestore, postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    // 게시글 조회 및 조회수 증가 API
    router.get("/getPostAndViewsUp/:postId", async (req, res) => {
        try {
            const postId = req.params.postId;
            await incrementPostView(firestore, postId);
            const post = await getPostById(firestore, postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    // 이전글, 다음글 여부 체크
    router.get("/getPrevNextIdx/:postId", async (req, res) => {
        try {
            const postId = req.params.postId;
            const data = await getPrevNextIdx(firestore, postId);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}

module.exports = NoticeController