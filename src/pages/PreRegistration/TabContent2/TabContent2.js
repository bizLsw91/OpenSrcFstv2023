// material-ui
import {
    Button,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Stack,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import {Formik} from 'formik';
import AnimateButton from "../../../components/@extended/AnimateButton";
import appConfig from "../../../config/app.config";
import axios from "axios";
import {useState} from "react";

const submitData2 = async(values) => {
    try {
        const response = await axios.post(appConfig.apiPreUrl+'/User/check', values);
        // 응답이 성공적으로 돌아오면, 결과를 처리
        console.log(response);
        return response; // 성공 상태와 데이터 반환
    } catch (error) {
        // 에러가 발생했을 경우, 에러 처리
        console.error(error);
        throw error; // 에러를 상위 호출자에게 전파
    }
}
const TabContent2 = ({nextTab3}) => {
    const [data, setData] = useState();

    return (
        <div id="TabContent1">
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('유효한 이메일 형식이 아닙니다.').max(100,'100자를 넘을 수 없습니다.').min(5, '최소 6문자 이상 입력하세요.').required('이메일은 필수 입력사항입니다.'),
                    name: Yup.string().max(100,'100자를 넘을 수 없습니다.').required('이름은 필수 입력사항입니다.'),
                })}
                onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                    try {
                        const res = await submitData2(values); // 비동기 함수 호출
                        if(res.status === 200){
                            alert('정상 확인되었습니다.')
                            setData({...res.data})
                            nextTab3(data)
                        }else{

                        }
                        setStatus({success: true});
                        setSubmitting(false);
                    } catch (err) {
                        alert('이메일 주소와 이름을 다시 확인해주세요.')
                        setStatus({success: false});
                        setErrors({submit: err.message});
                        setSubmitting(false);
                    }
                }}
            >
                {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                    <form noValidate onSubmit={handleSubmit}>
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

                        {errors.submit && (
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        )}
                        <AnimateButton>
                            <Button className="preRegiBtn"  disableElevation disabled={isSubmitting || Object.keys(errors).length > 0} fullWidth size="large" type="submit"
                                    variant="contained" color="primary">
                                등록 확인하기
                            </Button>
                        </AnimateButton>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default TabContent2;