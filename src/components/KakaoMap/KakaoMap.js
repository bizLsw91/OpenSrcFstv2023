// import {Map, MapMarker} from "react-kakao-maps-sdk";

import {useEffect, useState} from "react";

const KakaoMap = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    // 마커를 표시할 위치 설정
    //코엑스 컨퍼런스룸
    const position = {
        lat: 37.5128,
        lng: 127.0590
    };

    useEffect(() => {
        const {kakao} = window;

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
        } else {
            setIsLoaded(false);
        }
    })


    return (
        <div>
            {!isLoaded && <div style={{color: 'red', fontSize: '25px'}}>[ 카카오맵 API 정책 변경으로 맵 UI 가 로드 되지 않았습니다. ]</div>}
            <div id="map"></div>
        </div>
    );
};

const content = '<div class="mapInfoWindowBox">코엑스 컨퍼런룸 4F</div>'

export default KakaoMap;