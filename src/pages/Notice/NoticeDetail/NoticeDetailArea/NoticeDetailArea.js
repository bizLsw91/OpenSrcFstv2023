import {Container} from "react-bootstrap";
import { useState} from "react";
import {Link} from "react-router-dom";
import moment from "moment";



const NoticeDetailArea = ({post}) => {
    // 게시물 목록을 저장할 상태 변수
    const [data] = useState(post);


    const fomatDate = (date)=>{
        return moment(date, 'YYYYMMDD').format('YYYY-MM-DD')
    }


    return (
        <div id="NoticeDetailArea">
            <Container>
                <div className="noticeDetail__area">
                    <div className="noticeDetail__content">
                        <h2 className="title">공지사항</h2>
                        <h2 className="postTitle">{data.title}</h2>
                        <div className="subInfo">
                            <div className="author">작성자: <p>{data.author}</p></div>
                            <div className="rightBox">
                                <div className="views">조회수: <p>{data.views+1}</p></div>
                                <div className="date">등록일: <p>{fomatDate(data.date)}</p></div>
                            </div>
                        </div>
                        <div className='postContent'  dangerouslySetInnerHTML={{ __html: data.content }}>
                        </div>
                        <div className='postFooter'>
                            <div className="btn prevBtn"><Link to={"/notice/prev/"+data.index}></Link></div>
                            <div className="btn listBtn"><Link to="/notice">목록으로</Link></div>
                            <div className="btn nextBtn"><Link to={"/notice/next/"+data.index}>다음글</Link></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoticeDetailArea;