import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HOME } from "./Routes";
import Home from "../screens/Home";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
