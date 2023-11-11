import {Container} from "react-bootstrap";
import SpinByW from "../../../components/SpinByW/SpinByW";
import {useEffect, useState} from "react";
import {Paper} from "@mui/material";
import appConfig from "../../../config/app.config";
import axios from "axios";
import {Collapse, Pagination, Space} from "antd";

const api_getFaqs = async (req) => {
    return await axios.post(appConfig.apiPreUrl + '/Faq/getFaqs', req)
};

const FaqArea = () => {
    const [data, setData] = useState([]);
    const [categoryCode, setCategoryCode] = useState(0);
    const [loading, setLoading] = useState(false);
    const errMsg1 = 'Faq를 조회하는데 실패하였습니다.'

    const fecthData = async (req) => {
        setLoading(true)
        try {
            const res = await api_getFaqs(req)
            setLoading(false)
            if (res.status === 200) {
                setData(res.data)
            }
        } catch (err) {
            setLoading(false)
            alert(errMsg1)

        }
    }

    useEffect(() => {
        fecthData()
    }, [])

    const goToPage = (page,pageSize) => {
        console.log("page = ", page);
        const req = {
            pageNumber: page,
            pageSize: pageSize,
            categoryCode: categoryCode
        }
        fecthData(req)
    }

    return (
        <div id="FaqArea">
            <Container>
                <div className="faq__area">
                    <h2 className="title">FAQ</h2>
                    <SpinByW loading={loading}/>
                    <div className="faq__content">
                        <Space direction="vertical">
                            {data.faqs?.map((faq, index) => (
                                <Collapse
                                    collapsible="header"
                                    items={[
                                        {
                                            key: index,
                                            label: <div><span className="Q">Q. </span><span className="Q_text">{faq.question}</span></div>,
                                            children: <p>{faq.answer}</p>,
                                        }
                                    ]}
                                />
                            ))}
                        </Space>
                        <Pagination className="pagination" defaultCurrent={1} total={data.tot} onChange={goToPage}/>;
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FaqArea;