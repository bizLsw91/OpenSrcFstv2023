import {FloatButton} from "antd";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useEffect, useState} from "react";

const TopBtn = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // 300px 이상 스크롤 되었을 때 버튼 표시
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    const toTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드러운 스크롤 이동
    }

    return (
        <div id="TopBtn" style={{ display: visible ? 'inline' : 'none' }}>
            <FloatButton
                icon={<AiOutlineArrowUp/>}
                style={{
                    right: 24,
                }}
                type="default"
                onClick={toTop}
            />
        </div>
    );
};

export default TopBtn;