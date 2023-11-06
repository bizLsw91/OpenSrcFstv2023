import {Container} from "react-bootstrap";
import KakaoMap from "../../../components/KakaoMap/KakaoMap";

const DirectionsArea = () => {
    return (
        <div id="DirectionsArea">
            <Container>
                <div className="directions__area">
                    <div className="directions__content">
                        <h2 className="directions__title">오시는 길</h2>
                        <KakaoMap/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DirectionsArea;