import {Container} from "react-bootstrap";
import {Image} from "antd";

const EventArea = () => {
    return (
        <div id="EventArea">
            <Container>
                <div className="program__area">
                    <div className="program__content">
                        <h2 className="program__title">이벤트</h2>
                        <p className="d-sm-none">※클릭하시면 확대해서 보실 수 있습니다.</p>
                        <Image
                            className="imgBox"
                            movable={true}
                            src='assets/img/edm/edm-event.png' // 이미지 URL을 넣으세요
                            preview={{ src: "assets/img/edm/edm-event.jpg" }} // 클릭할 때만 확대되도록 설정
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EventArea;