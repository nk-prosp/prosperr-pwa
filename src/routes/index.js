import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../containers/Home'
import Login from '../containers/Login'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Routing;
