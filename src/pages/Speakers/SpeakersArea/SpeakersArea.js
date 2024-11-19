import {Container} from "react-bootstrap";
import React, {useState} from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import {speakersData} from "../Speakers";
import HeadingWithLines from "../../../components/HeadingWithLines/HeadingWithLines";
import { Segmented } from 'antd';

const SpeakersArea = ({id='1'}) => {
    const [mainViewId, setMainViewId] = useState(99);
    const [ho, setHo] = useState(id==='1' ? '401호' : '402호');

    const handleToggle = (viewId) => {
        setMainViewId(viewId)
    }

    return (
        <div id="SpeakersArea">
            <div className="speakers__area">
                <div className="speakers__content">
                    <HeadingWithLines text={'연사 소개'} />
                    <Segmented className={'segmented'} size="large" options={['401호', '402호']} value={ho} onChange={setHo} />
                    {
                        ho === '401호' ?
                            <>
                                <section>
                                    <div className="subTitle subTitle-1">
                                        <h3>[기조강연]</h3>
                                    </div>
                                    <div className="profiles">
                                        <ProfileCard key={0} id={0} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.startLect[1]} subjType={1}/>
                                        <ProfileCard key={1} id={1} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.startLect[2]} subjType={1}/>
                                    </div>
                                </section>
                                <section>
                                    <div className="subTitle subTitle-2">
                                        <h3>[발표세션]</h3>
                                    </div>
                                    <div className="profiles">
                                        <ProfileCard key={2} id={2} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.lectures[1]} subjType={2}/>
                                        <ProfileCard key={3} id={3} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.lectures[2]} subjType={2}/>
                                        <ProfileCard key={4} id={4} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.lectures[3]} subjType={2}/>
                                        <ProfileCard key={5} id={5} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.lectures[4]} subjType={2}/>
                                        <ProfileCard key={6} id={6} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.lectures[5]} subjType={2}/>
                                        <ProfileCard key={7} id={7} mainViewId={mainViewId} toggleVisibility={handleToggle}
                                                     data={speakersData.lectures[6]} subjType={2}/>
                                    </div>
                                </section>
                            </> :
                            <>
                                <section>
                                    <div className="subTitle subTitle-3">
                                        <h3>[포스터 세션]</h3>
                                        {/*<h4>:리눅스 오픈소스 문화와 개발자로서 성장하기</h4>*/}
                                    </div>
                                    <div className="profiles">
                                        <ProfileCard simple key={8}  id={8} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[1]} subjType={3}/>
                                        <ProfileCard simple key={9} id={9} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[2]} subjType={3}/>
                                        <ProfileCard simple key={10} id={10} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[3]} subjType={3}/>
                                        <ProfileCard simple key={11} id={11} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[4]} subjType={3}/>
                                        <ProfileCard simple key={12} id={12} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[5]} subjType={3}/>
                                        <ProfileCard simple key={13} id={13} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[6]} subjType={3}/>
                                        <ProfileCard simple key={14} id={14} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[7]} subjType={3}/>
                                        <ProfileCard simple key={15} id={15} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[8]} subjType={3}/>
                                        <ProfileCard simple key={16} id={16} mainViewId={mainViewId}
                                                     toggleVisibility={handleToggle}
                                                     data={speakersData.poster[9]} subjType={3}/>
                                    </div>
                                </section>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default SpeakersArea;