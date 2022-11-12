import entp from "../image/entp.jpg";
import estj from "../image/estj.jpg";

//img처럼 optional은 ? 붙여주기
const result: { type: string; about: string; match: string[]; img?: string }[] =
  [
    {
      type: "entp",
      about:
        "타인이 믿는 이념이나 논쟁에 반향을 일으킴으로써 군중을 선동하는 일명 선의의 비판자입니다.",
      match: ["entj", "intp"],
      img: entp,
    },
    {
      type: "entj",
      about: "천성적으로 타고난 리더입니다.",
      match: ["entp", "intp"],
    },
    {
      type: "enfp",
      about: " 자유로운 사고의 소유자입니다.",
      match: ["entj", "intp"],
    },
    {
      type: "enfj",
      about:
        "따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많습니다. ",
      match: ["entp", "intp"],
    },

    { type: "estp", about: "엣트피", match: ["entj", "intp"] },
    {
      type: "estj",
      about:
        "따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많습니다. ",
      match: ["entp", "intp"],
      img: estj,
    },
    { type: "esfp", about: "엣프피", match: ["entj", "intp"] },
    { type: "esfj", about: "엣프제", match: ["entp", "intp"] },

    { type: "intp", about: "인팁ㅂ", match: ["entj", "intp"] },
    { type: "intj", about: "인티제", match: ["entp", "intp"] },
    { type: "infp", about: "인프피", match: ["entj", "intp"] },
    { type: "infj", about: "인프제", match: ["entp", "intp"] },

    { type: "istp", about: "잇팁", match: ["entj", "intp"] },
    { type: "istj", about: "잇티제", match: ["entp", "intp"] },
    { type: "isfp", about: "잇프피", match: ["entj", "intp"] },
    { type: "isfj", about: "잇프제", match: ["entp", "intp"] },
  ];
export default result;
