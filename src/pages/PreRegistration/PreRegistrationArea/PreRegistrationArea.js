import React from "react";
import {Container} from "react-bootstrap";
import {Box, Tab, Tabs} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const PreRegistrationArea = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                                        <Tab className="tabBtn" label="등록 확인" value="2"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1">

                                </TabPanel>
                                <TabPanel value="2">
                                    Item Two</TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PreRegistrationArea;