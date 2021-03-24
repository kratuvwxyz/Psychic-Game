let splitSelections,
  selections = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  b = "",
  key = 0,
  winner = 0,
  looser = 0,
  clueNumber = 12;
$(document).on("click", ".start", function () {
  $(".boxone").hide(),
    $(".boxtwo").removeClass("d-none"),
    $(".boxthree").removeClass("d-none"),
    $(".boxfour").removeClass("d-none"),
    reset();
}),
  (reset = () => {
    $(".humanClue").empty(),
      $(".keyboardKeys").empty(),
      (clueNumber = 12),
      (b = selections[Math.floor(Math.random() * selections.length)]),
      (splitSelections = selections.split("")),
      (key = 0),
      $(".compGuess")
        .removeClass("bg-warning text-dark bg-danger text-light")
        .text("?");
    let e = 0;
    humanClueCreate = () => {
      let a = $("<aside>")
        .addClass("clue" + e)
        .text("?");
      $(".humanClue").append(a),
        e++,
        changeEmogi(clueNumber - e),
        $(".guessCount").text(e + " chances"),
        e == clueNumber && stopInterval(s);
    };
    let s = setInterval(humanClueCreate, 250);
    stopInterval = (e) => {
      clearInterval(e);
    };
    for (let e = 0; e < splitSelections.length; e++) {
      let s = $("<kbd>")
        .addClass("keyboard")
        .text(splitSelections[e])
        .attr("data-key", splitSelections[e]);
      $(".keyboardKeys").append(s);
    }
    $(".keyboard").removeClass("avoid-clicks");
  }),
  $(document).on("click", ".keyboard", function (e) {
    let s = $(this).attr("data-key");
    splitSelections.includes(s) && matchThis(s, b);
  }),
  $(document.body).on("keyup", function (e) {
    let s = e.key.toUpperCase();
    splitSelections.includes(s) && matchThis(s, b);
  }),
  (matchThis = (e, s) => {
    splitSelections.splice(splitSelections.indexOf(e), 1),
      e === s ? win() : playAgain(e);
  }),
  (playAgain = (e) => {
    key < clueNumber - 1
      ? ($(".clue" + key).text(e),
        key++,
        changeEmogi(key),
        clueNumber - key != 1
          ? $(".guessCount").text(clueNumber - key + " chances")
          : $(".guessCount").text("last chance"))
      : ($(".clue" + key).text(e),
        changeEmogi(12),
        $(".guessCount").text("lost all chances"),
        loss());
  }),
  (changeEmogi = (e) => {
    $("#smilechange").removeClass(),
      1 == e
        ? $("#smilechange").addClass("fas fa-laugh iconSize text-success")
        : 2 == e
        ? $("#smilechange").addClass("fas fa-laugh-beam iconSize text-success")
        : 3 == e
        ? $("#smilechange").addClass("fas fa-grin-beam iconSize text-success")
        : 4 == e
        ? $("#smilechange").addClass("fas fa-grin-alt iconSize text-success")
        : 5 == e
        ? $("#smilechange").addClass("fas fa-grin iconSize text-success")
        : 6 == e
        ? $("#smilechange").addClass("fas fa-smile iconSize text-primary")
        : 7 == e
        ? $("#smilechange").addClass("fas fa-meh iconSize text-primary")
        : 8 == e
        ? $("#smilechange").addClass("fas fa-flushed iconSize text-primary")
        : 9 == e
        ? $("#smilechange").addClass("fas fa-frown iconSize text-primary")
        : 10 == e
        ? $("#smilechange").addClass("fas fa-angry iconSize text-danger")
        : 11 == e
        ? $("#smilechange").addClass("fas fa-frown-open iconSize text-danger")
        : 12 == e
        ? $("#smilechange").addClass("fas fa-tired iconSize text-danger")
        : $("#smilechange").addClass(
            "fas fa-laugh-squint iconSize text-success"
          );
  }),
  (win = () => {
    looser++,
      $(".compGuess").html(b).addClass("bg-warning text-dark"),
      $(".guessCount").text("done it").addClass("bg-success"),
      $("#smilechange")
        .removeClass()
        .addClass("fas fa-grin-stars iconSize text-dark"),
      $(".keyboard").addClass("avoid-clicks"),
      $(".looser").text(looser),
      setTimeout(() => reset(), 5e3);
  }),
  (loss = () => {
    winner++,
      $(".compGuess").html(b).addClass("bg-danger text-light"),
      $(".keyboard").addClass("avoid-clicks"),
      $(".winner").text(winner),
      setTimeout(() => reset(), 5e3);
  });

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/