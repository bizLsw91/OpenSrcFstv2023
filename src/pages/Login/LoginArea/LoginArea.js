import {Container} from "react-bootstrap";

const LoginArea = () => {
    return (
        <Container>
            <div id="LoginArea" className="login__area">
                <div className="login__widget grey-bg-18 mb-40">
                    <div className="login__widget-title">
                        <h5>로그인을 하시면 Q&A 게시판에 질문을 등록하실 수 있습니다.</h5>
                    </div>
                    <div className="login__widget-content">
                        <div className="login__form">
                            <form>
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                {/*<div><a href="" className="underline__black ml-5">비밀번호 찾기</a></div>*/}
                                <button className="z-btn z-btn-3 w-100 mt-10">로그인</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LoginArea;