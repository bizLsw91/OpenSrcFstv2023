import {Col, Container, Row} from "react-bootstrap";
import infoData from "../../../data/OverviewData";
const OverviewArea = () => {
    return (
        <div id="OverviewArea">
            <Container>
                <div className="overview__area">
                    <h2 className="overview__title">행사 개요</h2>
                    <div className="overview__content">
                        <section className="overview__textInfo">
                            <Row className="flex-column">
                                {infoData.map((info, index) => (
                                    <Col key={index} className="mb-20">
                                        <td>
                                            <div className="item">{info.item}</div>
                                        </td>
                                        <td>
                                            <div className="desc">{info.desc}</div>
                                            {info.desc_sub && <p className="desc-sub">{info.desc_sub}</p>}
                                        </td>
                                    </Col>
                                ))}
                            </Row>
                        </section>
                        <section className="overview__image"></section>
                    </div>
                </div>
            </Container>
        </div>
    )
        ;
};

export default OverviewArea;