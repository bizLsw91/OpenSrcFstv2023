import {useState} from "react";

import {Button, ConfigProvider} from "antd";
import {GrDocumentPdf} from "react-icons/gr";
import {FaArrowRight, FaRegFilePdf} from "react-icons/fa6";
import {api_download} from "../../../../services/CommonService";
import { CircleAlert } from 'lucide-react';
import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri";

function downloadFile(downloadUrl, fileName) {
    const anchor = document.createElement('a');
    anchor.href = downloadUrl;
    anchor.target = '_blank'; // 새 창에서 열도록 설정 (선택 사항)
    anchor.download = fileName; // 파일 이름과 확장자 설정
    anchor.click();
}


const ProfileCard = (props) => {
    const {id, mainViewId, toggleVisibility, simple, data, subjType} = props
    const [fileUrl, setFileUrl] = useState('');
    const isBackVisible = subjType !== 3
    const isVisible = isBackVisible && id === mainViewId
    const isDoc = !simple && data.docFilePath

    const handleDownloadClick = async () => {
        const docFilePath = data.docFilePath;
        const fileName = docFilePath.split('/').pop()

        try {
            const res = await api_download({filePath: docFilePath})
            console.log("res = ", res);

            const downloadUrl = res.data.downloadUrl
            console.log("downloadUrl = ", downloadUrl);

            // 받아온 다운로드 URL을 사용하여 파일 다운로드를 진행합니다.
            downloadFile(downloadUrl, fileName);
        } catch (e) {
            console.log("e = ", e);
            console.log("e.message = ", e.message);

        }
    };
    function containsKeyword(text, keyword) { return text.includes(keyword); }

    function splitString(input) {
        // 정규식 사용하여 글자/기호와 숫자 부분 분리
        const match = input.match(/([^\d]+)(\d+)/);
        if (match) {
            return {letters: match[1], numbers: match[2]};
        } else {
            return {letters: input, numbers: ''};
        }
    }

    return (
        <div className={`ProfileCard ${isDoc?'mb-4':''}`}>
            <div className={`ProfileWrapper ${simple && subjType!==3 ? 'simple' : simple && subjType===3 ? 'simple2':''}`}>
                <div className="front pfCard-Container gradient1" onClick={()=>toggleVisibility(id)}>
                    <div className={`left-and-vtext ${!simple ? 'w200' : ''}`}>
                        <div className="left">
                            <div className="left-top">
                                <div className="left-top-1">
                                    <div className="nameAndDetail">
                                        <div className="prfName bold_m">{data?.name}</div>
                                        { isBackVisible &&
                                            <div className="underline__blue">상세보기</div>
                                        }
                                    </div>
                                </div>
                                <div className="left-top-2"><div className={`belong ${data?.subject?'belong-type3':''}`}><div className="prfCompany">{data?.company}</div><div className="prfPosition">{data?.position?'/ '+data?.position:''}</div> </div></div>
                            </div>
                            {
                                data?.subject ?
                                    <div className={`left-subject`}>
                                        <RiDoubleQuotesL className={'quotes'}/>
                                        {data?.subject}
                                        <RiDoubleQuotesR className={'quotes'}/>
                                    </div> :
                                    ''
                            }
                            {
                                subjType != 3 &&
                                <div className="left-photo">
                                    <img src={data?.imgUrl} alt={data?.name} />
                                </div>
                            }
                        </div>
                        {simple &&
                            <div className={`vertical-text-wraaper ${containsKeyword(data?.badge, '기조') ? 'align-end' : ''}`}>
                                <div className={`vertical-text-num vertical-text-num${'-c'+ subjType}`}>
                                    <div className={`vertical-text`}>
                                        {splitString(data?.badge).letters}
                                    </div>
                                    <div className="vertical-num">
                                        {splitString(data?.badge).numbers}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={`right ${simple ? 'd-none' : ''}`}>
                        {!simple &&
                            <div className="prfBadge-box">
                                <div className={`prfBadge ${'prfBadge-c'+subjType}`}>
                                    {data?.badge}
                                </div>
                            </div>
                        }
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
                            {data?.profileList.map((career, idx) => (
                                <li key={idx}>{career}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={`down ${data?.profileDesc && isVisible ? 'down-visible' : ''}`}>
                        <ul>{data?.profileDesc}</ul>
                    </div>
                </div>
            </div>
            {isDoc &&
                <div className="btnArea">
                    <Button className="docBtn" onClick={handleDownloadClick}><FaRegFilePdf className="docIcon"/>발표 자료<FaArrowRight className="docIcon"/></Button>
                </div>
            }
        </div>
    );
};

export default ProfileCard;