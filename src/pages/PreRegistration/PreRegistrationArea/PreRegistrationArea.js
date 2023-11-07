import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContent1 from "../TabContent1/TabContent1";
import TabContent2 from "../TabContent2/TabContent2";

const PreRegistrationArea = () => {
    const [value, setValue] = React.useState('1');
    const [email, setEmail] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nextTab2 = (email) => {
        setEmail(email)
        setValue('2')
    }


    return (
        <div id="PreRegistrationArea">
            <Container>
                <div className="preRegi__area">
                    <div className="preRegi__content">
                        <Row className="flex-column">
                            <Col className="mb-30">
                                <Box sx={{width: '100%', typography: 'body1'}}>
                                    <TabContext value={value}>
                                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab className="tabBtn" label="사전 등록" value="1"/>
                                                <Tab className="tabBtn" label="등록 확인" value="2"/>
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <TabContent1 nextTab2={nextTab2}/>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            <TabContent2 email={email}/>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </Col>
                            <Col className="guide">
                                <div className="office">공개SW페스티벌 사무국</div>
                                <div className="tel"><span>전화</span><span>02-502-5953</span></div>
                                <div className="email"><span>이메일</span><span>boomcom2013@gmail.com</span></div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PreRegistrationArea;