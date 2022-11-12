import React from "react";
import intro from "../../image/intro.png";
import { useNavigate } from "react-router-dom";
function Intro() {
  const navigate = useNavigate();
  return (
    <div className="intro">
      <p id="title">나의 MBTI는?</p>
      <img src={intro} alt="intro" />
      <button id="mainBtn" onClick={() => navigate("/test")}>
        시작하기
      </button>
    </div>
  );
}

export default Intro;
