const moment = require("moment");

const collectionPath = 'Notice'

/**
 *  게시판 데이터 가져오기
 * @param db - 파이어스토어
 * @param {object} req - 사용자 정보 오브젝트
 * @param {number} req.pageNumber - 페이지 번호
 * @param {number} req.pageSize - 페이지 당 데이터 수
 * @param {number} req.searchType - 검색타입(0:제목, 1:내용)
 * @param {string} req.searchText - 검색어
 * @returns {Promise<Array>} - 게시물 목록을 포함하는 Promise
 */
async function getPosts(db, req) {
    return new Promise(async (resolve, reject) => {
        const pageNumber = (req && req.pageNumber) || 1;
        const pageSize = (req && req.pageSize) || 10;
        const searchText = (req && req.searchText) || '';
        const searchType = (req && req.searchType) || 0;

        let query = db.collection(collectionPath);

        // if (searchText) {
        //     if (searchType === 0) {
        //         query = query.where('title', '>=', searchText).where('title', '<=', searchText + '\uf8ff');
        //     } else if (searchType === 1) {
        //         query = query.where('content', '>=', searchText).where('content', '<=', searchText + '\uf8ff');
        //     }
        // }

        query = query.orderBy('categoryCode', 'desc').orderBy('index', 'desc').limit(pageSize).offset((pageNumber - 1) * pageSize);

        const querySnapshot = await query.get();
        const posts = [];

        try {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                posts.push({
                    index: data.index,
                    title: data.title,
                    content: data.content,
                    categoryCode: data.categoryCode,
                    author: data.author,
                    date: moment(data.timestamp, 'YYYYMMDDHHmmss').format('YYYYMMDD'),
                    views: data.views,
                });
            });
            // return posts
            resolve(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            reject(error);
        }
        });
    }


    /**
     * 게시물을 추가하는 서비스 함수
     * @param {object} noticeFields - 게시물 작성자의 이름. (필수값)
     * @param {string} noticeFields.author - 게시물 작성자의 이름. (필수값)
     * @param {string} noticeFields.title - 게시물 제목. (필수값)
     * @param {string} noticeFields.content - 게시물 내용 (기본값: 빈 문자열).
     * @param {number} noticeFields.categoryCode - 게시물 카테고리 코드 (기본값: 0).
     * @param {number} noticeFields.file_idx - 파일 인덱스 (기본값: 0).
     * @param {string} noticeFields.url_img - 이미지 URL (기본값: 빈 문자열).
     * @returns {Promise} - 게시물 추가 결과를 나타내는 프로미스.
     */
    async function addNotice(db, noticeFields) {
        const indexDocRef = db.collection('Index').doc('idx_Notice');
        const noticeCollRef = db.collection(collectionPath);

        return await db.runTransaction(async (transaction) => {
            // Index 문서에서 현재 인덱스 가져오기
            const indexSnap = await transaction.get(indexDocRef);
            const currIndex = indexSnap.data().index;
            const nextIndex = currIndex + 1;
            noticeFields.index = nextIndex

            // Notice 컬렉션에 새 문서 추가
            const newNoticeRef = noticeCollRef.doc(nextIndex.toString());
            transaction.set(newNoticeRef, noticeFields);

            // Index 문서의 index 필드 업데이트
            transaction.update(indexDocRef, {index: nextIndex});
            return nextIndex
        });
    }

    /**
     * 특정 게시물 조회 수 증가 서비스 함수
     * @param db {json}  - 파이어스토어
     * @param postId {string}  - 조회 수를 증가할 게시물의 문서 ID
     * @returns {Promise} - 조회 수 증가 결과를 나타내는 프로미스.
     */
    async function incrementPostView(db, postId) {
        const postRef = db.collection(collectionPath).doc(postId);
        return await db.runTransaction(async (transaction) => {
            const postSnap = await transaction.get(postRef);
            if (!postSnap.exists) {
                throw new Error("게시물을 찾을 수 없습니다.");
            }

            const newViews = (postSnap.data().views || 0) + 1;
            transaction.update(postRef, {views: newViews});
        });
    }

    /**
     * 특정 게시물 조회 서비스 함수
     * @param {object} db - 파이어스토어
     * @param {string} postId - 조회할 게시물의 문서 ID
     * @returns {Promise} - 조회한 게시물을 나타내는 프로미스.
     */
    async function getPostById(db, postId) {
        const postRef = db.collection(collectionPath).doc(postId);
        const postSnap = await postRef.get();
        if (!postSnap.exists) {
            throw new Error("게시물을 찾을 수 없습니다.");
        }
        return postSnap.data();
    }

    async function getPrevNextIdx(db, postId) {
        //filed 의 index
        let prevIdx = -1
        let nextIdx = -1
        try {
            // Notice 컬렉션을 categoryCode 및 index에 따라 정렬
            const query = db.collection(collectionPath)
                .orderBy('categoryCode', 'desc')
                .orderBy('index', 'desc');

            const snapshot = await query.get();
            const docs = snapshot.docs;
            const arrIdx = docs.findIndex(doc=>doc.data().index === Number(postId))
            if(arrIdx > 0) prevIdx = docs[arrIdx-1]?.data().index
            if(arrIdx >= 0) nextIdx = docs[arrIdx+1]?.data().index

            return {prevIdx:prevIdx || -1, nextIdx:nextIdx || -1 };
        } catch (error) {
            console.error('Error:', error);
            throw new Error('')
        }
    }


    module.exports = {
        getPosts,
        addNotice,
        getPostById,
        incrementPostView,
        getPrevNextIdx,
    }