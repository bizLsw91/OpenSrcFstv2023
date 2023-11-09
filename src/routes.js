import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import HeaderStyleFive from "./pages/HeaderStyleFive/HeaderStyleFive";
import HeaderStyleFour from "./pages/HeaderStyleFour/HeaderStyleFour";
import HeaderStyleSeven from "./pages/HeaderStyleSeven/HeaderStyleSeven";
import HeaderStyleSix from "./pages/HeaderStyleSix/HeaderStyleSix";
import Home from './pages/Home/Home';
import HomeThree from "./pages/HomeThree/HomeThree";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";
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

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/overview", component: Overview },
  { path: "/directions", component: Directions },
  { path: "/program", component: Program },
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
