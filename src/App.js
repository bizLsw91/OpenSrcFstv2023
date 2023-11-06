import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

import routes from "./routes";
import appConfig from "./config/app.config";

const isProd = appConfig.env
const kakaoMapApiKey = appConfig.kakaoMapApiKey
console.log("isProd = ", isProd);
console.log("kakaoMapApiKey = ", kakaoMapApiKey);

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
          <Routes>
              {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={<route.component />} />
              ))}
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
