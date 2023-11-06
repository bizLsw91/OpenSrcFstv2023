import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

import routes from "./routes";

console.log('REACT_APP_SERVER: ',process.env.REACT_APP_SERVER)

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
