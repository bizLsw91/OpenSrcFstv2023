import React from "react";
import {Container} from "react-bootstrap";
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContent1 from "../TabContent1/TabContent1";
import TabContent2 from "../TabContent2/TabContent2";
import TabContent3 from "../TabContent3/TabContent3";

const PreRegistrationArea = () => {
    const [value, setValue] = React.useState('1');
    const [data, setData] = React.useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nextTab2 = (email)=>{
        setValue('2')
        setData({...data,[email]:email})
    }

    const nextTab3 = (data)=>{
        setValue('3')
        setData({...data})
    }

    return (
        <div id="PreRegistrationArea">
            <Container>
                <div className="preRegi__area">
                    <div className="preRegi__content">
                        <Box sx={{width: '100%', typography: 'body1'}}>
                            <TabContext value={value}>
                                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab className="tabBtn" label="사전 등록" value="1"/>
                                        <Tab className="tabBtn" label="등록 확인:입력" value="2"/>
                                        <Tab className="tabBtn" label="등록 확인" value="3"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <TabContent1 nextTab2={nextTab2}/>
                                </TabPanel>
                                <TabPanel value="2">
                                    <TabContent2 nextTab3={nextTab3}/>
                                </TabPanel>
                                <TabPanel value="3">
                                    <TabContent3 data={data}/>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PreRegistrationArea;