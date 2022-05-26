const btn = document.querySelector("button");
const Count = document.querySelector(".countBox");
const text = document.querySelector("p");

btn.addEventListener("click", function () {
  var idArray = [
    "abc001",
    "abc002",
    "abc003",
    "abc004",
    "abc005",
    "abc006",
    "abc007",
    "abc008",
    "abc009",
    "abc010",
    "abc011",
    "abc012",
    "abc013",
    "abc014",
    "abc015",
    "abc016",
    "abc017",
    "abc018",
    "abc019",
    "abc020",
  ];
  var rand = (Math.random() * idArray.length) | 0;
  var rValue = idArray[rand];

  text.textContent = rValue + "님 당첨입니다. ";
});
