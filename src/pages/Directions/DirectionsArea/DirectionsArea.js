import {Container} from "react-bootstrap";
import KakaoMap from "../../../components/KakaoMap/KakaoMap";
import HeadingWithLines from "../../../components/HeadingWithLines/HeadingWithLines";

const DirectionsArea = () => {
    return (
        <div id="DirectionsArea">
            <Container>
                <div className="directions__area">
                    <div className="directions__content">
                        <HeadingWithLines text={'오시는 길'} />
                        <div className="infoBox w-100">
                            <div className="mb-10 w250"><h5>주소</h5>서울특별시 강남구 영동대로 513</div>

                            <div className="station_wayout mb-10 w250">
                                <h5 className="tit_popular">지하철역</h5>
                                <ul className="list_wayout">
                                    <li>
                                        <a href="https://m.map.kakao.com/actions/detailMapView?id=SES0929"
                                           className="wrap_wayout" data-logtarget="" data-logevent="waytogo,subway">
                                            <span className="info_wayout">
                                                <span className="txt_station">봉은사역</span>
                                                <span className="ico_traffic">9</span>
                                                <span className="txt_bar"> | </span>
                                                <span className="color_g2">7번 출구 <em
                                                    className="txt_walk">도보 4분</em></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://m.map.kakao.com/actions/detailMapView?id=SES0219"
                                           className="wrap_wayout" data-logtarget="" data-logevent="waytogo,subway">
                                            <span className="info_wayout">
                                                <span className="txt_station">삼성역</span>
                                                <span className="ico_traffic gr">2</span>
                                                <span className="txt_bar"> | </span>
                                                <span className="color_g2">5번, 6번 출구 <em
                                                    className="txt_walk">도보 13분</em></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://m.map.kakao.com/actions/detailMapView?id=SES2731"
                                           className="wrap_wayout" data-logtarget="" data-logevent="waytogo,subway">
                                            <span className="info_wayout">
                                                <span className="txt_station">청담역</span>
                                                <span className="ico_traffic">7</span>
                                                <span className="txt_bar"> | </span>
                                                <span className="color_g2">2번 출구 <em
                                                    className="txt_walk">도보 20분</em></span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-10 w160">
                                <div className="mb-20">
                                    <h5>더 자세한 교통편 안내</h5>
                                    <a className="underline__blue"
                                       href="https://www.coex.co.kr/services/traffic/location-3?type=organizer">바로가기</a></div>
                            </div>
                        </div>

                        <KakaoMap/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DirectionsArea;