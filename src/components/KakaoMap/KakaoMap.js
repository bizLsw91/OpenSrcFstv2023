// import {Map, MapMarker} from "react-kakao-maps-sdk";

import {useEffect} from "react";

const {kakao} = window;

// const content = ()=>{return (
//     <div className="overlay">여기는 코엑스 컨퍼런스룸입니다!</div>
// ) }; // 오버레이에 표시할 내용

const content =
    '<div class="infoWindowBox">코엑스 컨퍼런룸 4F<br/>' +
    '<a href="https://place.map.kakao.com/m/17573702" class="underline__blue">코엑스 상세교통편</a><br/>' +
    '<a href="https://www.coex.co.kr/blog/coex-facility-info/conference_south_4f" class="underline__blue">회의실 시설안내</a></div>'; // 오버레이에 표시할 내용

const KakaoMap = () => {
    // 마커를 표시할 위치 설정
    //코엑스 컨퍼런스룸
    const position = {
        lat: 37.5128,
        lng: 127.0590
    };

    useEffect(() => {
        // 지도를 표시할 div
        const mapContainer = document.getElementById('map')
        const markerPosition  = new kakao.maps.LatLng(position.lat, position.lng);
        const mapOption = {
            // 지도의 중심좌표
            center: markerPosition,
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

        // 인포윈도우 생성
        const infoWindow = new kakao.maps.InfoWindow({
            content: content,
            position: markerPosition
        });

        infoWindow.open(map, marker); // 오버레이 표시
    })


    return (
        <div id="map"></div>
    );
};

export default KakaoMap;