// import {Map, MapMarker} from "react-kakao-maps-sdk";

import {useEffect} from "react";

const {kakao} = window;

const KakaoMap = () => {
    // 마커를 표시할 위치 설정
    const position = {
        lat: 37.5665,
        lng: 126.9780
    };

    useEffect(() => {
        // 지도를 표시할 div
        const mapContainer = document.getElementById('map')
        const mapOption = {
            // 지도의 중심좌표
            center: new kakao.maps.LatLng(position.lat, position.lng),
            level: 3 // 지도의 확대 레벨
        };
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: mapOption.center,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    })


    return (
        <div id="map" style={{width: '500px', height: '350px'}}></div>
        /*<Map // 지도를 표시할 Container
            center={position} // 지도의 중심좌표
            style={{
                // 지도의 크기
                width: "100%",
                height: "360px",
            }}
            level={3} // 지도의 확대 레벨
        >
            <MapMarker // 마커를 생성합니다
                position={position} // 마커가 표시될 위치입니다
                image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                    size: {
                        width: 24,
                        height: 35,
                    }, // 마커이미지의 크기입니다
                }}
            >
                <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
        </Map>*/
    );
};

export default KakaoMap;