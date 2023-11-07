import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

import routes from "./routes";
import appConfig from "./config/app.config";

console.log('REACT_APP_SERVER: ',process.env.REACT_APP_SERVER)
console.log('REACT_APP_RESTAPI: ',process.env.REACT_APP_RESTAPI)

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
