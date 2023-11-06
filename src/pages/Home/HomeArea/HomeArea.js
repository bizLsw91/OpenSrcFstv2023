import {Container} from "react-bootstrap";
import appConfig from "../../../config/app.config";

const isShow = appConfig.isShow
const HomeArea = () => {

    return (
        <div id="HomeArea">
            <Container>
                {!isShow && <h1 className="p-5">오픈 준비중 입니다.</h1>}
                {isShow &&
                    <div className="home__area">
                        <h1 className="p-5">준비중 </h1>
                    </div>
                }
            </Container>
        </div>
    );
};

export default HomeArea;