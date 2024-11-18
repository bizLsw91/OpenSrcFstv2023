import {Container} from "react-bootstrap";
import {Image} from "antd";
import React, {useState} from "react";
import ProfileCard from "../../Speakers/SpeakersArea/ProfileCard/ProfileCard";
import {speakersData} from "../../Speakers/Speakers";

const HomeArea = () => {
    const [mainViewId, setMainViewId] = useState(99);

    const handleToggle = (viewId) => {
        setMainViewId(viewId)
    }

    return (
        <div id="HomeArea">
            <section className="baseBG" />
            <section className="home__speakers">
                <div className="home__speakers__cover"></div>
                <div className="home__speakers__content">
                    <h2 className="title">Speakers</h2>
                    <h3 className="title-2">연사 소개</h3>
                    <div className="profiles">
                        <ProfileCard id={0} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.startLect[1]} subjType={1}/>
                        <ProfileCard id={1} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.startLect[2]} subjType={1}/>
                        <ProfileCard id={2} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.lectures[1]} subjType={2}/>
                        <ProfileCard id={3} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.lectures[2]} subjType={2}/>
                        <ProfileCard id={4} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.lectures[3]} subjType={2}/>
                        <ProfileCard id={5} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.lectures[4]} subjType={2}/>
                        <ProfileCard id={6} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.lectures[5]} subjType={2}/>
                        <ProfileCard id={7} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.lectures[6]} subjType={2}/>
                        <ProfileCard id={8} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_1[1]} subjType={3}/>
                        <ProfileCard id={9} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_1[2]} subjType={3}/>
                        <ProfileCard id={10} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_1[3]} subjType={3}/>
                        <ProfileCard id={11} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_1[4]} subjType={3}/>
                        <ProfileCard id={12} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_1[5]} subjType={3}/>
                        <ProfileCard id={13} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_2[1]} subjType={4}/>
                        <ProfileCard id={14} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_2[2]} subjType={4}/>
                        <ProfileCard id={15} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_2[3]} subjType={4}/>
                        <ProfileCard id={16} simple mainViewId={mainViewId} toggleVisibility={handleToggle} data={speakersData.talk_2[4]} subjType={4}/>
                    </div>
                    <a className="detailBtn  ml-15" href="/speakers">자세히 보기 &gt;</a>
                </div>
            </section>
            <section className="home__program">
                <Container>
                    <div className="home__area">
                        <div className="home__content">
                            <Image
                                maskClassName="imgBox"
                                src='assets/img/2024design/program.webp' // 이미지 URL을 넣으세요
                                // preview={{src: "assets/img/openSW/openSW-program.jpg"}} // 클릭할 때만 확대되도록 설정
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default HomeArea;