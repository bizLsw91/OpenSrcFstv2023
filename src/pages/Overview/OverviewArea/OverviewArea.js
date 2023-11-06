import {Col, Container, Row} from "react-bootstrap";

let infoData = [
    {item: '개최목적', desc: '공개SW 최신 기술 및 우수사례 등을 공유·전파하고, 공개SW 시상을 통해 공개SW 인식 제고 도모'},
    {item: '주제', desc: '오픈소스로 바꾸는 세상(Transforming the World with Open source)',
        desc_sub: '- 공개SW 개발자, 커뮤니티, 기업의 공개SW 활용 경험과 역량을 개발자들과 공유하여 오픈소스 생태계의 성장과 발전 계기 마련'
    },
    {item: '참가자', desc: '공개SW개발자, 관련 기업, 학생 등 약 300여명'},
    {item: '장소', desc: '코엑스 401호~03호'},
    {item: '일시', desc: '2023.12.01.(금) 13:00~18:00'},
    {item: '주최', desc: '과학기술정보통신부'},
    {item: '주관', desc: '정보통신산업진흥원'},
]

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