// material-ui
import {
    Button,
    InputLabel,
    OutlinedInput,
    Stack,
} from '@mui/material';



const TabContent3 = ({data}) => {
    return (
        <div id="TabContent3">
            <Stack spacing={1}>
                <InputLabel htmlFor="email-signup">Email 주소</InputLabel>
                <OutlinedInput
                    id="email-signup3"
                    fullWidth
                    value={data.email}
                    name="email"
                    disabled
                />
            </Stack>
            <Stack spacing={1}>
                <InputLabel htmlFor="name-signup">이름</InputLabel>
                <OutlinedInput
                    id="name-signup3"
                    value={data.name}
                    name="name"
                    fullWidth
                    disabled
                />
            </Stack>
            <Stack spacing={1}>
                <InputLabel htmlFor="company-signup">소속</InputLabel>
                <OutlinedInput
                    id="company-signup3"
                    fullWidth
                    value={data.company}
                    name="company"
                    disabled
                />
            </Stack>
            <Stack spacing={1}>
                <InputLabel htmlFor="call-signup3">연락처</InputLabel>
                <OutlinedInput
                    id="call-signup3"
                    fullWidth
                    value={data.call}
                    name="call"
                    disabled
                />
            </Stack>

            <Button className="preRegiBtn" fullWidth size="large"
                    variant="contained" color="primary">
                다시 입력 하기
            </Button>
        </div>
    );
};

export default TabContent3;