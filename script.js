let selections = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  splitSelections,
  b = "",
  key = 0,
  winner = 0,
  looser = 0,
  clueNumber = 12;

$(document).on("click", ".start", function () {
  $(".boxone").hide();
  $(".boxtwo").removeClass("d-none");
  $(".boxthree").removeClass("d-none");
  $(".boxfour").removeClass("d-none");
  reset();
});

reset = () => {
  $(".humanClue").empty();
  $(".keyboardKeys").empty();
  clueNumber = 12;
  b = selections[Math.floor(Math.random() * selections.length)];
  splitSelections = selections.split("");
  key = 0;
  $(".compGuess")
    .removeClass("bg-warning text-dark bg-danger text-light")
    .text("?");
  let i = 0;
  humanClueCreate = () => {
    let t = $("<aside>")
      .addClass("clue" + i)
      .text("?");
    $(".humanClue").append(t);
    i++;
    changeEmogi(clueNumber - i);
    $(".guessCount").text(i + " chances");
    i == clueNumber ? stopInterval(startInterval) : console.log("clue created");
  };
  let startInterval = setInterval(humanClueCreate, 250);
  stopInterval = (x) => {
    clearInterval(x);
  };
  for (let j = 0; j < splitSelections.length; j++) {
    let q = $("<kbd>")
      .addClass("keyboard")
      .text(splitSelections[j])
      .attr("data-key", splitSelections[j]);
    $(".keyboardKeys").append(q);
  }
  $(".keyboard").removeClass("avoid-clicks");
};

$(document).on("click", ".keyboard", function (e) {
  let a = $(this).attr("data-key");
  splitSelections.includes(a) ? matchThis(a, b) : console.log("Key Used Already!");
});

$(document.body).on('keyup', function (e) {
  let aa = e.key;
  let bb = aa.toUpperCase();
  splitSelections.includes(bb) ? matchThis(bb, b) : console.log("Key Used Already!");
})

matchThis = (x, y) => {
  splitSelections.splice(splitSelections.indexOf(x), 1);
  x === y ? win() : playAgain(x);
};

playAgain = (x) => {
  key < clueNumber - 1
    ? [
        $(".clue" + key).text(x),
        key++,
        changeEmogi(key),
        clueNumber - key !== 1
          ? $(".guessCount").text(clueNumber - key + " chances")
          : $(".guessCount").text("last chance"),
      ]
    : [
        $(".clue" + key).text(x),
        changeEmogi(12),
        $(".guessCount").text("lost all chances"),
        loss(),
      ];
};

changeEmogi = (x) => {
  $("#smilechange").removeClass();
  x == 1
    ? $("#smilechange").addClass("fas fa-laugh iconSize text-success")
    : x == 2
    ? $("#smilechange").addClass("fas fa-laugh-beam iconSize text-success")
    : x == 3
    ? $("#smilechange").addClass("fas fa-grin-beam iconSize text-success")
    : x == 4
    ? $("#smilechange").addClass("fas fa-grin-alt iconSize text-success")
    : x == 5
    ? $("#smilechange").addClass("fas fa-grin iconSize text-success")
    : x == 6
    ? $("#smilechange").addClass("fas fa-smile iconSize text-primary")
    : x == 7
    ? $("#smilechange").addClass("fas fa-meh iconSize text-primary")
    : x == 8
    ? $("#smilechange").addClass("fas fa-flushed iconSize text-primary")
    : x == 9
    ? $("#smilechange").addClass("fas fa-frown iconSize text-primary")
    : x == 10
    ? $("#smilechange").addClass("fas fa-angry iconSize text-danger")
    : x == 11
    ? $("#smilechange").addClass("fas fa-frown-open iconSize text-danger")
    : x == 12
    ? $("#smilechange").addClass("fas fa-tired iconSize text-danger")
    : $("#smilechange").addClass("fas fa-laugh-squint iconSize text-success");
};

win = () => {
  looser++;
  $(".compGuess").html(b).addClass("bg-warning text-dark");
  $(".guessCount").text("done it").addClass("bg-success");
  $("#smilechange")
    .removeClass()
    .addClass("fas fa-grin-stars iconSize text-dark");
  $(".keyboard").addClass("avoid-clicks");
  $(".looser").text(looser);
  setTimeout(() => reset(), 5000);
};

loss = () => {
  winner++;
  $(".compGuess").html(b).addClass("bg-danger text-light");
  $(".keyboard").addClass("avoid-clicks");
  $(".winner").text(winner);
  setTimeout(() => reset(), 5000);
};
