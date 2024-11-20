import {Col, Container, Row} from "react-bootstrap";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {overall} from "../../../data/ProgramData";
import {Link} from "react-router-dom";
import HeadingWithLines from "../../../components/HeadingWithLines/HeadingWithLines";

const infoData = [
    {
        item: "개최목적",
        desc: "오픈소스 최신 기술 및 우수사례등을 공유 · 전파하고, 오픈소스 시상을 통해 오픈소스 인식제고 도모",
    },
    {
        item: "주제",
        desc: "오픈소스 세상을 삼키다 (Open Source ~)",
        desc_sub: "- 오픈소스 개발자, 커뮤니티, 기업의 오픈소스 활용 경험과 역할을 개발자들과 공유하여 오픈소스 생태계의 성장과 발전계기 마련",
    },
    {
        item: "참가자",
        desc: "오픈소스 개발자, 관련 기업, 학생 등 300여명",
    },
    {
        item: "장소",
        desc: "코엑스 그랜드 컨퍼런스룸 401호 | 402호",
        link: "/directions", // "찾아오시는 길" 링크
    },
    {
        item: "일시",
        desc: "2024. 12. 06(금) 13:00 ~ 18:00",
    },
    {
        item: "주최",
        desc: "",
        img_url:'https://ossfestival.kr/assets/img/2024design/주최.png',
        alt:'주최'
    },
    {
        item: "주관",
        desc: "",
        img_url:'https://ossfestival.kr/assets/img/2024design/주관.png',
        alt:'주관'
    },
];

const OverviewArea = () => {
    return (
        <div id="OverviewArea">
            <Container>
                <div className="overview__area">
                    <div className="overview__content">
                        <Row>
                            <Col md={7}>
                                <HeadingWithLines text={'행사 개요'} />
                                <section className="overview__textInfo">
                                    {infoData.map((info, index) => (
                                        <Row className="flex-column" key={index}>
                                            <Col className="mb-20 d-flex">
                                                <div className="item">{info.item}</div>
                                                <div className="desc">
                                                    <div>
                                                        {info.desc?.toString()}
                                                        {info.desc_sub && <p className="desc-sub">{info.desc_sub}</p>}
                                                        {info.img_url &&
                                                            <div className="colored-png-container">
                                                                <img src={info.img_url} alt={info.alt}
                                                                     className="colored-png"/>
                                                            </div>
                                                        }
                                                    </div>
                                                    {info.link && (
                                                        <Link className="directions ml-15" to={info.link}>
                                                            찾아오시는 길 ▶
                                                        </Link>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>
                                    ))}
                                </section>
                                <section className="overview__poster">
                                    <img className="poster" src="assets/img/2024design/poster.webp" alt="오픈소스 포스터" />
                                </section>
                            </Col>
                            <Col md={5}>
                                <section className="overview__schedule">
                                    <HeadingWithLines text={'시간 안내'} />
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                13:00
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox">
                                                    <div className="item">
                                                        <div className="ho">{overall.a.place+'호'}</div>
                                                        <a className="title">{overall.a.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                14:00
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox">
                                                    <div className="item">
                                                        <div className="ho">{overall.b.place+'호'}</div>
                                                        <a className="title">{overall.b.title}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho">{overall.b2.place+'호'}</div>
                                                        <a className="title">{overall.b2.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                15:00
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox">
                                                    <div className="item">
                                                        <div className="ho">{overall.c.place+'호'}</div>
                                                        <a className="title">{overall.c.title}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho">{overall.c2.place+'호'}</div>
                                                        <a className="title">{overall.c2.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                15:30
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox last">
                                                <div className="item">
                                                    <div className="ho"></div>
                                                    <a className="title">{overall.d.title}</a>
                                                </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                18:00
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox ops">
                                                    <div className="item">
                                                        <div className="ho"></div>
                                                        <a className="title">{overall.d.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </section>
                            </Col>
                        </Row>
                        {/*<section className="overview__image"></section>*/}
                    </div>
                </div>
            </Container>
        </div>
    )
        ;
};

export default OverviewArea;