import {Container} from "react-bootstrap";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import SprintPreRegiArea from "../SprintPreRegi/SprintPreRegiArea/SprintPreRegiArea";
import Footer from "../../components/shared/Footer";
import React from "react";
import SpeakersArea from "./SpeakersArea/SpeakersArea";

const Speakers = () => {
    return (
        <div id="Speakers">
            <PageHelmet pageTitle="발표자"/>
            <HomeOneHeader/>
            <CommonPageHeader title="Speakers" subtitle="발표자"/>
            <SpeakersArea/>
            <Footer/>
        </div>
    );
};

export default Speakers;

export const speakersData = {
    frame: {
        badge: '',
        name: '',
        company: '',
        position: '',
        imgUrl: 'assets/img/speakers/유태희.jpg',
        profileList: [],
        profileDesc: '',
        lectTitle: '',
        lectSummary: ''
    },
    //기조강연
    startLect: {
        1: {
            badge: '기조강연1',
            name: '엄위상',
            company: 'LG전자 SW센터',
            position: '상무',
            imgUrl: 'assets/img/speakers/엄유상.jpg',
            profileList: ['2017 ~ 현재: LG전자 SW공학연구소장', '2015 ~ 2016: LG전자 SW A Team Leader', '2011 ~ 2015: LG전자 Agile 개발 팀장'],
            profileDesc: '',
            lectTitle: '협력의 힘: 공급망 관리의 핵심, 오픈소스와의 융합으로 발전하는 미래',
            lectSummary: '오늘날의 소프트웨어는 수 많은 오픈소스를 활용하여 개발되고 있으며, 이러한 오픈소스의 컴플라이언스 준수 및 관련 보안 확보가 소프트웨어 개발 경쟁력의 주요한 요소가 되고 있다. 이 발표에서는 이에 관한 업계의 최신 동향과 LG전자의 다년간의 노력 및 주요 활동에 대해 소개한다.'
        },
        2: {
            badge: '기조강연2',
            name: '이희승',
            company: 'LINE Plus',
            position: '개발자',
            imgUrl: 'assets/img/speakers/이희승.jpg',
            profileList: [],
            profileDesc: 'JVM 생태계에서 가장 인기 있는 비동기 네트워킹 프레임워크인 Netty 프로젝트의 창립자로 잘 알려진 소프트웨어 엔지니어입니다. 개발자에게 최고의 경험을 제공하는 프레임워크와 라이브러리를 설계하는 것에 관심이 많으며, LINE+에서 마이크로서비스 프레임워크 Armeria, 분산 구성 저장소 Central Dogma 등 다양한 오픈소스 소프트웨어를 개발하고 있습니다.',
            lectTitle: '"나만 오픈소스 없어" - 잘 키운 오픈소스, 열 고양이 안 부럽다!?',
            lectSummary: '세상 사람들 다 있는 고양이, 나만 없다구요? 지금 그게 문제가 아닙니다! 고양이보다 훨씬 사랑스러운 나만의 오픈소스 프로젝트가 없는데… 본 발표에서 오픈소스가 어째서 고양이보다 사랑스러운지, 어떻게 하면 나만의 오픈소스를 쑥쑥 키울 수 있는지 알아보세요. 오셔서 저희 귀여운 오픈소스 사진 보시며 힐링도 하고 영감도 얻어가세요. '
        }
    },
    lectures: {
        1: {
            badge: '강연-1',
            name: '이수정',
            company: 'Medical AI LAB',
            position: '책임연구원',
            imgUrl: 'assets/img/speakers/이수정.jpg',
            profileList: ['가톨릭대학교 성의교정 의료정보학교실(2021-현재)', '디티앤사노메딕스(2020-2021) 데이터관리자(DMA)', '국립암센터(2012-2019) 연구간호사, 매니저'],
            profileDesc: '',
            lectTitle: '낮에는 직장인, 밤에는 연구원 \n' +
                ':용두사미로 끝나지 않는 오픈소스 조직 운영하기',
            lectSummary: '오픈소스에 기여하기를 주저하는 개발자들에게 쉽게 접근할 수 있는 기여 방법을 제시합니다.\n' +
                '발표를 들은 당일 바로 적용해도 될 정도로 실용적이고, 누구나 따라할 수 있는 쉬운 접근\n' +
                '방법과 함께 발표자 개인의 기여 경험도 공유합니다.'
        },
        2: {
            badge: '강연-2',
            name: '김태곤',
            company: 'Dable',
            position: '',
            imgUrl: 'assets/img/speakers/김태곤.jpg',
            profileList: ['(현) 데이블 프런트엔드 팀 리드', '(전) Automattic JavaScript Engineer', '(전) Fancy.com JavaScript Engineer', '(전) 네이버 프런트엔드 개발자'],
            profileDesc: '공개SW페스티벌, Deview, W3C HTML5\n' +
                '컨퍼런스, FastCampus, Daum DevOn, SK Tech Planet,\n' +
                'JS Con, 제주대학교, 단국대학교, 숭실대학교, 전주\n' +
                '정보문화산업진흥원, 멋쟁이사자처럼, 한국정보화진흥원\n' +
                '등에서 강연',
            lectTitle: '오늘 저녁부터 시작하는 오픈소스 기여',
            lectSummary: '오픈소스에 기여하기를 주저하는 개발자들에게 쉽게 접근할 수 있는 기여 방법을 제시합니다.\n' +
                '발표를 들은 당일 바로 적용해도 될 정도로 실용적이고, 누구나 따라할 수 있는 쉬운 접근\n' +
                '방법과 함께 발표자 개인의 기여 경험도 공유합니다.'
        },
        3: {
            badge: '강연-3',
            name: '배권한',
            company: 'LINE Plus',
            position: '',
            imgUrl: 'assets/img/speakers/배권한.jpg',
            profileList: [],
            profileDesc: <span>파이썬과 커뮤니티를 사랑하는 엔지니어다. 파이콘을 한국에 정착시켰으며 일단 저지르고 보는 사람. 현재는 Service Engineering 팀에서 라인의 모든 서비스에 대한 온갖 문제를 같이 고민하고 해결하고 여전히 일을 저지르고 있다. &lt;나는 LINE 개발자입니다&gt; 저자</span>,
            lectTitle: 'Python 커뮤니티와 PSF',
            lectSummary: '한국의 파이썬 커뮤니티는 어떻게 운영되고 있는지를 공유합니다.\n' +
                '그리고 PSF 가 어떻게 운영되고 무슨 일을 하고 있는지 설명하고 여러분이 어떻게 기여가 가능한지에 대하여 설명합니다.'
        },
        4: {
            badge: '강연-4',
            name: '권혁진',
            company: 'Databricks',
            position: 'Staff Software Engineer',
            imgUrl: 'assets/img/speakers/권혁진.jpg',
            profileList: ['2022, 2022 SIGMOD Awards 수상', '(현)2019, Databricks에서 Staff Software Engineer로 근무', '(현)2019, Apache Software Foundation 에서 Apache Spark PMC member로 활동', '(현)2017, Apache Software Foundation 에서 Apache Spark Commtter로 활동', '2018 ~ 2019 Cloudera & Hortonworks 에서 Senior Software Engineer로 근무', '2014 ~ 2018 Mobigen에서 Senior Software Engineer로 근무', '2012 ~ 2013 University College London에서 MSc Information Science 석사'],
            profileDesc: '',
            lectTitle: 'Spark 커미터에서 PMC 멤버되기, 그리고 그 후',
            lectSummary: '오픈소스에서 활동을 10여년간 하면서, Apache Spark Committer 및 PMC Member가 되었고, 회사 생활과 그 후 커리어에도 많은 영향을 받았습니다. 어떻게 오픈소스 맴버가 되었으며, 제 역량과 커리어가 어떻게 발전해왔는지, 오픈소스 활동을 시작하려면 어떻게 해야하는지 등을 공유하고자 합니다.'
        },
        5: {
            badge: '강연-5',
            name: '김동우',
            company: '아크회계법인',
            position: 'CTO',
            imgUrl: 'assets/img/speakers/김동우.jpg',
            profileList: ['전) QueryPie(CHEQUER): Vice President, Developer Relations &amp; Head of Engineering', '전) KOSSLAB: Open Source Frontier', '현) 자바스크립트 개발자 포럼: 운영, React Korea: 운영'],
            profileDesc: '',
            lectTitle: 'Architect를 활용한 고성능 서버리스웹서비스 만들기',
            lectSummary: '서비리스 컴퓨팅은 수 많은 장점을 가지고 있지만 섣불리 시작하기에 기술적 허들이\n' +
                '있습니다. 하지만 Architect라는 오픈소스 툴체인을 사용하면 아주 손쉽게 AWS 서버리스 인프라를\n' +
                '구성할 수 있습니다. 그리고 Architect가 지원하는 다양한 기능을 통해 병렬처리가 가능한 고성능 웹서비스를 만드는 방법을 공유합니다.'
        },
        6: {
            badge: '강연-6',
            name: '변정훈',
            company: '당근마켓',
            position: 'SRE',
            imgUrl: 'assets/img/speakers/변정훈.jpg',
            profileList: ['현) 당근마켓 SRE', '전) OnDemandKorea 개발팀 리드', '전) mocha 코어팀 멤버'],
            profileDesc: '',
            lectTitle: '오픈소스에 기여할 때 알면 좋을 개발 프로세스',
            lectSummary: '오픈소스 프로젝트는 불틱정 다수와 협업해서 프로젝트를 진행하기 위해 많은 자동화 프로세스와 암\n' +
                '묵적인 관례들이 있습니다. 저장소에 권한이 없기 때문에 포크하고 Pull Request로 변경사항을 올\n' +
                '리는 등의 기본적인 관례부터 문화적으로 지키는 것들이 있는데 복잡한 것들은 아니지만 처음 겪을때\n' +
                '는 어려울 수 있습니다. 오픈소스 프로젝트에 기여할 때 알아두면 좋을 내용을 정리해서 설명합니다.'
        },
    },
    talk_1: {
        1: {
            badge: '토크①사회',
            name: '박병철',
            company: 'SK하이닉스',
            position: '리눅스 커널 커뮤니티 운영자',
            imgUrl: 'assets/img/speakers/박병철.jpg',
            profileList: ['SK하이닉스 연구원 (2023.2~)', '리눅스 커널 개발자 (2014.7~)'],
            profileDesc: '',
        },
        2:{
            badge: '토크①패널',
            name: '유태희',
            company: '카카오엔터프라이즈',
            position: '클라우드 개발자',
            imgUrl: 'assets/img/speakers/유태희.jpg',
            profileList: ['카카오엔터프라이즈 클라우드 개발자', '리눅스 네트워킹 스택 AMT메인테이너','오픈소스 프론티어 전담개발자'],
            profileDesc: '',
        },
        3:{
            badge: '토크①패널',
            name: '김홍규',
            company: 'SK하이닉스',
            position: '',
            imgUrl: 'assets/img/speakers/김홍규.jpg',
            profileList: ['SK하이닉스', 'Arm', 'LG전자'],
            profileDesc: '',
        },
        4:{
            badge: '토크①패널',
            name: '유형곤',
            company: '충남대학교',
            position: '',
            imgUrl: 'assets/img/speakers/유형곤.jpg',
            profileList: ['리눅스 메모리 관리 서브시스템 기여 (2021 ~)', '리눅스 슬랩 서브시스템 공식 리뷰어 (2022 ~)', '오픈 프런티어 (2023 ~)'],
            profileDesc: '',
        },
        5:{
            badge: '토크①패널',
            name: '문관경',
            company: 'Intel',
            position: 'GPU Software Development Engineer',
            imgUrl: 'assets/img/speakers/문관경.jpg',
            profileList: ['2008 ~2018 (전) 삼성전자', '2018~ (현) Intel'],
            profileDesc: '',
        },

    },
    talk_2: {
        1:{
            badge: '토크②사회',
            name: '김영욱',
            company: 'Hello AI',
            position: '대표',
            imgUrl: 'assets/img/speakers/김영욱.jpg',
            profileList: [],
            profileDesc: '',
        },
        2:{
            badge: '토크②패널',
            name: '신정규',
            company: '래블업',
            position: '대표',
            imgUrl: 'assets/img/speakers/신정규.jpg',
            profileList: ['Lablup Inc.의 설립자로, 지난 19년동안 Textcube Project의 수석 개발자를 포함한 다양한 오픈소스 프로젝트에 기여했습니다.', '현재는 AI 프레임워크들에 특화된 오픈소스 엔터프라이즈 클러스터 플랫폼인 Backend.AI 프로젝트의 개발 및 메인테이너를 맡고 있으며, 동북아 공개SW 활성화포럼 ISB위원 및 Google Developers Experts에서 머신러닝 및 딥러닝 Expert로 활동하고 있습니다.'],
            profileDesc: '',
        },
        3:{
            badge: '토크②패널',
            name: '이제현',
            company: '한국에너지기술연구원',
            position: '실장',
            imgUrl: 'assets/img/speakers/이제현.jpg',
            profileList: ['매일경제 MK Speaker (2023)', 'Microsoft AI MVP (2023)', '한국에너지기술연구원 (2018~)', '삼성전자 종합기술원, 반도체연구소 (2013~2017)', '서울대학교 재료공학부 연구조교수 (2011~2012)', 'Ph.D. in Solid State Physics, Vienna Univ. Tech. (2008~2011)', 'Ph.D. 서울대학교 재료공학부 (2001~2008)'],
            profileDesc: '',
        },
        4:{
            badge: '토크②패널',
            name: '이준범',
            company: '데이터드리븐',
            position: 'AI 선임연구원',
            imgUrl: 'assets/img/speakers/이준범.jpg',
            profileList: ['KoAlpaca, Llama-2-Ko/KoEn, KcBERT 등 한국어', '오픈 LLM 개발', '현 데이터드리븐 AI 연구원', '구 NAVER CLOVA, 넥슨코리아 SW 엔지니어'],
            profileDesc: '',
        },

    }
}