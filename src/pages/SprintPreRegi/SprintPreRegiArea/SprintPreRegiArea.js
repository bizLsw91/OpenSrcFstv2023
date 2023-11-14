import {Container} from "react-bootstrap";

import SprintGuide from "./Sections/SprintGuide";
import {useLocation} from "react-router-dom";
import SprintApply from "./Sections/SprintApply";
import {useEffect} from "react";
import {scrollIntoView} from "../../../Util/viewUtil";
import SprintProjects from "./Sections/SprintProjects/SprintProjects";
import {createTheme, ThemeProvider} from "@mui/material";

const customScrollIntoView = (viewId) => {
    if (viewId) {
        const header = document.getElementById('header__sticky');
        const headerHeight = header.clientHeight;
        const viewEl = document.getElementById(viewId);
        if (viewEl) {
            scrollIntoView(viewEl,{ behavior: 'smooth', offsetY: -1*headerHeight+8 });
        }
    }
}
const SprintPreRegiArea = () => {
    const location = useLocation();

    useEffect(() => {
        // URL에서 section 파라미터를 가져옵니다.
        const params = new URLSearchParams(location.search);
        const viewId = params.get('viewId');

        // sectionId가 존재하면 해당 섹션으로 스크롤합니다.
        customScrollIntoView(viewId)

    }, [location]);

    const theme = createTheme(
        {
            palette: {
                primary: {
                    main: '#bf55af',
                },
            },
        }
    );


    return (
        <div id="SprintPreRegiArea">
            <Container>
                <div className="sprintPreRegi__area">
                    <div className="sprintPreRegi__content">
                        <SprintGuide/>
                        <SprintProjects/>
                        <ThemeProvider theme={theme}>
                        <SprintApply/>
                        </ThemeProvider>
                    </div>
                </div>
            </Container>
        </div>
    )
        ;
};

export default SprintPreRegiArea;