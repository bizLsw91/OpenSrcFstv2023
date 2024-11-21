import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import SpeakersArea from "./SpeakersArea/SpeakersArea";
import {useParams} from "react-router-dom";

const Speakers = () => {
    const { id='1' } = useParams();
    console.log("Rendering Speakers with id:", id);
    return (
        <div id="Speakers">
            <PageHelmet key='pageHelmet' pageTitle="발표자"/>
            <HomeOneHeader key="homeOneHeader"/>
            <CommonPageHeader key="commonPageHeader" title="Speakers" level_1={'프로그램'} level_2="발표자"/>
            <SpeakersArea id={id}/>
            <Footer/>
        </div>
    );
};

export default Speakers;

export const speakersData = {
    example: {
        badge: '',
        name: '',
        company: '',
        position: '',
        imgUrl: 'https://ossfestival.kr/assets/img/speakers/유태희.jpg',
        profileList: ['약력1','약력2','약력3'],
        profileDesc: '',
        lectTitle: '',
        lectSummary: ''
    },
    //기조강연
    startLect: {
        1: {
            badge: '기조강연1',
            name: '장혜식',
            company: '서울대학교',
            position: '교수',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/장혜식.jpg',
            docFilePath: 'speakersDoc/기조강연 1-장혜식.pdf',
            profileList: ['기초과학연구원 RNA연구단연구위원(18~현재)', 'Fellow, Python, SoftwareFoundation(14~19)', 'Committer, The FreeBSD Project(01~09)', '리눅스코리아(주) 솔루션 개발팀 (01~05)'],
            profileDesc: '',
            lectTitle: <>오픈소스로 풀어내는<br/>생명의 코드</>,
            lectSummary: '오픈소스 생물학 소프트웨어들이 어떻게 현대생명과학 연구 지평을 넓혀왔는지에 대한 사례\n'
        },
        2: {
            badge: '기조강연2',
            name: '백송하',
            company: '현대자동차',
            position: '책임',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/백송하.png',
            docFilePath: 'speakersDoc/기조강연 2-백송하.pdf',
            profileList: ['현대자동차 오프소스 그룹장(22~현재)'],
            profileDesc: '',
            lectTitle: <>현대차 그룹 오픈소스 거버넌스<br/>및 자동차 SW공급망으로의 확장</>,
            lectSummary: '자동차산업 동향에 따른 현대차 그룹의 오픈소스 거버넌스 구축 과정\n'
        }
    },
    lectures: {
        1: {
            badge: '발표-1',
            name: '김홍석',
            company: '리벨리온',
            position: '총괄',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/김홍석.jpg',
            docFilePath: 'speakersDoc/발표세션 1-김홍석.pdf',
            profileList: ['서울대학교 학사(전기공학)', '일리노이대학 박사 (컴퓨터과학)', '마이크로소프트,페이스북_개발자 근무', '삼성 리서치 _상무 재직', '구글코리아 R&D 부문 _대표 재직'],
            profileDesc: '',
            lectTitle: <>소프트웨어 개발자들이<br/>만들어가는 AI 프로세서 혁명</>,
            lectSummary: '개발자 생태계가 오픈소스 플랫폼을 중심으로 어떻게 진화했을까에 대한 발전방향 논의'
        },
        2: {
            badge: '발표-2',
            name: '조성수',
            company: '오픈스택',
            position: '리더',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/조성수.png',
            docFilePath: 'speakersDoc/발표세션 2-조성수.pdf',
            profileList: ['BHN Cloud 오픈스택 엔지니어(17~현재)', '오픈인프라(오픈스택)한국사용자모임 대표 (20~현재)', '오픈스택 한국사용자 모임 부대표(17~29)'],
            profileDesc: '',
            lectTitle: <>Regional Hub,<br/>오픈 인프라가 선택한 전략</>,
            lectSummary: '비즈니스에 맞게 변화하는 오픈소스 전략 사례'
        },
        3: {
            badge: '발표-3',
            name: '신정규',
            company: '㈜레블업',
            position: '대표',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/신정규.jpg',
            docFilePath: 'speakersDoc/발표세션 3-신정규.pdf',
            profileList: ['한국통신학회 이사(현재~)', 'Google Cloud Champion Innovators Innovator(현재~)', 'Google For Startups Accelerator Mentor(DL/AI)(현재~)'],
            profileDesc: '',
            lectTitle: <>오픈소스 라이선스와<br/>오픈 AI 모델</>,
            lectSummary: '전통적인 오픈소스 소프트웨어의 정의와 최근 등장한 오픈 AI모델들의 특성 비교'
        },
        4: {
            badge: '발표-4',
            name: '박문식',
            company: '㈜젝사젠',
            position: '대표',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/박문식.jpg',
            docFilePath: 'speakersDoc/발표세션 3-박문식.pdf',
            profileList: ['젝사젠 대표이사(현재~)', '에프에이리눅스 연구소장(10~23)', '시그널싱크 연구소장(03~09)'],
            profileDesc: '',
            lectTitle: <>바이오에서 활용되는<br/>AI 유전자 기술</>,
            lectSummary: '바이오에 대한 소개와 AI기술이 활용되는 사례'
        },
        5: {
            badge: '발표-5',
            name: '이현정',
            company: '경상대학교 화학공학과',
            position: '연구원',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/이현정.png',
            docFilePath: 'speakersDoc/발표세션 5-이현정.pdf',
            profileList: ['경상대학교 화학공학과',
                '2024.03~ : 인공지능기반공정시스템공학 연구',
                '2024.04-2024.09 : 수소동위원소 물성치 계산을 위한 Open Source 플랫폼 기반 툴 개발',
                '2024.05~ : 인공지능 기반 공정흐름도 자동 생성 플랫폼 개발 연구',
                '2024.09 : 16th International Conference on Sustainable Energy & Environmental Protection, 09-12 September 2024 Best paper winning prize'],
            profileDesc: '',
            lectTitle: <>차세대 화학 시뮬레이션:<br/>디지털 트윈 혁신을 위한<br/>오픈소스와 머신러닝 활용</>,
            lectSummary: '시뮬레이션 데이터를 머신러닝 기법으로 분석, 화학공정 모사에 필요한 리소스를 줄일 수 있는 잠재력에 대한 발표'
        },
        6: {
            badge: '발표-6',
            name: '오재웅',
            company: '㈜무아베모션',
            position: '대표',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/오재웅.jpg',
            docFilePath: 'speakersDoc/발표세션 6-오재웅.pdf',
            profileList: ['㈜무아베모션 대표이사(현재~)', '서울부민병원AI질병예측/진단 CTO', 'GS리테일 베트남 Offshore 관리총괄', 'Intives Healthcare(SKTspin-off)개발총괄', 'SK텔레콤 New Healthcare 개발컨설턴트', '2017년 공개SW개발자대회 대상'],
            profileDesc: '',
            lectTitle: <>오픈소스가 키운 개발자,<br/>10년의 성장 보고서</>,
            lectSummary: '오픈소스 비즈니스 사례'
        },
    },
    poster: {
        1: {
            badge: '발표-1',
            name: '유저스틴',
            company: 'DevRel Korea',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/박병철.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'Semantic Kernel로 다양한 LLM을 하나로 오케스트레이션하기',
        },
        2:{
            badge: '발표-2',
            name: '김진섭',
            company: 'Shinykorea',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/김진섭.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'의학연구를 위한 오픈소스 R 통계패키지 소개',
        },
        3:{
            badge: '발표-3',
            name: '장동욱',
            company: 'python-mysql-replication',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/장동욱.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'실시간으로 데이터를 복제',
        },
        4:{
            badge: '발표-4',
            name: '차불휘',
            company: '린(Lean)',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/차불휘.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'린 정리 증명기의 소개 및 활용',
        },
        5:{
            badge: '발표-5',
            name: '허광남',
            company: 'okdevtv',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/허광남.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'표준프레임워크 MSA edu 프로젝트 스터디 회고',
        },
        6:{
            badge: '발표-6',
            name: '정이태',
            company: 'G.U.G(Graph User Group)',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/정이태.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'커뮤니티를 활용해 그래프 기술을 전달하는 방식',
        },
        7:{
            badge: '발표-7',
            name: '안이수',
            company: 'Debian',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/안이수.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'오픈소스 개발자의 Debcon 24 참가 및 발표 후기',
        },
        8:{
            badge: '발표-8',
            name: '이제응',
            company: 'CNCF(Cloud Native Computing Foundation)',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/이제응.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'오픈소스기반의 클라우드 네이티브 글로벌 활성화',
        },
        9:{
            badge: '발표-9',
            name: '김관영',
            company: '오픈인프라 한국사용자 모임',
            position: '',
            imgUrl: 'https://ossfestival.kr/assets/img/speakers/김관영.jpg',
            profileList: ['약력1','약력2','약력3'],
            profileDesc: '',
            subject:'오픈 인프라(오픈스택) 한국 사용자 모임의 2024 활동정리 및 2025년 활동계획 공유',
        },
    }
}