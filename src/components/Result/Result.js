import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import result from "../../content/result";
function Result() {
  let { mbti } = useParams();
  const navigate = useNavigate();
  const info = result.find((el) => el.type === mbti);
  console.log(info);
  return (
    <div className="result">
      {info ? (
        <div>
          <p id="title">RESULT</p>
          {info.img && <img src={info.img} alt={info.type} />}
          <p className="about">{info.about}</p>
          {/* <div>
            최고의 매치
            {info.match.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div> */}
        </div>
      ) : (
        <p>그런 타입은 없어요</p>
      )}
      <button
        onClick={() => {
          navigate("/");
        }}
        id="mainBtn"
      >
        다시하기
      </button>
    </div>
  );
}

export default Result;
