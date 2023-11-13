const moment = require("moment");

const collectionPath = 'Faq'

/**
 *  Faq 데이터 가져오기
 * @param db - 파이어스토어
 * @param {object} req - Faq 정보 오브젝트
 * @param {number} req.pageNumber - 페이지 번호 (기본값:1)
 * @param {number} req.pageSize - 페이지 당 데이터 수 (기본값:10)
 * @param {number} req.categoryCode - 0:일반 (기본값:0)
 * @returns {Promise<Array>} - Faq 목록을 포함하는 Promise
 */
async function getFaqs(db, req) {
    const pageNumber = req?.pageNumber || 1;
    const pageSize = req?.pageSize || 10;
    const cateCode = req?.categoryCode || 0;

    let query = db.collection(collectionPath);
    let totQuery = db.collection(collectionPath)
    if(cateCode === 0){
        totQuery = totQuery.orderBy('categoryCode', 'asc').orderBy('index', 'desc')
        query = query.orderBy('categoryCode', 'asc').orderBy('index', 'desc').limit(pageSize).offset((pageNumber - 1) * pageSize);
    }
    else{
        totQuery = totQuery.where('categoryCode','==',cateCode).orderBy('index', 'desc')
        query = query.where('categoryCode','==',cateCode).orderBy('index', 'desc').limit(pageSize).offset((pageNumber - 1) * pageSize);
    }


    const totQuerySnapshot = await totQuery.get();
    const querySnapshot = await query.get();
    console.log("querySnapshot = ", querySnapshot);
    console.log("querySnapshot = ", typeof querySnapshot);
    const faqs = [];

    try {
        const totDocs = totQuerySnapshot.docs;
        const docs = querySnapshot.docs;
        docs.forEach((doc) => {
            const data = doc.data();
            faqs.push({
                index: data.index,
                question: data.question,
                answer: data.answer,
                categoryCode: data.categoryCode,
                date: moment(data.timestamp, 'YYYYMMDDHHmmss').format('YYYYMMDD'),
            });
        });
        // return faqs
        return {faqs:faqs, tot:totDocs.length}
    } catch (error) {
        console.error('Error getting faqs:', error);
        throw error
    }
}


async function addFaq(db, faqFields) {
    const FaqCollRef = db.collection(collectionPath);
    const idxFaqDocRef = db.collection('Index').doc('idx_Faq');

    return await db.runTransaction(async (transaction) => {
        // Index 문서에서 현재 인덱스 가져오기
        const idxFaqSnap = await transaction.get(idxFaqDocRef);
        const currIndex = idxFaqSnap.data().index;
        const nextIndex = currIndex + 1;
        faqFields.index = nextIndex

        // Notice 컬렉션에 새 문서 추가
        const newNoticeRef = FaqCollRef.doc(nextIndex.toString());
        transaction.set(newNoticeRef, faqFields);

        // Index 문서의 index 필드 업데이트
        transaction.update(idxFaqDocRef, {index: nextIndex});
        return nextIndex
    });
}



module.exports = {
    getFaqs,
    addFaq,
}