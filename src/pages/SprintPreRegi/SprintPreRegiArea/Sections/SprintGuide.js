import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const infoData = [
    {item: '프로그램명', desc: '오픈소스 컨트리뷰션 아카데미 맛보기'},
    {item: '소개', desc: '컨트리뷰션 아카데미 참가 프로젝트 멘토와 멘티가 함께 참여하여 오픈소스 컨트리뷰션을 실습하는 프로그램'},
    {item: '대상', desc: '오픈소스 프로젝트 참여 확산 및 기여에 관심이 있는 예비 개발자 및 초급 개발자'},
    {item: '인원', desc: '30~40명(프로젝트별 5~10명)'},
    {item: '시간', desc: '12월 1일(금) 14:00 ~ 17:40'},
    {item: '장소', desc: '코엑스 그랜드 컨퍼런스룸 403호'},
    {item: '사전신청', desc: '11월 15일 ~ 11월 22일 공개SW 페스티벌 홈페이지에서 신청'},
    {item: '선정발표', desc: '11월 24일(금) 개별 통보 (홈페이지내 공지) '},
]

const SprintGuide = () => {
    return (
        <section id="SprintGuide" className=" textInfo">
            <h2 className="title">스프린트 모집 안내</h2>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[0].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[0].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[1].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[1].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[2].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[2].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20 d-flex">
                    <td>
                        <div className="item">{infoData[3].item}</div>
                    </td>
                    <td className="d-flex">
                        <div className="desc">{infoData[3].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[4].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[4].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[5].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[5].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[6].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[6].desc}</div>
                    </td>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col className="mb-20">
                    <td>
                        <div className="item">{infoData[7].item}</div>
                    </td>
                    <td>
                        <div className="desc">{infoData[7].desc}</div>
                    </td>
                </Col>
            </Row>
        </section>
    );
};

export default SprintGuide;