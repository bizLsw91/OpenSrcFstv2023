// material-ui
import {
    FormHelperText,
    InputLabel,
    OutlinedInput, RadioGroup, Radio,
    Stack, FormControlLabel, createTheme, ThemeProvider
} from '@mui/material';

// third party
import * as Yup from 'yup';
import {Formik} from 'formik';
import appConfig from "../../../config/app.config";
import axios from "axios";
import {Button, Checkbox, Modal} from "antd";
import {useEffect, useState} from "react";
import Terms1 from "./Terms1";
import Terms2 from "./Terms2";
import {sprintProjectDatas} from "../../SprintPreRegi/SprintPreRegiArea/Sections/SprintProjects/SprintProjects";

const submitData = async (isSprint, values) => {
    values.isSprint = isSprint
    try {
        // Axios를 사용하여 POST 요청을 보냄
        const response = await axios.post(appConfig.apiPreUrl + '/User/' , values);
        // 응답이 성공적으로 돌아오면, 결과를 처리
        console.log(response);
        return response; // 성공 상태와 데이터 반환
    } catch (error) {
        // 에러가 발생했을 경우, 에러 처리
        console.error(error);
        throw error; // 에러를 상위 호출자에게 전파
    }
}
const api_sprintCloseChks = async () => {
    return await axios.get(appConfig.apiPreUrl + '/User/sprintCloseChks')
};
const api_addErrLog = async (req) => {
    return await axios.post(appConfig.apiPreUrl + '/Common/Error/addErrLog', req)
};


