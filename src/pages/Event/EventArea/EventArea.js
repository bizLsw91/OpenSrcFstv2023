import {Container} from "react-bootstrap";
import {Image} from "antd";
import HeadingWithLine from "../../../components/HeadingWithLines/HeadingWithLines";

const EventArea = () => {
    return (
        <div id="EventArea">
            <Container>
                <div className="program__area">
                    <div className="program__content">
                        <HeadingWithLine text={'이벤트'}/>
                        <Image
                            className="imgBox"
                            movable={true}
                            src='https://ossfestival.kr/assets/img/2024design/event.png' // 이미지 URL을 넣으세요
                            preview={false} // 클릭할 때만 확대되도록 설정
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EventArea;