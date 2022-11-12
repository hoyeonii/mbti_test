import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Intro from "./Intro";
import Test from "./Test";
import NotFound from "./NotFound";
import Result from "./Result";

function Root() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result/:mbti" element={<Result />} />
          {/* <Route path="/404" element={<NotFound />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Root;
