import {useState} from "react";

const ProfileCard = (props) => {
    const {id, mainViewId, toggleVisibility, simple, data, subjType} = props
    const isVisible = id === mainViewId


    return (
        <div className="ProfileCard">
            <div className={`ProfileWrapper ${simple?'simple':''}`}>
                <div className="front pfCard-Container gradient1" onClick={()=>toggleVisibility(id)}>
                    <div className="left">
                        <div className="left-top">
                            <div className="left-top-1"><div className="nameAndDetail"><div className="prfName bold_m">{data?.name}</div><div className="underline__blue">상세</div></div><div className={`prfBadge ${'prfBadge-c'+subjType}`}>{data?.badge}</div></div>
                            <div className="left-top-2"><div className="belong"><div className="prfCompany">{data?.company}</div><div className="prfPosition">{data?.position?'/ '+data?.position:''}</div> </div></div>
                        </div>
                        <div className="left-photo"><img src={data?.imgUrl} alt={data?.name}/></div>
                    </div>
                    <div className={`right ${simple?'d-none':''}`}>
                        <div className="right-title">
                            <h4>{data?.lectTitle}</h4>
                        </div>
                        <div className="right-desc">
                            <p>{data?.lectSummary}</p>
                        </div>
                    </div>
                </div>
                <div className={`back pfCard-Container gradient2 z2 toggleBox ${isVisible ? 'visible' : ''} `} onClick={toggleVisibility}>
                    <div className={`up ${data?.profileList.length>0 && isVisible ? 'up-visible':''}`}>
                        <ul>
                            {data?.profileList.map(career => (
                                <li>{career}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={`down ${data?.profileDesc && isVisible ? 'down-visible' : ''}`}>
                        <ul>{data?.profileDesc}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;