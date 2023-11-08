import {Container} from "react-bootstrap";
import {Image} from "antd";

const HomeArea = () => {

    return (
        <div id="HomeArea">
            <Container>
                <div className="home__area">
                    <div className="home__content">
                        <Image
                            maskClassName="imgBox"
                            movable={true}
                            src='assets/img/openSW/openSW-program.png' // 이미지 URL을 넣으세요
                            preview={{src: "assets/img/openSW/openSW-program.png"}} // 클릭할 때만 확대되도록 설정
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeArea;