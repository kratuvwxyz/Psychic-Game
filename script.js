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
  reset();
});

reset = () => {
  b = selections[Math.floor(Math.random() * selections.length)];
  splitSelections = selections.split("");
  console.log(splitSelections);
  key = 0;
  $(".compGuess")
    .removeClass("bg-warning text-dark bg-danger text-light")
    .text("?");
  for (let i = 0; i < 10; i++) {
    let t = $("<kbd>")
      .addClass("clue" + i)
      .text("?");
    $(".humanClue").append(t);
  }
  for (let j= 0; j < splitSelections.length; j++) {
      let q = $("<kbd>").addClass('keyboard').text(splitSelections[j]).attr('data-key', splitSelections[j]);
      $('.keyboardKeys').append(q);
  }
  $(".keyboard").removeClass("avoid-clicks");
};

$(document).on("click", ".keyboard", function (e) {
  let a = $(this).attr("data-key");
  splitSelections.includes(a) ? matchThis(a, b) : console.log("used key");
});

matchThis = (x, y) => {
  splitSelections.splice(splitSelections.indexOf(x), 1);
  x === y ? win() : playAgain(x);
};

playAgain = (x) => {
  key < 9
    ? [$(".clue" + key).text(x), key++]
    : [$(".clue" + key).text(x), loss()];
};

win = () => {
  console.log("winner");
  $(".compGuess").html(b).addClass("bg-warning text-dark");
  reset();
};

loss = () => {
  console.log("looser");
  $(".compGuess").html(b).addClass("bg-danger text-light");
  $(".keyboard").addClass("avoid-clicks");
  setTimeout(() => reset(), 5000);
};
