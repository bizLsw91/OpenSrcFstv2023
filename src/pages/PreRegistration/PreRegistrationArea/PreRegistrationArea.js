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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PreRegistrationArea;