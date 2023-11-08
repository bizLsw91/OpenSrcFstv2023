import {Col, Row} from "react-bootstrap";

const ProgramOverall = () => {
    const xs = 4;
    const sm =  3;
    const md =  2;

    return (
        <div id="ProgramOverall" className="gridTable">
            <Row className="title">
                <Col xs={xs} sm={sm} md={md}>시간</Col>
                <Col>프로그램</Col>
            </Row>
            <Row className="content">
                <Col xs={xs} sm={sm} md={md} className="time">13:00 ~ 13:10</Col>
                <Col className="item bLine bold_l">개회사, 축사</Col>
            </Row>
            <Row className="content">
                <Col xs={xs} sm={sm} md={md} className="time">13:10 ~ 14:00</Col>
                <Col className="item bLine bold_l">시상식 (표창, 시상 등)</Col>
            </Row>
            <Row className="content">
                <Col xs={xs} sm={sm} md={md} className="time">14:00 ~ 14:40</Col>
                <Col className="bLine">
                    <Row className="flex-column">
                        <Col className="item spkL bLine">
                            <div className="bold_l mr-10">기조강연 1</div>
                            <div className="d-flex flex-column flex-sm-row">
                                <div className="mr-10 regu_m">발표제목 미정</div>
                                <div className="spk mr-10">
                                    <div className="bold_m">이희승</div>
                                    <div className="regu_s">/LINE 개발자</div>
                                </div>
                            </div>
                        </Col>
                        <Col className="item spkL">
                            <div className="bold_l mr-10">기조강연 2</div>
                            <div className="d-flex flex-column flex-sm-row">
                                <div className="mr-10 regu_m">발표제목 미정</div>
                                <div className="spk mr-10">
                                    <div className="bold_m">엄위상</div>
                                    <div className="regu_s">/LG전자 SW센터 상무</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ProgramOverall;