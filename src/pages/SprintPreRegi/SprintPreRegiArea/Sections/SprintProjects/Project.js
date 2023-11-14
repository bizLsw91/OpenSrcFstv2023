import {Col, Row} from "react-bootstrap";
import {useState} from "react";

const Project = ({projId, data}) => {

    return (
        <div id={'SprintProject-'+projId} className="sprintProjectBox">
            <div className="subTitle-container">
                <div className="subTitle">{data.name}</div>
                <div className={'subTitle-bg subTitle-bg-color'+projId}></div>
            </div>
            <Row className="flex-column">
                <Col className="mb-20">
                    <div className="item">
                        <div className="text">프로젝트 소개</div>
                    </div>
                    <div className="desc">
                        <div className="text">{data.introDiv}</div>
                    </div>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <div className="item">
                        <div className="text">참여 멘토(멘티)</div>
                    </div>
                    <div className="desc">
                        <div className="text">{data.mentorDiv}</div>
                    </div>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <div className="item">
                        <div className="text">모집 인원</div>
                    </div>
                    <div className="desc">
                        <div className="text">{data.recruitNum}</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="bottom">
                    <div className={'deco deco-color'+projId}>
                        <div className="deco-inner"></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Project;