import React from "react";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import DisableRightClick from "./components/DisableRightClick";
import PrivacyPolicy from "./components/privacyPolicy";
import TermsCondition from "./components/termsCondition";
import { Provider } from "react-redux";
import store from "./redux/store";
import AboutUsPage from "./pages/AboutUs";
import Home from "./pages/Home";
import HowWeWork from "./pages/HowWeWork";
import OurServices from "./pages/ourServices";
import HeaderMain from "./components/Header/headerMain";
import HomeMain from "./components/homeMain";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <DisableRightClick></DisableRightClick>

          <Routes>
            <Route>
              <Route path="/" element={<Navbar />} />
              <Route path="/privacyPolicy/" element={<PrivacyPolicy />} />
              <Route path="/termsCondition/" element={<TermsCondition />} />
            </Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
