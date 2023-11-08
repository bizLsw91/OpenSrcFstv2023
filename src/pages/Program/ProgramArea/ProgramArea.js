import {Container} from "react-bootstrap";
import { Image } from 'antd';

const ProgramArea = () => {
    return (
        <div id="ProgramArea">
            <Container>
                <div className="program__area">
                    <div className="program__content">
                        <h2 className="program__title">프로그램</h2>
                        <p className="d-sm-none">※클릭하시면 확대해서 보실 수 있습니다.</p>
                        <Image
                            className="imgBox"
                            movable={true}
                            src='assets/img/edm/edm-program.jpg' // 이미지 URL을 넣으세요
                            preview={{ src: "assets/img/edm/edm-program.jpg" }} // 클릭할 때만 확대되도록 설정
                        />

                        {/*<div className="d overall"><ProgramOverall/></div>*/}
                        {/*<div className="d r401"><Program401/></div>*/}
                        {/*<div className="d r402"><Program402/></div>*/}
                        {/*<div className="d r403"><Program403/></div>*/}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProgramArea;