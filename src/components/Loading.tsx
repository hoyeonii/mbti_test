import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../image/loading.gif";
function Loading({ result }: { result: string }) {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(`/result/${result}`);
  }, 2000);

  // setTimeout(() => {
  //   if (dots.length < 3) {
  //     setDots((prev) => prev.concat("."));
  //   } else {
  //     setDots("");
  //   }
  // }, 1000);
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
      <div className="bouncing-loader">
        <div>M</div>
        <div>B</div>
        <div>T</div>
        <div>I</div>
        <div>계</div>
        <div>산</div>
        <div>중</div>
      </div>
    </div>
  );
}

export default Loading;
