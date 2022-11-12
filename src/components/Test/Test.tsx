import React, { MouseEvent, useState } from "react";
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
  const [qNum, setQNum] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [answerArr, setAnswerArr] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  //두개의 value 비교후 빈도수가 더 많은 문자를 result에 추가한다
  function compareNSaveResult(val1: string, val2: string) {
    if (
      answerArr.filter((el) => el === val1).length >
      answerArr.filter((el) => el === val2).length
    ) {
      setResult((prev) => prev.concat(val1));
      return val1;
    } else {
      setResult((prev) => prev.concat(val2));
      return val2;
    }
  }

  //선택지 버튼을 눌렀을때 선택된 값을 저장하고 다음 질문이 있을시 setQNum(++qnum), 없을 시 result page 보여주기
  function handleSelect(e: MouseEvent<HTMLButtonElement>) {
    console.log((e.target as HTMLInputElement).value); //e.target 대신 "as HTMLInputElement" 붙이기
    //The $event is now a specific KeyboardEvent. Not all elements have a value property so it casts target to an input element.

    if (questionaire.length === qNum + 1) {
      compareNSaveResult("e", "i");
      compareNSaveResult("n", "s");
      compareNSaveResult("t", "f");
      compareNSaveResult("p", "j");
      setLoading(true);
    }
    setAnswerArr([...answerArr, (e.target as HTMLInputElement).value]); //여기도
    setQNum((prev) => prev + 1);
  }

  return (
    <div className="test">
      <p id="title">TEST</p>
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
