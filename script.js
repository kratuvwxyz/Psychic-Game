$(document).on("click", ".start", function () {
  $(".boxone").hide();
  $(".boxtwo").removeClass("d-none");
  $(".boxthree").removeClass("d-none");
  $(".boxfour").removeClass("d-none");
});

let selections = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  splitSelections = selections.split(""),
  b = "",
  key = 0;

$(document).ready(function () {
  b = selections[Math.floor(Math.random() * selections.length)];
});

$(document).on("click", ".keyboard", function (e) {
  let a = $(this).attr("data-key");
  console.log(a, b, splitSelections);
  splitSelections.includes(a) ? matchThis(a, b) : console.log("used key");
});

matchThis = (x, y) => {
  splitSelections.splice(splitSelections.indexOf(x), 1);
  x === y ? win() : playAgain(x);
};

playAgain = (x) => {
  key < 11 ? [$(".clue" + key).text(x), key++] : loss();
};

win = () => {
  console.log("winner");
};

loss = () => {
  console.log("looser");
};