const TabContent1 = (props) => {
    const {isSprint, nextTab2} = props
    const [isClosedArr, setIsClosedArr] = useState([false,false,false]);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [isError, setIsError] = useState(false);
    const [msg, setMsg] = useState('');
    const [email, setEmail] = useState('');
    const [agree1, setAgree1] = useState(false);
    const [agree2, setAgree2] = useState(false);
    const msg0 = '사전 등록 되었습니다.'
    const msg1 = '서버와 통신 중 에러가 발생하였습니다. 다시 등록해주시기 바랍니다.'
    const msg2 = '이미 같은 이메일 주소가 등록되어 있습니다. 다른 이메일로 등록해주시기 바랍니다.'
    let msg3 = ''
    const msg4 = '스프린트 신청 마감정보를 불러오는데 실패했습니다.'

    useEffect(()=>{
        if(isSprint){
            sprintCloseChks()
        }
    },[])

    const sprintCloseChks = async ()=>{
        try {
            const res = await api_sprintCloseChks()
            if (res.status === 200) {
                setIsError(false)
                setIsClosedArr(res.data.isClosedArr)
            }
        } catch (err) {
            console.log("sprintCloseChks err.stack = ", err.stack);
            setIsError(true)
            setMsg(msg4)
            showModal()
        }
    }

    const showModal = () => {
        setOpen(true);
    };
    const showModal1 = () => {
        setOpen1(true);
    };
    const showModal2 = () => {
        setOpen2(true);
    };
    const handleCancel = () => {
        setOpen(false);
        if (!isError) nextTab2(email)
    };
    const handleCancel1 = () => {
        setOpen1(false);
    };
    const handleCancel2 = () => {
        setOpen2(false);
    };

    const allAgreeChk = (e) => {
        setAgree1(e.target.checked)
        setAgree2(e.target.checked)
    };

    const agree1Chk = (e) => {
        setAgree1(e.target.checked)
    }
    const agree2Chk = (e) => {
        setAgree2(e.target.checked)
    }

    return (
        <div className="TabContent1">
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    company: '',
                    call: '',
                    sprint: isSprint?0:99,
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('유효한 이메일 형식이 아닙니다.').max(100, '100자를 넘을 수 없습니다.').min(5, '최소 6문자 이상 입력하세요.').required('이메일은 필수 입력사항입니다.'),
                    name: Yup.string().max(100, '100자를 넘을 수 없습니다.').required('이름은 필수 입력사항입니다.'),
                    company: Yup.string().max(100, '100자를 넘을 수 없습니다.').required('소속은 필수 입력사항입니다.'),
                    call: Yup.string().matches(/^\d{8,11}$/, '유효한 전화번호를 입력하세요. - 없이 입력하세요').required('연락처는 필수 입력사항입니다.'),
                    sprint: Yup.number().min(1, 'Sprint Project 선택은 필수입니다.'),
                })}
                onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                    values.sprint = Number(values.sprint)
                    setEmail(values.email)
                    if(values.sprint != 99)
                        msg3 = 'Sprint Project: <'+sprintProjectDatas[values.sprint-1].name+'> 가 마감되었습니다.'
                    try {
                        const res = await submitData(isSprint, values); // 비동기 함수 호출
                        setSubmitting(false);
                        if (res.status === 200) {
                            if (res.data?.isError && res.data?.errCode === -1) { //중복 이메일 존재
                                setMsg(msg2)
                                setIsError(true)
                                setStatus({success: false});
                            }else if (res.data?.isError && res.data?.errCode === -2) { //스프린트 정원2배수 마감
                                setMsg(msg3)
                                setIsError(true)
                                setStatus({success: false});
                            } else {
                                setMsg(msg0)
                                setIsError(false)
                                setStatus({success: true});
                            }
                        }
                    } catch (err) {
                        console.error(err);
                        setMsg(msg1)
                        setIsError(true)
                        setStatus({success: false});
                        setErrors({submit: err.message});
                        await api_addErrLog({collectionPath: isSprint?'UserSpr':'User', error: {stack: err.stack}, payload: values})
                    }
                    showModal()
                }}
            >
                {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (

                        <form noValidate onSubmit={handleSubmit}>
                            {isSprint &&
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="sprint-signup">Sprint Project 선택*</InputLabel>
                                    <RadioGroup
                                        col
                                        id="sprint-signup"
                                        name="sprint"
                                        value={values.sprint}
                                        onChange={handleChange}
                                    >
                                        {
                                            sprintProjectDatas.map((data,index) =>
                                                (<FormControlLabel value={data.value} control={<Radio disabled={isClosedArr[index]}/>}
                                                                   label={<div className={'bold_m colorSprint'+data.value}>{data.name+(isClosedArr[index]?' (마감)':'')}</div>}/>)
                                            )
                                        }
                                    </RadioGroup>
                                    {errors.sprint && (
                                        <FormHelperText error id="helper-text-sprint-signup">
                                            {errors.sprint}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            }
                            <Stack spacing={1}>
                                <InputLabel htmlFor="email-signup">Email 주소*</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.email && errors.email)}
                                    id="email-login"
                                    type="email"
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="demo@company.com"
                                    inputProps={{}}
                                />
                                {touched.email && errors.email && (
                                    <FormHelperText error id="helper-text-email-signup">
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </Stack>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="name-signup">이름*</InputLabel>
                                <OutlinedInput
                                    id="name-login"
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
                                    <FormHelperText error id="helper-text-name-signup">
                                        {errors.name}
                                    </FormHelperText>
                                )}
                            </Stack>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="company-signup">소속*</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.company && errors.company)}
                                    id="company-signup"
                                    value={values.company}
                                    name="company"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Demo Inc."
                                    inputProps={{}}
                                />
                                {touched.company && errors.company && (
                                    <FormHelperText error id="helper-text-company-signup">
                                        {errors.company}
                                    </FormHelperText>
                                )}
                            </Stack>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="call-signup">연락처*</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.call && errors.call)}
                                    id="call-signup"
                                    value={values.call}
                                    name="call"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="- 없이 입력하세요"
                                    inputProps={{}}
                                />
                                {touched.call && errors.call && (
                                    <FormHelperText error id="helper-text-call-signup">
                                        {errors.call}
                                    </FormHelperText>
                                )}
                            </Stack>
                            <div className="agreeBox">
                                <div className="agreeDiv allAgreeDiv">
                                    <Checkbox className="allAgreeChk" onChange={allAgreeChk}>모두 동의합니다.</Checkbox>
                                </div>
                                <div className="agreeDiv agree1Div">
                                    <Checkbox className="agree1Chk" onChange={agree1Chk} checked={agree1}>이용약관
                                        동의(필수)</Checkbox>
                                    <a onClick={showModal1} className="underline__blue">보기</a>
                                </div>
                                <div className="agreeDiv agree2Div">
                                    <Checkbox className="agree2Chk" onChange={agree2Chk} checked={agree2}>개인정보 수집 및 이용
                                        동의(필수)</Checkbox>
                                    <a onClick={showModal2} className="underline__blue">보기</a>
                                </div>
                            </div>

                            <Button className="preRegiBtn" key="submit" htmlType="submit" type="primary"
                                    loading={isSubmitting}
                                    disabled={!agree1 || !agree2 || Object.keys(errors).length > 0}>
                                사전 등록하기
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
            </Modal>
            <Modal
                className="termsModal"
                open={open1}
                onCancel={handleCancel1}
                footer={[
                    <Button key="back" onClick={handleCancel1}>
                        확인
                    </Button>
                ]}
            >
                <Terms1/>
            </Modal>
            <Modal
                className="termsModal"
                open={open2}
                onCancel={handleCancel2}
                footer={[
                    <Button key="back" onClick={handleCancel2}>
                        확인
                    </Button>
                ]}
            >
                <Terms2/>
            </Modal>
        </div>
    );
};

export default TabContent1;