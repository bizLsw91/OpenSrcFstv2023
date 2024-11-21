import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import axios from "axios";
import appConfig from "../../../../config/app.config";
import SpinByW from "../../../../components/SpinByW/SpinByW";
import HeadingWithLine from "../../../../components/HeadingWithLines/HeadingWithLines";


const NoticeDetailArea = ({index}) => {
    console.log('Rendering')
    // 게시물 목록을 저장할 상태 변수
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [pnIdx, setPnIdx] = useState({prevIdx: -1, nextIdx: -1});
    const errMsg1 = '게시글을 조회하는데 실패하였습니다.'
    const errMsg2 = '서버와 통신중 에러가 발생하였습니다.'
    const fetchData = async (idx) => {
        setLoading(true)
        try {
            const res1 = await api_getPostAndViewsUp(idx)
            setLoading(false)
            if (res1.status === 200) setData(res1.data)
        } catch (err) {
            setLoading(false)
            alert(errMsg1)
        }
        try {
            const res2 = await api_getPrevNextIdx(idx)
            setLoading(false)
            if (res2.status === 200) setPnIdx(res2.data)
        } catch (err) {
            setLoading(false)
            alert(errMsg2)
        }
    }

    useEffect(() => {
        fetchData(index)
    }, [])

    useEffect(() => {
        console.log('ll', loading)
    }, [loading])


    const fomatDate = (date) => {
        if (!date) return
        return moment(date, 'YYYYMMDD').format('YYYY-MM-DD')
    }


    const move = async (idx) => {
        fetchData(idx)
    }

    return (
        <div id="NoticeDetailArea">
            <Container>
                <div className="noticeDetail__area">
                    <HeadingWithLine text={'공지사항'} />
                    <SpinByW loading={loading}/>
                    <div className="noticeDetail__content">
                        {data.categoryCode === 0 ?
                            <h2 className="postTitle">{data.title}</h2>
                            :
                            <div className="titleDiv">
                                <div className="star">★</div>
                                <h2 className="postTitle">{data.title}</h2>
                            </div>
                        }
                        <div className="subInfo">
                            <div className="author">작성자: <p>{data.author}</p></div>
                            <div className="rightBox">
                                <div className="views">조회수: <p>{data.views}</p></div>
                                <div className="date">등록일: <p>{fomatDate(data.date)}</p></div>
                            </div>
                        </div>
                        <div className='postContent' dangerouslySetInnerHTML={{__html: data.content}}>
                        </div>
                        <div className='postFooter'>
                            <div className={'btn prevBtn' + (pnIdx.prevIdx < 0 ? ' d-none' : '')}
                                 onClick={() => move(pnIdx.prevIdx)}>이전글
                            </div>
                            <div className="btn listBtn"><Link to="/notice">목록으로</Link></div>
                            <div className={'btn nextBtn' + (pnIdx.nextIdx < 0 ? ' d-none' : '')}
                                 onClick={() => move(pnIdx.nextIdx)}>다음글
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
};
const api_getPrevNextIdx = async (index) => {
    return await axios.get(appConfig.apiPreUrl + '/Notice/getPrevNextIdx/' + index)
};


const api_getPostAndViewsUp = async (index) => {
    return await axios.get(appConfig.apiPreUrl + '/Notice/getPostAndViewsUp/' + index)
};

export default NoticeDetailArea;