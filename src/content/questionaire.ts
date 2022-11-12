const questionaire: {
  question: String;
  option: { answer: string; value: string }[];
}[] = [
  {
    question: "숙소에 파티가 열렸다.\n새로운 사람들도 있네?",
    option: [
      { answer: "새로운 사람들과 친해지려고 노력한다", value: "e" },
      { answer: "아는 사람과 깊게 친해지려고 노력한다", value: "i" },
    ],
  },
  {
    question: "한국 입국 전에 K-eta 신청해야하는데...",
    option: [
      { answer: "마감 시간에 맞춰서 준비한다", value: "j" },
      { answer: "아무 때나 하면 어때", value: "p" },
    ],
  },
  {
    question: "홍대에는 카페가 너무 많아ㅠㅠㅠ 어딜 가야하지?",
    option: [
      { answer: "늘 가던 잘 아는 카페", value: "s" },
      { answer: "최근에 새로 오픈한 카페???", value: "n" },
    ],
  },
  {
    question: "여행 코스를 짜야하는데 어떤 코스가 좋을까?",
    option: [
      {
        answer: "스테디셀러가 최고지! 한국 관광청에서 추천하는 코스로 가야지",
        value: "s",
      },
      { answer: "나만의 여행 코스를 만들겠어! 새로운 방식으로", value: "n" },
    ],
  },
  {
    question:
      "여행 동행이 있으면 좋을 거 같은데..\n둘 중에 어떤 사람을 고르지?",
    option: [
      { answer: "냉정하고 칼 같은 성격의 동행", value: "t" },
      { answer: "사근사근하고 푸근한 느낌의 동행", value: "f" },
    ],
  },
  {
    question: "숙소는 어디로 잡는게 좋을까?",
    option: [
      { answer: "접근성 좋은 번화가", value: "t" },
      { answer: "감성 돋는 골목길", value: "f" },
    ],
  },
  {
    question: "호텔 예약 중에 문제가 생겼다.\n전화를 해야겠는데...",
    option: [
      { answer: "뭐라고 말할 지 적어두고 전화한다", value: "i" },
      { answer: "그냥 곧장 전화한다", value: "e" },
    ],
  },
  {
    question: "나와 여행 다니기 좋은 사람들은 왠지...",
    option: [
      { answer: "똑똑하고 유능한 사람들일 것 같아", value: "t" },
      { answer: "마음이 따뜻하고 너그러운 사람들일 것 같아", value: "f" },
    ],
  },
  {
    question: "여행 계획을 짜보자!",
    option: [
      {
        answer:
          "하루도 허비할 수 없어! 아침에는 경복궁, 점심에 명동, 저녁에는 홍대에 갈거야!",
        value: "j",
      },
      {
        answer: "우선 2호선을 타볼까? 발 가는대로 가는것도 나쁘지 않아",
        value: "p",
      },
    ],
  },
  {
    question: "나는 어떤 룸메를 더 좋아할까?",
    option: [
      { answer: "나랑 여행 같이 다닐래? 매일이 파리투나잇!", value: "e" },
      { answer: "오늘 어디가냐고요?? 왜요?", value: "i" },
    ],
  },
  {
    question: "나는 이런 동행이 마음에 들어",
    option: [
      {
        answer: "조금은 투박하지만 약속 잘 지키고 길 잘 찾으면 되지!",
        value: "s",
      },
      {
        answer: "내가 리드하더라도 내말에 공감해주고 경청해주는 사람이 좋아",
        value: "n",
      },
    ],
  },
  {
    question: "나의 여행은...",
    option: [
      { answer: "고즈넉하고 평화로운 여행이 좋아", value: "j" },
      { answer: "놀라운 일이 매일 일어났으면 좋겠어", value: "p" },
    ],
  },
];

export default questionaire;
