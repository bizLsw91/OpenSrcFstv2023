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
                    <h2 className="title">SPEAKER</h2>
                    <h3 className="title-2">[401호 연사 소개]</h3>
                    <a className="detailBtn  ml-10" href="/speakers">자세히 보기 &gt;</a>
                    <div className="profiles">
                        <ProfileCard id={0} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.startLect[1]} subjType={1}/>
                        <ProfileCard id={1} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.startLect[2]} subjType={1}/>
                        <ProfileCard id={2} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.lectures[1]} subjType={2}/>
                        <ProfileCard id={3} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.lectures[2]} subjType={2}/>
                        <ProfileCard id={4} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.lectures[3]} subjType={2}/>
                        <ProfileCard id={5} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.lectures[4]} subjType={2}/>
                        <ProfileCard id={6} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.lectures[5]} subjType={2}/>
                        <ProfileCard id={7} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.lectures[6]} subjType={2}/>
                    </div>
                </div>
                <div className="home__speakers__content">
                <h2 className="title">SPEAKER</h2>
                    <h3 className="title-2">[402호 연사 소개]</h3>
                    <a className="detailBtn  ml-15" href="/speakers">자세히 보기 &gt;</a>
                    <div className="profiles">
                        <ProfileCard id={8} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[1]} subjType={3}/>
                        <ProfileCard id={9} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[2]} subjType={3}/>
                        <ProfileCard id={10} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[3]} subjType={3}/>
                        <ProfileCard id={11} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[4]} subjType={3}/>
                        <ProfileCard id={12} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[5]} subjType={3}/>
                        <ProfileCard id={13} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[6]} subjType={3}/>
                        <ProfileCard id={14} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[7]} subjType={3}/>
                        <ProfileCard id={15} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[8]} subjType={3}/>
                        <ProfileCard id={16} simple mainViewId={mainViewId} toggleVisibility={handleToggle}
                                     data={speakersData.poster[9]} subjType={3}/>
                    </div>
                </div>
            </section>
            <section className="home__program">
                <Container>
                    <div className="home__area">
                        <div className="home__content">
                            <Image
                                maskClassName="imgBox"
                                src='assets/img/2024design/program.webp' // 이미지 URL을 넣으세요
                                preview={false}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default HomeArea;