import React, { useState } from "react";
import questionaire from "../../content/questionaire";
import Loading from "../Loading";

// export function compareNSaveResult(val1, val2) {

//   if (
//     answerArr.filter((el) => el === val1).length >
//     answerArr.filter((el) => el === val2).length
//   ) {
//     setResult((prev) => prev.concat(val1));
//   } else {
//     setResult((prev) => prev.concat(val2));
//   }
// }

function Test() {
  const [qNum, setQNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answerArr, setAnswerArr] = useState([]);
  const [result, setResult] = useState("");

  //두개의 value 비교후 빈도수가 더 많은 문자를 result에 추가한다
  function compareNSaveResult(val1, val2, answerArr) {
    if (
      answerArr.filter((el) => el === val1).length >
      answerArr.filter((el) => el === val2).length
    ) {
      return val1;
      // setResult((prev) => prev.concat(val1));
    } else {
      return val2;
      // setResult((prev) => prev.concat(val2));
    }
  }

  //선택지 버튼을 눌렀을때 선택된 값을 저장하고 다음 질문이 있을시 setQNum(++qnum), 없을 시 result page 보여주기
  function handleSelect(e) {
    console.log(e.target.value);

    if (questionaire.length === qNum + 1) {
      compareNSaveResult("e", "i");
      compareNSaveResult("n", "s");
      compareNSaveResult("t", "f");
      compareNSaveResult("p", "j");
      setLoading(true);
    }
    setAnswerArr([...answerArr, e.target.value]);
    setQNum((prev) => prev + 1);
  }

  return (
    <div className="test">
      <p id="title">TEST</p>
      {/* <Loading result={result} /> */}

      {loading ? (
        <Loading result={result} />
      ) : (
        <div>
          <p>{questionaire[qNum].question}</p>
          {questionaire[qNum].option.map((ans, i) => (
            <button
              id="mainBtn"
              key={i}
              value={ans.value}
              onClick={handleSelect}
            >
              {ans.answer}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Test;
