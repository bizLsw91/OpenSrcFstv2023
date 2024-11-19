import Home from './pages/Home/Home';
import Overview from "./pages/Overview/Overview";
import Directions from "./pages/Directions/Directions";
import Program from "./pages/Program/Program";
import Notice from "./pages/Notice/Notice";
import Faq from "./pages/Faq/Faq";
import PreRegistration from "./pages/PreRegistration/PreRegistration";
import Event from "./pages/Event/Event";
import DocTerms from "./pages/DocTerms/DocTerms";
import DocPrivacy from "./pages/DocPrivacy/DocPrivacy";
import DocRefusal from "./pages/DocRefusal/DocRefusal";
import Login from "./pages/Login/Login";
import NoticeDetail from "./pages/Notice/NoticeDetail/NoticeDetail";
import Speakers from "./pages/Speakers/Speakers";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/overview", component: Overview },
  { path: "/directions", component: Directions },
  { path: "/program", component: Program },
  { path: "/speakers/:id", component: Speakers },
  { path: "/notice", component: Notice },
  { path: "/noticeDetail", component: NoticeDetail },
  { path: "/faq", component: Faq },
  { path: "/preRegistration", component: PreRegistration },
  { path: "/event", component: Event },
  { path: "/docTerms", component: DocTerms },
  { path: "/docPrivacy", component: DocPrivacy },
  { path: "/docRefusal", component: DocRefusal },


];

export default routes;
