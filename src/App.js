import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

import routes from "./routes";
import TopBtn from "./components/TopBtn/TopBtn";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
          <TopBtn/>
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
