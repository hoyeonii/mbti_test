import React from "react";
import notFound from "../../image/notFound.jpg";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <img src={notFound} alt="notFound" />
      <p>페이지를 찾지 못했어요</p>
      <button
        id="mainBtn"
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로
      </button>
    </div>
  );
}

export default NotFound;
