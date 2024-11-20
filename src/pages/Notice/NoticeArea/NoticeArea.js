import {Container} from "react-bootstrap";
import {Table} from "antd";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import appConfig from "../../../config/app.config";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import HeadingWithLine from "../../../components/HeadingWithLines/HeadingWithLines";

const api_getPosts = async (req) => {
    return await axios.post(appConfig.apiPreUrl + '/Notice/getPosts', req)
};
const NoticeArea = () => {
    const [loading, setLoading] = useState(false);
    // 게시물 목록을 저장할 상태 변수
    const [posts, setPosts] = useState([]);
    const errMsg = '게시물을 가져오는 데 실패했습니다.';
    const navigate = useNavigate();

    // useMemo를 사용하여 API 응답을 캐싱합니다.
    const cachedPosts = useMemo(() => posts, [posts]);

    const fetchData = async (req) => {
        try {
            setLoading(true);
            const res = await api_getPosts(req);
            setPosts(res.data)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setPosts([])
            alert(errMsg)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const toDetail = async (index) => {
        navigate('/noticeDetail',{state:{index:index}})
    }

    const fomatedDate = (date)=>{
        return moment(date, "YYYYMMDD").format("YYYY.MM.DD")
    }


    const columns = [
        {
            title: 'No.',
            dataIndex: 'index',
            key: 'index',
            render: (index, recode)=>(
                <>
                    {recode.categoryCode === 0 ? <span>{index}</span> : <span className="star">★</span>}
                </>
            )
        },
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (_, record) => (
                <a onClick={() => toDetail(record.index)}>{record.title}</a>
            )
        },
        {
            title: '작성자',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: '조회수',
            dataIndex: 'views',
            key: 'views',
        },
        {
            title: '등록일',
            dataIndex: 'date',
            key: 'date',
            render:(date)=>(
                <div>{fomatedDate(date)}</div>
            )
        },
    ];

    const columns_mobile = [
        {
            dataIndex: 'index',
            key: 'index',
            render: (_, record) => (
                <a onClick={() => toDetail(record.index)}>
                    <div>
                        {record.categoryCode === 0 ?
                            <div className="m-title">{record.title}</div>
                            :
                            <div className="m-titleDiv">
                                <div className="m-star">★</div>
                                <div className="m-title">{record.title}</div>
                            </div>
                        }
                        <div className="m-shortbox">작성자: {record.author}</div>
                        <div className="m-shortbox">조회수: {record.views}</div>
                        <div className="m-shortbox">등록일: {fomatedDate(record.date)}</div>
                    </div>
                </a>
            )

        },
    ];

    return (
        <div id="NoticeArea">
            <Container>
                <div className="notice__area">
                    <div className="notice__content">
                        <HeadingWithLine text={'공지사항'}/>
                        <Table className="notMobile d-st-sm-none" loading={loading} columns={columns} dataSource={cachedPosts} pagination={{ position: ['bottomCenter'] }} />
                        <Table className="mobile d-sm-none" showHeader={false} loading={loading} columns={columns_mobile} dataSource={cachedPosts} pagination={{ position: ['bottomCenter'] }} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoticeArea;