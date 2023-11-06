import {Container} from "react-bootstrap";
import KakaoMap from "../../../components/KakaoMap/KakaoMap";

const DirectionsArea = () => {
    return (
        <div id="DirectionsArea">
            <Container>
                {/*<div id="map" style="width:500px;height:400px;"></div>*/}
                <KakaoMap/>


            </Container>
        </div>
    );
};

export default DirectionsArea;