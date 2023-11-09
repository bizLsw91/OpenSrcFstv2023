import {Container} from "react-bootstrap";
import { useState} from "react";
import {Link} from "react-router-dom";



const NoticeDetailArea = ({post}) => {
    // 게시물 목록을 저장할 상태 변수
    const [data] = useState(post);





    return (
        <div id="NoticeDetailArea">
            <Container>
                <div className="noticeDetail__area">
                    <div className="noticeDetail__content">
                        <h2 className="noticeDetail__title">{data.title}</h2>
                        <Link to="/notice">목록으로</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoticeDetailArea;