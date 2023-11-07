// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import {Formik} from 'formik';
import AnimateButton from "../../../components/@extended/AnimateButton";



const TabContent1 = () => {
    return (
        <div id="TabContent1">
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    company: '',
                    call: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('유효한 이메일 형식이 아닙니다.').max(100,'100자를 넘을 수 없습니다.').min(5, '최소 6문자 이상 입력하세요.').required('이메일은 필수 입력사항입니다.'),
                    name: Yup.string().max(100,'100자를 넘을 수 없습니다.').required('이름은 필수 입력사항입니다.'),
                    company: Yup.string().max(100,'100자를 넘을 수 없습니다.').required('소속은 필수 입력사항입니다.'),
                    call: Yup.string().matches(/^\d{8,11}$/, '유효한 전화번호를 입력하세요.').required('연락처는 필수 입력사항입니다.'),
                })}
                onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                    try {
                        console.log(values)
                        setStatus({success: true});
                        setSubmitting(false);
                    } catch (err) {
                        console.error(err);
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


                        {errors.submit && (
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        )}
                        <AnimateButton>
                            <Button className="preRegiBtn"  disableElevation disabled={isSubmitting || Object.keys(errors).length > 0} fullWidth size="large" type="submit"
                                    variant="contained" color="primary">
                                사전 등록하기
                            </Button>
                        </AnimateButton>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default TabContent1;