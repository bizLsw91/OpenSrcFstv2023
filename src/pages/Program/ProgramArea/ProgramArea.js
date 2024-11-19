import {Container} from "react-bootstrap";
import { Image } from 'antd';
import HeadingWithLines from "../../../components/HeadingWithLines/HeadingWithLines";

const ProgramArea = () => {
    return (
        <div id="ProgramArea">
            <Container>
                <div className="program__area">
                    <div className="program__content">
                        <HeadingWithLines text={'프로그램'} />
                        <Image
                            className="imgBox"
                            src='assets/img/2024design/program.webp' // 이미지 URL을 넣으세요
                            preview={false}
                            // preview={{ src: "assets/img/openSW/openSW-program-noTitle.jpg" }} // 클릭할 때만 확대되도록 설정
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