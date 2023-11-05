import {Container} from "react-bootstrap";

const DocRefusalArea = () => {
    return (
        <div id="DocRefusalArea">
            <Container>
                <div className="docRefusal__area">
                    <div className="docRefusal__widget grey-bg-18">
                        <h1>이메일주소 무단수집 거부</h1>
                        <br/><br/>

                        <h5>우리 "공개SW페스티벌I" 회원에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해, 본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.</h5>
                        <br/>
                        <p>게시일 2023년 11월 01일</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DocRefusalArea;