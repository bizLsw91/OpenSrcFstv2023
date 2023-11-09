import {Container} from "react-bootstrap";
import {Table} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import appConfig from "../../../config/app.config";
import {useNavigate} from "react-router-dom";
import moment from "moment";

const getPosts = async (req) => {
    return await axios.post(appConfig.apiPreUrl + '/Notice/getPosts', req)
};
const fetchViewsUp = async (index) => {
    return await axios.get(appConfig.apiPreUrl + '/Notice/viewsUp/'+index)
};


const NoticeArea = () => {
    const [loading, setLoading] = useState(false);
    // 게시물 목록을 저장할 상태 변수
    const [posts, setPosts] = useState([]);
    const errMsg = '게시물을 가져오는 데 실패했습니다.';
    const navigate = useNavigate();

    const fetchData = async (req) => {
        try {
            setLoading(true);
            const res = await getPosts(req);
            console.log("res.data = ", res.data);
            setPosts(res.data)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setPosts([])
            alert(errMsg)
            console.error(errMsg, error);
        }
    }

    useEffect(() => {
        // 페이지가 로드될 때 게시물 가져오는 함수 호출
        fetchData()
    }, []);

    const toDetail = async (index) => {
        try {
            await fetchViewsUp(index)
            navigate('/noticeDetail',{state:{data:posts.find((post)=>post.index===index)}})
        }catch (err){
            alert('서버와 통신중 에러가 발생하였습니다.')
        }
    }

    const fomatedDate = (date)=>{
        return moment(date, "YYYYMMDD").format("YYYY.MM.DD")
    }

    const columns = [
        {
            title: 'No.',
            dataIndex: 'index',
            key: 'index',
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
                        <div className="m-title">{record.title}</div>
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
                        <h2 className="notice__title">공지사항</h2>
                        <Table className="notMobile d-st-sm-none" loading={loading} columns={columns} dataSource={posts} pagination={{ position: ['bottomCenter'] }} />
                        <Table className="mobile d-sm-none" showHeader={false} loading={loading} columns={columns_mobile} dataSource={posts} pagination={{ position: ['bottomCenter'] }} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoticeArea;