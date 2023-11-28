// material-ui
import {
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Stack,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import {Formik} from 'formik';
import appConfig from "../../../config/app.config";
import axios from "axios";
import {useEffect, useState} from "react";
import {Modal, Button} from "antd";
import {Col, Row} from "react-bootstrap";
import {sprintProjectDatas} from "../../SprintPreRegi/SprintPreRegiArea/Sections/SprintProjects/SprintProjects";
import moment from "moment";
import {api_addErrLog} from "../../../services/CommonService";

const userCheckApi = async(isSprint, values) => {
    values.isSprint = isSprint
    try {
        const response = await axios.post(appConfig.apiPreUrl+'/User/check', values);
        // 응답이 성공적으로 돌아오면, 결과를 처리
        console.debug(response);
        return response; // 성공 상태와 데이터 반환
    } catch (error) {
        // 에러가 발생했을 경우, 에러 처리
        console.error(error);
        throw error; // 에러를 상위 호출자에게 전파
    }
}

const TabContent2 = (props) => {
    const {isSprint, email0} = props
    const [email] = useState(email0);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({});
    const [isError, setIsError] = useState(false);
    const [msg, setMsg] = useState('');
    const errMsg0 = '정상적으로 등록이 확인되었습니다.'
    const errMsg1 = '등록이 되어있지 않습니다. 다시 등록 해주시기 바랍니다.'
    const errMsg1_1 = '이름을 다시 확인해주세요.'
    const errMsg2 = '서버와 통신 중 에러가 발생하였습니다.'

    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const sm1 = 4;
    const md1 = 2;
    return (
        <div className="TabContent2">
            <Formik
                initialValues={{
                    email: email,
                    name: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('유효한 이메일 형식이 아닙니다.').max(100,'100자를 넘을 수 없습니다.').min(5, '최소 6문자 이상 입력하세요.').required('이메일은 필수 입력사항입니다.'),
                    name: Yup.string().max(100,'100자를 넘을 수 없습니다.').required('이름은 필수 입력사항입니다.'),
                })}
                onSubmit={async (values) => {
                    setLoading(true)
                    try {
                        const res = await userCheckApi(isSprint, values);
                        setLoading(false);
                        if(res.status === 200) {
                            if (res.data?.errCode) {
                                setIsError(true)
                                if (res.data.errCode === -1) setMsg(errMsg1)
                                else {
                                    const passwordErrData = res.data.passwordErrData;
                                    if (res.data.errCode === -2) {
                                        const accumCnt = passwordErrData.chkFailCount <= 5 ?  passwordErrData.tempLockCnt : passwordErrData.permanentLockCnt
                                        let errMsg1_2 = errMsg1_1+` (실패횟수:${passwordErrData.chkFailCount}/${accumCnt})`
                                        if(passwordErrData.chkFailCount<=5) setMsg(errMsg1_2)
                                        else setMsg(errMsg1_2+`\n실패횟수가 ${passwordErrData.permanentLockCnt}번이 되면 등록확인 서비스를 이용하실 수 없습니다.\n이 후 사무국에 문의해주세요.`)
                                    }
                                    else if (res.data.errCode === -3) {
                                        const unLockTimestamp = passwordErrData.unLockTimestamp
                                        const unLockTimeText = moment(unLockTimestamp, 'YYYYMMDDHHmmss').format('HH시 mm분 ss초')
                                        setMsg(`${unLockTimeText} 이 후 다시 시도해주세요. (잠금시간:${passwordErrData.tempLockTime_mm}분)`)
                                    }else if (res.data.errCode === -4) {
                                        setMsg(`누적 실패횟수가 ${passwordErrData.permanentLockCnt}번이 되어 등록확인 서비스를 이용하실 수 없습니다.\n사무국에 문의해주세요.`)
                                    }
                                }
                            } else {
                                setIsError(false)
                                setUserData(res.data)
                                setMsg(errMsg0)
                            }
                        }
                    } catch (err) {
                        setLoading(false);
                        setIsError(true)
                        setMsg(errMsg2)
                        await api_addErrLog({collectionPath: isSprint?'UserSpr':'User', error:{stack:err.stack}, payload:values})
                    }
                    showModal()
                }}
            >
                {({errors, handleBlur, handleChange, handleSubmit, touched, values}) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="email-signup">Email 주소*</InputLabel>
                            <OutlinedInput
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                                id="email-login2"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="demo@company.com"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="helper-text-email-signup2">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </Stack>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="name-signup">이름*</InputLabel>
                            <OutlinedInput
                                id="name-login2"
                                type="name"
                                value={values.name}
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="홍길동"
                                fullWidth
                                error={Boolean(touched.name && errors.name)}
                            />
                            {touched.name && errors.name && (
                                <FormHelperText error id="helper-text-name-signup2">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </Stack>

                        <Button className="preRegiBtn" key="submit" htmlType="submit" type="primary" loading={loading} disabled={Object.keys(errors).length > 0}>
                            등록 확인하기
                        </Button>
                    </form>
                )}
            </Formik>

            <Modal
                open={open}
                title="결과:"
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        확인
                    </Button>
                ]}
            >
                <div className="msg">{msg}</div>
                {!isError &&
                <ul className="result">
                    {isSprint && userData.sprint != undefined &&
                        <Row><Col xs={sm1} sm={md1}>Sprint:</Col><Col><div>{sprintProjectDatas[userData.sprint-1].name}</div></Col></Row>
                    }
                </ul>}
            </Modal>
        </div>
    );
};

export default TabContent2;