// import {Map, MapMarker} from "react-kakao-maps-sdk";

import { useEffect } from "react";

const content = '<div class="mapInfoWindowBox">코엑스 컨퍼런룸 4F</div>';

const KakaoMap = () => {
    const position = {
        lat: 37.5128,
        lng: 127.0590
    };

    useEffect(() => {
        const { kakao } = window;

        // kakao 객체가 있고, maps 모듈이 로드되었는지 확인
        if (kakao && kakao.maps) {
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');

                // 좌표 생성
                const markerPosition = new kakao.maps.LatLng(position.lat, position.lng);

                const mapOption = {
                    center: markerPosition,
                    level: 3
                };

                // 지도 생성
                const map = new kakao.maps.Map(mapContainer, mapOption);

                // 마커 생성
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                marker.setMap(map);

                // 인포윈도우 생성
                const infoWindow = new kakao.maps.InfoWindow({
                    content: content,
                });

                infoWindow.open(map, marker);
            });
        }
    }, []); // 빈 배열을 넣어 마운트 시 한 번만 실행되도록 설정

    return (
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
    );
};

export default KakaoMap;