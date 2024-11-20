import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContent1 from "../TabContent1/TabContent1";
import TabContent2 from "../TabContent2/TabContent2";
import {AppContext} from "../../../context/AllContext";
import {Link} from "react-router-dom";
import HeadingWithLine from "../../../components/HeadingWithLines/HeadingWithLines";

const PreRegistrationArea = () => {
    const {isOverDeadLine} = useContext(AppContext);
    const [value, setValue] = useState(isOverDeadLine()?'2':'1');
    const [email, setEmail] = useState();
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
        const checkDeadline = async () => {
            try {
                const result = await isOverDeadLine();
                setIsOver(result);
            } catch (error) {
                console.error("Error checking deadline:", error);
            }
        };

        checkDeadline();
    }, [isOverDeadLine]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nextTab2 = (email) => {
        setEmail(email)
        setValue('2')
    }

    const alertFinish = () => {
        if(!isOver) return
        alert('사전 등록이 마감되었습니다.')
        setValue('2')
    }

    return (
        <div id="PreRegistrationArea">
            <Container>
                <div className="preRegi__area">
                    <div className="preRegi__content">
                        <HeadingWithLine text={'사전등록'}/>
                        <div className=" mt-40">
                            {!isOver ?
                                <div className="preRegiBtnArea">
                                    <Link to="/"
                                          className={`z-btn-main z-btn-transparent z-btn-disable`}>사전등록하러 가기</Link>
                                    <div className="info mt-2">2024.11.20 (수) 12:00 부터 신청가능</div>
                                </div> :
                                <div className="preRegiBtnArea">
                                    <Link to="https://www.onoffmix.com/event/313420"
                                          className={`z-btn z-btn-main`}>사전등록하러 가기</Link>
                                    <div className="info mt-2">2024.12.6 (금) 12:00 까지 선착순 정원 500명 신청가능</div>
                                </div>
                            }
                        </div>

                        {/*<Row className="flex-column">*/}
                        {/*    <Col className="mb-30">*/}
                        {/*        <Box sx={{width: '100%', typography: 'body1'}}>*/}
                        {/*            <TabContext value={value}>*/}
                        {/*                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>*/}
                        {/*                    <TabList onChange={handleChange} aria-label="lab API tabs example">*/}
                        {/*                        <Tab className="tabBtn" label="사전 등록" value="1" onClick={alertFinish}/>*/}
                        {/*                        <Tab className="tabBtn" label="등록 확인" value="2"/>*/}
                        {/*                    </TabList>*/}
                        {/*                </Box>*/}
                        {/*                <TabPanel value="1">*/}
                        {/*                    /!* 사전등록 탭 *!/*/}
                        {/*                    <TabContent1 nextTab2={nextTab2}/>*/}
                        {/*                </TabPanel>*/}
                        {/*                <TabPanel value="2">*/}
                        {/*                    /!* 등록하기 탭*!/*/}
                        {/*                    <TabContent2 email0={email}/>*/}
                        {/*                </TabPanel>*/}
                        {/*            </TabContext>*/}
                        {/*        </Box>*/}
                        {/*    </Col>*/}
                        {/*    <Col className="guide">*/}
                        {/*        <div className="office">공개SW페스티벌 사무국</div>*/}
                        {/*        <div className="email"><span>이메일</span><span>ossfesta2024@gmail.com</span></div>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PreRegistrationArea;