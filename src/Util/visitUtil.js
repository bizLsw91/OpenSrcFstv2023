import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import axios from "axios";
import appConfig from "../config/app.config";  // 한국어 로케일 설정

export const visitInfoProcess = async (pageTitle) => {
    // 한국 시간으로 설정
    moment.locale('ko');
    const now = moment().tz('Asia/Seoul');

    // 방문 날짜와 시간 포맷
    const visitDate = now.format('YYYYMMDD');
    const visitTime = now.format('HHmmSSS');

    // 로컬 스토리지에서 고유 ID 확인
    let visitorId = localStorage.getItem('ossf-visitor-id');
    let referrerUrl = '';

    if (!visitorId) {
        // 추가 정보 수집
        referrerUrl = document.referrer || 'Direct'
    }

    // 방문 정보 객체 생성
    const visitInfo = {
        visitorId,
        visitDate,
        visitTime,
        pageTitle,
        userAgent: navigator.userAgent,
        referrerUrl
    };

    // URL 생성 및 데이터 전송
    axios.post(appConfig.apiPreUrl + '/Util/log-visit', visitInfo)
        .then(res => {
            if(res.data.visitorId)
                localStorage.setItem('ossf-visitor-id', res.data.visitorId);
            console.log('Visit info sent successfully'); })
        .catch(error => { console.error('Error sending visit info:', error); });
};