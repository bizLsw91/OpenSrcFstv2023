import {Container} from "react-bootstrap";
import {Table} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import appConfig from "../../../config/app.config";
import {useNavigate} from "react-router-dom";

const fetchPosts = async (req) => {
    return await axios.post(appConfig.apiPreUrl + '/Notice/getPosts', req)
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
            const res = await fetchPosts(req);
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

    const toDetail = (index) => {
        navigate('/noticeDetail',{state:{data:posts.find((post)=>post.index===index)}})
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
        },
    ];

    return (
        <div id="NoticeArea">
            <Container>
                <div className="notice__area">
                    <div className="notice__content">
                        <h2 className="notice__title">공지사항</h2>
                        <Table className="" loading={loading} columns={columns} dataSource={posts} pagination={{ position: ['bottomCenter'] }} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NoticeArea;