import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import moment from "moment";
import axios from "axios";
import appConfig from "../../../../config/app.config";


const api_getPrevNextIdx = async (index) => {
    return await axios.get(appConfig.apiPreUrl + '/Notice/getPrevNextIdx/' + index)
};
const api_getPost = async (index) => {
    return await axios.get(appConfig.apiPreUrl + '/Notice/'+index)
};


const NoticeDetailArea = ({post}) => {
    // 게시물 목록을 저장할 상태 변수
    const navigate = useNavigate()
    const [data, setData] = useState(post);
    const [pnIdx, setPnIdx] = useState({prevIdx: -1, nextIdx: -1});
    console.log("pnIdx.prevIdx1 = ", pnIdx.prevIdx);
    console.log("pnIdx.nextIdx1 = ", pnIdx.nextIdx);
    const errMsg1='서버와 통신중 에러가 발생하였습니다.'
    const errMsg2= '게시글을 조회하는데 실패하였습니다.'
    const fetchData = async (idx) => {
        try {
            const res = await api_getPrevNextIdx(idx)
            console.log("res = ", res);
            if (res.status === 200) {
                setPnIdx(res.data)
            }
        } catch (err) {
            alert(errMsg1)
        }
    }

    useEffect( () => {
        fetchData(data.index)
    },[])

    useEffect(()=>{
        console.log("pnIdx.prevIdx = ", pnIdx.prevIdx);
        console.log("pnIdx.nextIdx = ", pnIdx.nextIdx);
    },[pnIdx])


    const fomatDate = (date) => {
        return moment(date, 'YYYYMMDD').format('YYYY-MM-DD')
    }


    const move = async (idx)=>{
        try {
            const res = await api_getPost(idx)
            if (res.status === 200) {
                setData(res.data)
            }
           } catch (err) {
                alert(errMsg2)
            }
    }

    return (
        <div id="NoticeDetailArea">
            <Container>
                <div className="noticeDetail__area">
                    <div className="noticeDetail__content">
                        <h2 className="title">공지사항</h2>
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
                                <div className="views">조회수: <p>{data.views + 1}</p></div>
                                <div className="date">등록일: <p>{fomatDate(data.date)}</p></div>
                            </div>
                        </div>
                        <div className='postContent' dangerouslySetInnerHTML={{__html: data.content}}>
                        </div>
                        <div className='postFooter'>
                            <div className={'btn prevBtn'+(pnIdx.prevIdx < 0 ? ' d-none':'')} onClick={() => move(pnIdx.prevIdx)}>이전글</div>
                            <div className="btn listBtn"><Link to="/notice">목록으로</Link></div>
                            <div className={'btn nextBtn'+(pnIdx.nextIdx < 0 ? ' d-none':'')} onClick={() => move(pnIdx.nextIdx)}>다음글</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoticeDetailArea;