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
import {useState} from "react";
import {Modal, Button} from "antd";
import {Col, Row} from "react-bootstrap";

const userCheckApi = async(values) => {
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


const TabContent2 = ({email0}) => {
    const [email] = useState(email0);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({});
    const [isError, setIsError] = useState(false);
    const [msg, setMsg] = useState('');
    const errMsg0 = '정상적으로 등록이 확인되었습니다.'
    const errMsg1 = '이메일 주소와 이름을 다시 확인해주세요.'
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
                        const res = await userCheckApi(values);
                        if(res.status === 200){
                            setUserData({...res.data})
                            setMsg(errMsg0)
                        }else if(res.status === 404) {
                            setMsg(errMsg1)
                        }
                    } catch (err) {
                        setIsError(true)
                        setMsg(errMsg2)
                        console.error('Error during API call', err);
                    }
                    setLoading(false);
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
                    <Row><Col xs={sm1} sm={md1}>이메일:</Col><Col><div>{userData.email}</div></Col></Row>
                    <Row><Col xs={sm1} sm={md1}>이름:</Col><Col><div>{userData.name}</div></Col></Row>
                    <Row><Col xs={sm1} sm={md1}>소속:</Col><Col><div>{userData.company}</div></Col></Row>
                    <Row><Col xs={sm1} sm={md1}>연락처:</Col><Col><div>{userData.call}</div></Col></Row>
                </ul>}
            </Modal>
        </div>
    );
};

export default TabContent2;