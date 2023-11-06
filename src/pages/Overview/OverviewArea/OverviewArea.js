import {Col, Container, Row} from "react-bootstrap";
import infoData from "../../../data/OverviewData";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {overall} from "../../../data/ProgramData";
import {Chip, Stack} from "@mui/material";


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
                                        {infoData.map((info, index) => (
                                            <Col key={index} className="mb-20">
                                                <td>
                                                    <div className="item">{info.item}</div>
                                                </td>
                                                <td>
                                                    <div className="desc">{info.desc}</div>
                                                    {info.desc_sub && <p className="desc-sub">{info.desc_sub}</p>}
                                                </td>
                                            </Col>
                                        ))}
                                    </Row>
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
                                                        <a className="title">{overall.a.title+' >'}</a>
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
                                                        <a className="title">{overall.b.title+' >'}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho ho-color3">{overall.b2.place+'호'}</div>
                                                        <a className="title">{overall.b2.title+' >'}</a>
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
                                                        <a className="title">{overall.c.title+' >'}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho ho-color2">{overall.c2.place+'호'}</div>
                                                        <a className="title">{overall.c2.title+' >'}</a>
                                                    </div>
                                                    <div className="item">
                                                        <div className="ho ho-color3">{overall.c3.place+'호'}</div>
                                                        <a className="title">{overall.c3.title+' >'}</a>
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