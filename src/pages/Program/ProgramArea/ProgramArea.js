import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

const ProgramArea = () => {
    const [currTabId, setCurrTabId] = useState(1);



    return (
        <div id="ProgramArea">
            <Container>
                <div className="program__area">
                    <div className="program__content">
                        <h2 className="program__title">프로그램</h2>
                        <Row>
                            <Col className="table-overall">
                                <Row className="tabGroup">
                                    <Col></Col>
                                </Row>
                            </Col>
                            <Col></Col>
                        </Row>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProgramArea;