const quotes = [
  {
    quote: "죄를 미워하되 죄인은 사랑하라.",
    author: "- 마하트마 간디",
  },
  {
    quote: "이른 아침은 입에 황금을 물고 있다.",
    author: "- 벤자민 프랭클린",
  },
  {
    quote: "위대한 사람은 기회가 없다고 원망하지 않는다.",
    author: "- 랄프 왈도 에머슨",
  },
  {
    quote: "사실이라는 것은 없고, 해석만 있다.",
    author: "- 니체",
  },
  {
    quote: "진실을 사랑하고 실수를 용서하라.",
    author: "- 볼테르",
  },
  {
    quote: "성공이 끝은 아니다.",
    author: "- 윈스턴 처칠",
  },
  {
    quote: "게으름은 피곤하기 전에 쉬는 습관일 뿐.",
    author: "- 쥘 르나르",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
