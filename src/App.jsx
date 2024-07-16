import React from "react";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import DisableRightClick from "./components/DisableRightClick";
const App = () => {
  return (
    <div>
      <Router>
<DisableRightClick></DisableRightClick>
        <Navbar></Navbar>
        <Routes>
          <Route></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
