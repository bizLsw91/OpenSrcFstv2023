import {Col, Row} from "react-bootstrap";
import React, {useState} from "react";
import {Box, Tab} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContent1 from "../../../PreRegistration/TabContent1/TabContent1";
import TabContent2 from "../../../PreRegistration/TabContent2/TabContent2";
import {ConfigProvider} from "antd";


const SprintApply = () => {
    const [value, setValue] = React.useState('2');
    const [email, setEmail] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nextTab2 = (email) => {
        setEmail(email)
        setValue('2')
    }

    const alertFinish = () => {
        alert('스프린트 사전 신청이 마감되었습니다.')
        setValue('2')
    }

    return (
        <section id="SprintApply">
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#bf55af',
                    },
                }}
            >
                <h2 className="title">스프린트 사전신청</h2>
                <Row className="flex-column">
                    <Col className="mb-30">
                        <Box sx={{width: '100%', typography: 'body1'}}>
                            <div className="bold_m">※일반 컨퍼런스의 사전등록과 별개로 신청하실 수 있습니다.</div>
                            <TabContext value={value}>
                                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab className="tabBtn" label="사전 신청" onClick={alertFinish} disableFocusRipple/>
                                        <Tab className="tabBtn" label="신청 확인" value="2"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    {/* 사전등록 탭 */}
                                    <TabContent1 isSprint={true} nextTab2={nextTab2}/>
                                </TabPanel>
                                <TabPanel value="2">
                                    {/* 등록하기 탭*/}
                                    <TabContent2 isSprint={true} email0={email}/>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Col>
                    <Col className="guide">
                        <div className="office">공개SW페스티벌 사무국</div>
                        <div className="email"><span>이메일</span><span>ossfesta2023@gmail.com</span></div>
                    </Col>
                </Row>
            </ConfigProvider>
        </section>
    );
};

export default SprintApply;