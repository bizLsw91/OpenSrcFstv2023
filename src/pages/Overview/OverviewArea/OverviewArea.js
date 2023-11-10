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

const infoData = [
    {item: '개최목적', desc: '공개SW 최신 기술 및 우수사례 등을 공유·전파하고, 공개SW 시상을 통해 공개SW 인식 제고 도모'},
    {item: '주제', desc: '오픈소스로 바꾸는 세상(Transforming the World with Open source)',
        desc_sub: '- 공개SW 개발자, 커뮤니티, 기업의 공개SW 활용 경험과 역량을 개발자들과 공유하여 오픈소스 생태계의 성장과 발전 계기 마련'
    },
    {item: '참가자', desc: '공개SW개발자, 관련 기업, 학생 등 약 300여명'},
    {item: '장소', desc: '코엑스 401호~403호'},
    {item: '일시', desc: '2023.12.01.(금) 13:00~18:00'},
    {item: '주최', desc: '과학기술정보통신부'},
    {item: '주관', desc: '정보통신산업진흥원'},
]

const OverviewArea = () => {
    return (
        <div id="OverviewArea">
            <Container>
                <div className="overview__area">
                    <div className="overview__content">
                        <Row>
                            <Col md={7}>
                                <h3 className="overview__title">행사 개요</h3>
                                <section className="overview__textInfo">
                                    <Row className="flex-column">
                                        <Col className="mb-20">
                                            <td>
                                                <div className="item">{infoData[0].item}</div>
                                            </td>
                                            <td>
                                                <div className="desc">{infoData[0].desc}</div>
                                            </td>
                                        </Col>
                                    </Row>
                                    <Row className="flex-column">
                                        <Col className="mb-20">
                                            <td>
                                                <div className="item">{infoData[1].item}</div>
                                            </td>
                                            <td>
                                                <div className="desc">{infoData[1].desc}</div>
                                                <p className="desc-sub">{infoData[1].desc_sub}</p>
                                            </td>
                                        </Col>
                                    </Row>
                                    <Row className="flex-column">
                                        <Col className="mb-20">
                                            <td>
                                                <div className="item">{infoData[2].item}</div>
                                            </td>
                                            <td>
                                                <div className="desc">{infoData[2].desc}</div>
                                            </td>
                                        </Col>
                                    </Row>
                                    <Row className="flex-column">
                                        <Col className="mb-20 d-flex">
                                            <td>
                                                <div className="item">{infoData[3].item}</div>
                                            </td>
                                            <td className="d-flex">
                                                <div className="desc">{infoData[3].desc}</div>
                                                <Link className="directions ml-15" to="/directions">찾아오시는 길 ></Link>
                                            </td>
                                        </Col>
                                    </Row>
                                    <Row className="flex-column">
                                        <Col className="mb-20">
                                            <td>
                                                <div className="item">{infoData[4].item}</div>
                                            </td>
                                            <td>
                                                <div className="desc">{infoData[4].desc}</div>
                                            </td>
                                        </Col>
                                    </Row>
                                    <Row className="flex-column">
                                        <Col className="mb-20">
                                            <td>
                                                <div className="item">{infoData[5].item}</div>
                                            </td>
                                            <td>
                                                <div className="desc">{infoData[5].desc}</div>
                                            </td>
                                        </Col>
                                    </Row>
                                    <Row className="flex-column">
                                        <Col className="mb-20">
                                            <td>
                                                <div className="item">{infoData[6].item}</div>
                                            </td>
                                            <td>
                                                <div className="desc">{infoData[6].desc}</div>
                                            </td>
                                        </Col>
                                    </Row>
                                </section>
                                <section className="overview__poster">
                                    <img className="poster" src="assets/img/openSW/openSW-poster.png"/>
                                </section>
                            </Col>
                            <Col md={5}>
                                <section className="overview__schedule">
                                    <h3 className="overview__title">시간 안내</h3>
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                1:00 pm
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox">
                                                    <div className="item">
                                                        <div className="ho ho-color1">{overall.a.place+'호'}</div>
                                                        <a className="title">{overall.a.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                2:00 pm
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox">
                                                    <div className="item">
                                                        <div className="ho ho-color1">{overall.b.place+'호'}</div>
                                                        <a className="title">{overall.b.title}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho ho-color3">{overall.b2.place+'호'}</div>
                                                        <a className="title">{overall.b2.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                3:00 pm
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox">
                                                    <div className="item">
                                                        <div className="ho ho-color1">{overall.c.place+'호'}</div>
                                                        <a className="title">{overall.c.title}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho ho-color2">{overall.c2.place+'호'}</div>
                                                        <a className="title">{overall.c2.title}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho ho-color3">{overall.c3.place+'호'}</div>
                                                        <a className="title">{overall.c3.title}</a>
                                                    </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                5:40 pm
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox last">
                                                <div className="item">
                                                    <div className="ho ho-color3"></div>
                                                    <a className="title">{overall.d.title}</a>
                                                </div>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent color="textSecondary">
                                                6:00 pm
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined"/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="contentBox ops">
                                                    <div className="item">
                                                        <div className="ho ho-color3"></div>
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