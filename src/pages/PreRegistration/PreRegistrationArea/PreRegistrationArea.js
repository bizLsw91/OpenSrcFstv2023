import {useContext, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContent1 from "../TabContent1/TabContent1";
import TabContent2 from "../TabContent2/TabContent2";
import {AppContext} from "../../../context/AllContext";

const PreRegistrationArea = () => {
    const {isOverDeadLine} = useContext(AppContext);
    const [value, setValue] = useState(isOverDeadLine()?'2':'1');
    const [email, setEmail] = useState();
    const [isOver, setIsOver] = useState(false);

    useEffect(()=>{
        setIsOver(isOverDeadLine())
    },[])

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
                        <Row className="flex-column">
                            <Col className="mb-30">
                                <Box sx={{width: '100%', typography: 'body1'}}>
                                    <TabContext value={value}>
                                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab className="tabBtn" label="사전 등록" value="1" onClick={alertFinish}/>
                                                <Tab className="tabBtn" label="등록 확인" value="2"/>
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            {/* 사전등록 탭 */}
                                            <TabContent1 nextTab2={nextTab2}/>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            {/* 등록하기 탭*/}
                                            <TabContent2 email0={email}/>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </Col>
                            <Col className="guide">
                                <div className="office">공개SW페스티벌 사무국</div>
                                <div className="email"><span>이메일</span><span>ossfesta2024@gmail.com</span></div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PreRegistrationArea;