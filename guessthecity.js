// variable for DOM
var totalRounds = 7;
var roundCounter = 0;
var roundNumber = document.getElementById("roundNumber");
var nextRound = document.getElementById("next-round-button");
var clueOne = document.getElementById("clueOne");
var clueTwo = document.getElementById("clueTwo");
var clueThree = document.getElementById("clueThree");
var submit = document.getElementById("submit-answer");
var option1 = document.getElementById("radio-btn0");
var option2 = document.getElementById("radio-btn1");
var option3 = document.getElementById("radio-btn2");
var option4 = document.getElementById("radio-btn3");
var inputOptionA = document.getElementById("radio-btnA");
var inputOptionB = document.getElementById("radio-btnB");
var inputOptionC = document.getElementById("radio-btnC");
var inputOptionD = document.getElementById("radio-btnD");

// click functions be in here, yo

window.onload = startGame;
function startGame() {
  document.getElementById("start-game-button").onclick = function() {
    // content holders for clue 2 and 3
    clueTwo.innerHTML = "Clue #2 - appears in <b>10 seconds!</b>";
    clueThree.innerHTML = "Clue #3 - appears in <b>20 seconds!</b>";
    //Answer option arrays
    option1.innerHTML = answerArray[0][0];
    option2.innerHTML = answerArray[0][1];
    option3.innerHTML = answerArray[0][2];
    option4.innerHTML = answerArray[0][3];
    document.getElementById("start-game-button").disabled = true;
    // disable next round button when starting game
    document.getElementById("next-round-button").disabled = true;
    count = 30;

    counter = setInterval(timer, 1000);

    function timer() {
      count = count - 1;
      if (count <= -1) {
        clearInterval(counter);
        // alert("finished");
        return;
      }

      document.getElementById("timer").innerHTML = count;

      // updating Round once button is clicked
      roundNumber.innerHTML = roundArray[0];

      clueOne.innerHTML = clueArrayOne[0];

      if (count === 20) {
        clueTwo.innerHTML = clueArrayTwo[0];
      } else if (count === 10) {
        clueThree.innerHTML = clueArrayThree[0];
        // document.getElementById("next-round-button").disabled = false;
      }

      document.getElementById("submit-answer").onclick = function() {
        if (
          inputOptionD.checked // === correctAnswerArray[0] //||
          //   option4 === correctAnswerArray[3]
        ) {
          clearInterval(counter);
          document.getElementById("next-round-button").disabled = false;
          window.alert("You have won!");
          // updating after 10 seconds
        }
      };
    }
  };

  var nextRound = document.getElementById("next-round-button");
  // NEXT ROUND BUTTON - 2
  nextRound.onclick = function() {
    console.log("button clicked");
    clueTwo.innerHTML = "Clue #2 - appears in 10 seconds!";
    clueThree.innerHTML = "Clue #3 - appears in 20 seconds!";

    document.getElementById("next-round-button").disabled = true;

    count = 30;

    counter = setInterval(timer, 1000);

    function timer() {
      count = count - 1;
      if (count <= -1) {
        clearInterval(counter);
        // alert("finished");
        document.getElementById("next-round-button").disabled = false;
        return;
      }
      // ROUND 2
      document.getElementById("timer").innerHTML = count;
      roundNumber.innerHTML = roundArray[1];
      clueOne.innerHTML = clueArrayOne[1];

      // updating after 10 seconds
      if (count === 20) {
        clueTwo.innerHTML = clueArrayTwo[1];
      } else if (count === 10) {
        clueThree.innerHTML = clueArrayThree[1];

        // NEXT ROUND BUTTON - 3
        nextRound.onclick = function() {
          clueTwo.innerHTML = "Clue #2 - appears in 10 seconds!";
          clueThree.innerHTML = "Clue #3 - appears in 20 seconds!";
          document.getElementById("next-round-button").disabled = true;
          count = 30;

          counter = setInterval(timer, 1000);

          function timer() {
            count = count - 1;
            if (count <= -1) {
              clearInterval(counter);
              // alert("finished");
              document.getElementById("next-round-button").disabled = false;
              return;
            }

            // ROUND 3
            document.getElementById("timer").innerHTML = count;
            roundNumber.innerHTML = roundArray[2];
            clueOne.innerHTML = clueArrayOne[2];

            // updating after 10 seconds
            if (count === 20) {
              clueTwo.innerHTML = clueArrayTwo[2];
            } else if (count === 10) {
              clueThree.innerHTML = clueArrayThree[2];

              // NEXT ROUND BUTTON - 4
              nextRound.onclick = function() {
                clueTwo.innerHTML = "Clue #2 - appears in 10 seconds!";
                clueThree.innerHTML = "Clue #3 - appears in 20 seconds!";
                document.getElementById("next-round-button").disabled = true;
                count = 30;

                counter = setInterval(timer, 1000);

                function timer() {
                  count = count - 1;
                  if (count <= -1) {
                    clearInterval(counter);
                    // alert("finished");
                    document.getElementById(
                      "next-round-button"
                    ).disabled = false;
                    return;
                  }

                  // ROUND 4
                  document.getElementById("timer").innerHTML = count;
                  roundNumber.innerHTML = roundArray[3];
                  clueOne.innerHTML = clueArrayOne[3];

                  // updating after 10 seconds
                  if (count === 20) {
                    clueTwo.innerHTML = clueArrayTwo[3];
                  } else if (count === 10) {
                    clueThree.innerHTML = clueArrayThree[3];
                    // NEXT ROUND BUTTON - 5
                    nextRound.onclick = function() {
                      clueTwo.innerHTML = "Clue #2 - appears in 10 seconds!";
                      clueThree.innerHTML = "Clue #3 - appears in 20 seconds!";
                      document.getElementById(
                        "next-round-button"
                      ).disabled = true;
                      count = 30;

                      counter = setInterval(timer, 1000);

                      function timer() {
                        count = count - 1;
                        if (count <= -1) {
                          clearInterval(counter);
                          // alert("finished");
                          document.getElementById(
                            "next-round-button"
                          ).disabled = false;
                          return;
                        }

                        // ROUND 5
                        document.getElementById("timer").innerHTML = count;
                        roundNumber.innerHTML = roundArray[4];
                        clueOne.innerHTML = clueArrayOne[4];

                        // updating after 10 seconds
                        if (count === 20) {
                          clueTwo.innerHTML = clueArrayTwo[4];
                        } else if (count === 10) {
                          clueThree.innerHTML = clueArrayThree[4];
                        }
                      }
                    };
                  }
                }
              };
            }
          }
        };
      }
    }
  };

  var radioBtnZero = document.getElementById("radio-btn0");
  var radioBtnOne = document.getElementById("radio-btn1");
  var radioBtnTwo = document.getElementById("radio-btn2");
  var radioBtnThree = document.getElementById("radio-btn3");

  // correctAnswerArray.forEach(function(radioBtnZero) {
  //   console.log(correctAnswerArray);
  // });

  // var sumbitAnswer = document.getElementById("submit-answer");
  // var finalScore = 0;
  // finalScore.getElementById("finalScore").innerHTML = pointsCounter;

  // var pointsCounter = 0;

  // for (var i = 0; i <= correctAnswerArray.length; i++) {
  //   radioBtnZero.innerHTML = correctAnswerArray[i];
  // }

  // sumbitAnswer.onclick = function() {
  //   if (correctAnswerArray === true && timer > 20) {
  //     pointsCounter += 15;
  //   } else if (correctAnswerArray === true && timer > 10) {
  //     pointsCounter += 10;
  //   } else if (correctAnswerArray === true && timer > 1) {
  //     pointsCounter += 5;
  //   }
  // };

  var roundArray = [
    "Round 1 - A city somewhere in Western Europe",
    "Round 2 - A city somewhere in Africa",
    "Round 3 - A city somewhere in North America",
    "Round 4 - A city somewhere in Eastern Europe",
    "Round 5 - A city somewhere in Asia",
    "Round 6 - A city somewhere in South America",
    "Round 7 - A city somewhere in Australia"
  ];

  var clueArrayOne = [
    "Clue #1 - The Designer of the Statue of Libery was from this city",
    "Clue #1 - This city has a mountain with a flat peak and four legs",
    "Clue #1 - A good place to drop the hook from the bow of your boat",
    "Clue #1 - Constantine the Great made this the capital of the Eastern Roman Empire in 306 AD ",
    "Clue #1 - This city is built on a group of 7 islands.",
    "Clue #1 - This city has more bookshops per capital than any other",
    "Clue #1 - Was originally going to be called Batmania"
  ];

  var clueArrayTwo = [
    "Clue #2 - The river Seine runs through the center of this city",
    "Clue #2 - If you're traveling from the Indian Ocean to the Atlantic Ocean by boat, you would pass this city",
    "Clue #2 - Approximately 250 black bears, and 60 grizzly bears live in this urban center",
    "Clue #2 - This city has the third oldest subway in the world, dating from 1875",
    'Clue #2 - British word for "mom" + teenage word for "bye"',
    "Clue #2 - Its most visited attraction is a graveyard called: Recoleta",
    "Clue #2 - This city has the highest number of cafes per capita in the world"
  ];
  var clueArrayThree = [
    "Clue #3 - Known as the City of Light",
    "Clue #3 - In Afrikaans this city is called: Kaapstad",
    "Clue #3 - The capital of the 49th state of the USA",
    'Clue #3 - The city where "East meets West"',
    "Clue #3 - The home of Bollywood",
    "Clue #3 - Is known as the Paris of South America",
    "Clue #3 - Actor Gibson's: first name + Movie Character Jason: last name"
  ];

  var answerArray = [
    ["London", "Madrid", "Munich", "Paris"],
    ["Dakar", "Cape Town", "Durban", "Maputo"],
    ["Portsmouth", "Anchorage", "Seattle", "San Francisco"],
    ["Istanbul", "Ankara", "Athens", "Beirut"],
    ["New Dehli", "Dhaka", "Mumbai", "Kolkata"],
    ["Sao Paolo", "Montevideo", "Santiago", "Buenos Aires"],
    ["Melbourne", "Sydney", "Perth", "Brisbane"]
  ];

  // var correctAnswerArray = [
  //   answerArray[0][3],
  //   answerArray[1][1],
  //   answerArray[2][1],
  //   answerArray[3][0],
  //   answerArray[4][2],
  //   answerArray[5][3],
  //   answerArray[6][0]
  // ];

  var correctAnswerArray = [
    answerArray[0][3],
    answerArray[1][1],
    answerArray[2][1],
    answerArray[3][0],
    answerArray[4][2],
    answerArray[5][3],
    answerArray[6][0]
  ];
}