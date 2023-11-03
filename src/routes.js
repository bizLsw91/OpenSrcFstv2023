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

const routes = [
  { path: "/", component: Home },



  { path: "/homeTwo", component: HomeTwo },
  { path: "/homeThree", component: HomeThree },
  { path: "/headerStyleFour", component: HeaderStyleFour },
  { path: "/headerStyleFive", component: HeaderStyleFive },
  { path: "/headerStyleSix", component: HeaderStyleSix },
  { path: "/headerStyleSeven", component: HeaderStyleSeven },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/servicesDetails", component: ServicesDetails },
  { path: "/portfolio", component: Portfolio },
  { path: "/portfolioDetails", component: PortfolioDetails },
  { path: "/team", component: Team },
  { path: "/teamDetails", component: TeamDetails },
  { path: "/blogs", component: Blogs },
  { path: "/blogDetails", component: BlogDetails },
  { path: "/contact", component: Contact }
];

export default routes;
