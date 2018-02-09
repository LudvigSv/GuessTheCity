// variable for DOM
var totalRounds = 7;
var roundCounter = 0;
var score = 0;
var gameInfo = document.getElementById("game-info");
var scoreHeading = document.createElement("h2");
var scoreContent = document.createTextNode("Score: " + score);

var nextRoundTimer = document.createElement("h2");

// Next Rounds
var nextRoundCorrect = document.createTextNode("Correct!");
var nextRoundIncorrect = document.createTextNode("Incorrect!");

// Final Round
var finalRoundCorrect = document.createTextNode(
  "Correct! Game over, thanks for playing!"
);
var finalRoundIncorrect = document.createTextNode(
  "Incorrect! Game over, thanks for playing!"
);

// Time Up - Next
var timeNextRound = document.createTextNode(
  "Time's Up! Next round starts in 3 seconds."
);

// Time Up - Final
var timeFinalRound = document.createTextNode(
  "Time's Up! Congratulations on completing the game."
);

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

scoreHeading.appendChild(scoreContent);
gameInfo.appendChild(scoreHeading).style.textAlign = "center";

window.onload = startGame;
function startGame() {
  //   document.getElementById("start-game-button").onclick = function() {
  // content holders for clue 2 and 3
  clueTwo.innerHTML = "Clue #2 - appears when 20 seconds left!";
  clueThree.innerHTML = "Clue #3 - appears when 10 seconds left!";
  //Answer option arrays
  option1.innerHTML = answerArray[0][0];
  option2.innerHTML = answerArray[0][1];
  option3.innerHTML = answerArray[0][2];
  option4.innerHTML = answerArray[0][3];
  //   document.getElementById("start-game-button").disabled = true;
  // disable next round button when starting game
  document.getElementById("next-round-button").disabled = true;
  count = 31;

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
    } else if (count === 0) {
      document.getElementById("submit-answer").disabled = true;
      document.getElementById("next-round-button").disabled = false;

      // Display correct confirmation
      nextRoundTimer.appendChild(timeNextRound);
      gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

      // Automate next round
      setTimeout(function() {
        document.getElementById("next-round-button").click();
      }, 3000);
    }

    document.getElementById("submit-answer").onclick = function() {
      if (inputOptionD.checked) {
        clearInterval(counter);
        document.getElementById("next-round-button").disabled = false;
        //   window.alert("Correct Answer!");
        document.getElementById("submit-answer").disabled = true;

        // Add points to User's score based on timing
        if (count >= 20 && count <= 29) {
          // Add 100 points
          score += 100;
        } else if (count >= 10 && count <= 19) {
          // Add 50 points
          score += 50;
        } else if (count < 10 && count >= 1) {
          // Add 25 points
          score += 25;
        }

        // Display updated score each round
        scoreHeading.innerHTML = "Score: " + score;

        // Display correct confirmation
        nextRoundTimer.appendChild(nextRoundCorrect);
        gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

        // Automate next round
        setTimeout(function() {
          document.getElementById("next-round-button").click();
        }, 3000);
      } else {
        // Code to be run when User selects wrong option
        clearInterval(counter);
        document.getElementById("next-round-button").disabled = false;
        document.getElementById("submit-answer").disabled = true;
        //   window.alert("Incorrect! Correct answer is Paris");

        // Display updated score each round
        scoreHeading.innerHTML = "Score: " + score;

        // Display incorrect confirmation
        nextRoundTimer.appendChild(nextRoundIncorrect);
        gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

        // Automate next round
        setTimeout(function() {
          document.getElementById("next-round-button").click();
        }, 3000);
      }
    };
    // }
  }

  var nextRound = document.getElementById("next-round-button");
  // NEXT ROUND BUTTON - 2
  nextRound.onclick = function() {
    // Remove previous round information
    nextRoundTimer.innerHTML = "";

    console.log("button clicked");
    clueTwo.innerHTML = "Clue #2 - appears when 20 seconds left!";
    clueThree.innerHTML = "Clue #3 - appears when 10 seconds left!";
    //Answer option arrays
    option1.innerHTML = answerArray[1][0];
    option2.innerHTML = answerArray[1][1];
    option3.innerHTML = answerArray[1][2];
    option4.innerHTML = answerArray[1][3];
    document.getElementById("next-round-button").disabled = true;
    document.getElementById("submit-answer").disabled = false;

    count = 31;

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
        // document.getElementById("next-round-button").disabled = false;
      } else if (count === 0) {
        document.getElementById("submit-answer").disabled = true;
        document.getElementById("next-round-button").disabled = false;

        // Display correct confirmation
        nextRoundTimer.appendChild(timeNextRound);
        gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

        // Automate next round
        setTimeout(function() {
          document.getElementById("next-round-button").click();
        }, 3000);
      }

      document.getElementById("submit-answer").onclick = function() {
        if (
          inputOptionA.checked // === correctAnswerArray[0] //||
          //   option4 === correctAnswerArray[3]
        ) {
          clearInterval(counter);
          document.getElementById("next-round-button").disabled = false;
          //   window.alert("Correct Answer!");
          document.getElementById("submit-answer").disabled = true;
          // updating after 10 seconds

          if (count >= 20 && count <= 29) {
            // Add 100 points
            console.log((score += 100));
          } else if (count >= 10 && count <= 19) {
            // Add 50 points
            console.log((score += 50));
          } else if (count < 10 && count >= 1) {
            // Add 25 points
            console.log((score += 25));
          }

          // Display updated score each round
          scoreHeading.innerHTML = "Score: " + score;

          // Display correct confirmation
          nextRoundTimer.appendChild(nextRoundCorrect);
          gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

          // Automate next round
          setTimeout(function() {
            document.getElementById("next-round-button").click();
          }, 3000);
        } else {
          // Code to be run when User selects wrong option
          clearInterval(counter);
          document.getElementById("next-round-button").disabled = false;
          document.getElementById("submit-answer").disabled = true;
          //   window.alert("Incorrect! Correct Answer is Cape Town");

          // Display updated score each round
          scoreHeading.innerHTML = "Score: " + score;

          // Display incorrect confirmation
          nextRoundTimer.appendChild(nextRoundIncorrect);
          gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

          // Automate next round
          setTimeout(function() {
            document.getElementById("next-round-button").click();
          }, 3000);
        }
      };
    }

    // NEXT ROUND BUTTON - 3
    nextRound.onclick = function() {
      // Remove previous round information
      nextRoundTimer.innerHTML = "";

      clueTwo.innerHTML = "Clue #2 - appears when 20 seconds left!";
      clueThree.innerHTML = "Clue #3 - appears when 10 seconds left!";
      //Answer option arrays
      option1.innerHTML = answerArray[2][0];
      option2.innerHTML = answerArray[2][1];
      option3.innerHTML = answerArray[2][2];
      option4.innerHTML = answerArray[2][3];
      document.getElementById("next-round-button").disabled = true;
      document.getElementById("submit-answer").disabled = false;
      count = 31;

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
        } else if (count === 0) {
          document.getElementById("submit-answer").disabled = true;
          document.getElementById("next-round-button").disabled = false;

          // Display correct confirmation
          nextRoundTimer.appendChild(timeNextRound);
          gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

          // Automate next round
          setTimeout(function() {
            document.getElementById("next-round-button").click();
          }, 3000);
        }

        document.getElementById("submit-answer").onclick = function() {
          if (
            inputOptionA.checked // === correctAnswerArray[0] //||
            //   option4 === correctAnswerArray[3]
          ) {
            clearInterval(counter);
            document.getElementById("next-round-button").disabled = false;
            // window.alert("You have won!");
            document.getElementById("submit-answer").disabled = true;

            if (count >= 20 && count <= 29) {
              // Add 100 points
              console.log((score += 100));
            } else if (count >= 10 && count <= 19) {
              // Add 50 points
              console.log((score += 50));
            } else if (count < 10 && count >= 1) {
              // Add 25 points
              console.log((score += 25));
            }

            // Display updated score each round
            scoreHeading.innerHTML = "Score: " + score;

            // Display correct confirmation
            nextRoundTimer.appendChild(nextRoundCorrect);
            gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

            // Automate next round
            setTimeout(function() {
              document.getElementById("next-round-button").click();
            }, 3000);
          } else {
            // Code to be run when User selects wrong option
            clearInterval(counter);
            document.getElementById("next-round-button").disabled = false;
            document.getElementById("submit-answer").disabled = true;
            // window.alert("Incorrect! Correct Answer is Cape Town");

            // Display updated score each round
            scoreHeading.innerHTML = "Score: " + score;

            // Display incorrect confirmation
            nextRoundTimer.appendChild(nextRoundIncorrect);
            gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

            // Automate next round
            setTimeout(function() {
              document.getElementById("next-round-button").click();
            }, 3000);
          }
        };

        // NEXT ROUND BUTTON - 4
        nextRound.onclick = function() {
          // Remove previous round information
          nextRoundTimer.innerHTML = "";

          clueTwo.innerHTML = "Clue #2 - appears when 20 seconds left!";
          clueThree.innerHTML = "Clue #3 - appears when 10 seconds left!";
          //Answer option arrays
          option1.innerHTML = answerArray[3][0];
          option2.innerHTML = answerArray[3][1];
          option3.innerHTML = answerArray[3][2];
          option4.innerHTML = answerArray[3][3];
          document.getElementById("next-round-button").disabled = true;
          document.getElementById("submit-answer").disabled = false;
          count = 31;

          counter = setInterval(timer, 1000);

          function timer() {
            count = count - 1;
            if (count <= -1) {
              clearInterval(counter);
              // alert("finished");
              document.getElementById("next-round-button").disabled = false;
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
            } else if (count === 0) {
              document.getElementById("submit-answer").disabled = true;
              document.getElementById("next-round-button").disabled = false;

              // Display correct confirmation
              nextRoundTimer.appendChild(timeNextRound);
              gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

              // Automate next round
              setTimeout(function() {
                document.getElementById("next-round-button").click();
              }, 3000);
            }

            document.getElementById("submit-answer").onclick = function() {
              if (
                inputOptionB.checked // === correctAnswerArray[0] //||
                //   option4 === correctAnswerArray[3]
              ) {
                clearInterval(counter);
                document.getElementById("next-round-button").disabled = false;
                // window.alert("Correct Answer!");
                document.getElementById("submit-answer").disabled = true;
                // updating after 10 seconds

                if (count >= 20 && count <= 29) {
                  // Add 100 points
                  console.log((score += 100));
                } else if (count >= 10 && count <= 19) {
                  // Add 50 points
                  console.log((score += 50));
                } else if (count < 10 && count >= 1) {
                  // Add 25 points
                  console.log((score += 25));
                }

                // Display updated score each round
                scoreHeading.innerHTML = "Score: " + score;

                // Display correct confirmation
                nextRoundTimer.appendChild(nextRoundCorrect);
                gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

                // Automate next round
                setTimeout(function() {
                  document.getElementById("next-round-button").click();
                }, 3000);
              } else {
                // Code to be run when User selects wrong option
                clearInterval(counter);
                document.getElementById("next-round-button").disabled = false;
                document.getElementById("submit-answer").disabled = true;
                // window.alert("Incorrect! Correct Answer is Istanbul");

                // Display updated score each round
                scoreHeading.innerHTML = "Score: " + score;

                // Display incorrect confirmation
                nextRoundTimer.appendChild(nextRoundIncorrect);
                gameInfo.appendChild(nextRoundTimer).style.textAlign = "center";

                // Automate next round
                setTimeout(function() {
                  document.getElementById("next-round-button").click();
                }, 3000);
              }
            };

            // NEXT ROUND BUTTON - 5
            nextRound.onclick = function() {
              // Remove previous round information
              nextRoundTimer.innerHTML = "";

              clueTwo.innerHTML = "Clue #2 - appears when 20 seconds left!";
              clueThree.innerHTML = "Clue #3 - appears when 10 seconds left!";
              document.getElementById("submit-answer").disabled = false;
              document.getElementById("next-round-button").remove();

              count = 31;

              counter = setInterval(timer, 1000);

              function timer() {
                count = count - 1;
                if (count <= -1) {
                  clearInterval(counter);
                  // alert("finished");
                  document.getElementById("next-round-button").disabled = false;
                  return;
                }

                // ROUND 5
                document.getElementById("timer").innerHTML = count;
                roundNumber.innerHTML = roundArray[4];
                clueOne.innerHTML = clueArrayOne[4];
                //Answer option arrays
                option1.innerHTML = answerArray[4][0];
                option2.innerHTML = answerArray[4][1];
                option3.innerHTML = answerArray[4][2];
                option4.innerHTML = answerArray[4][3];

                // updating after 10 seconds
                if (count === 20) {
                  clueTwo.innerHTML = clueArrayTwo[4];
                } else if (count === 10) {
                  clueThree.innerHTML = clueArrayThree[4];
                } else if (count === 0) {
                  document.getElementById("submit-answer").disabled = false;
                  document.getElementById("next-round-button").disabled = false;

                  // Display correct confirmation
                  nextRoundTimer.appendChild(timeFinalRound);
                  gameInfo.appendChild(nextRoundTimer).style.textAlign =
                    "center";
                }
              }

              document.getElementById("submit-answer").onclick = function() {
                if (
                  inputOptionC.checked // === correctAnswerArray[0] //||
                  //   option4 === correctAnswerArray[3]
                ) {
                  clearInterval(counter);
                  //   document.getElementById("next-round-button").disabled = false;
                  //   window.alert("Correct Answer!");
                  document.getElementById("submit-answer").disabled = false;

                  if (count >= 20 && count <= 29) {
                    // Add 100 points
                    console.log((score += 100));
                  } else if (count >= 10 && count <= 19) {
                    // Add 50 points
                    console.log((score += 50));
                  } else if (count < 10 && count >= 1) {
                    // Add 25 points
                    console.log((score += 25));
                  }

                  // Display updated score each round
                  scoreHeading.innerHTML = "Score: " + score;

                  // Display correct confirmation
                  nextRoundTimer.appendChild(finalRoundCorrect);
                  gameInfo.appendChild(nextRoundTimer).style.textAlign =
                    "center";
                } else {
                  // Code to be run when User selects wrong option
                  clearInterval(counter);
                  //   document.getElementById("next-round-button").disabled = false;
                  document.getElementById("submit-answer").disabled = false;
                  //   window.alert("Incorrect! Correct Answer is Mumbai");

                  // Display updated score each round
                  scoreHeading.innerHTML = "Score: " + score;

                  // Display incorrect confirmation
                  nextRoundTimer.appendChild(finalRoundIncorrect);
                  gameInfo.appendChild(nextRoundTimer).style.textAlign =
                    "center";
                }
              };
            };
          }
        };
      }
    };
  };
}

var roundArray = [
  "A city in South America",
  "A city in Australia",
  "A city in North America",
  "A city in Eastern Europe",
  "A city in Asia"
  //   "Round 6 - A city somewhere in South America",
  //   "Round 7 - A city somewhere in Australia"
];

var clueArrayOne = [
  "Clue #1 - Is known as the Paris of South America",
  "Clue #1 - Actor: Gibson's: first name + Movie Character Jason: last name",
  "Clue #1 - A good place to drop the hook from the bow of your boat",
  "Clue #1 - Constantine the Great made this the capital of the Eastern Roman Empire in 306 AD ",
  "Clue #1 - This city is built on a group of 7 islands."
  //   "Clue #1 - The river Seine runs through the center of this city",
  //   "Clue #1 - This city is known as the Mother City",
];

var clueArrayTwo = [
  "Clue #2 - This city has more bookshops per capita than any other",
  "Clue #1 - Was originally going to be called Batmania",
  "Clue #2 - Approximately 250 black bears, and 60 grizzly bears live in this urban center",
  "Clue #2 - This city has the third oldest subway in the world, dating from 1875",
  'Clue #2 - British word for "mom" + teenage word for "bye"'
  //   "Clue #2 - Known as the city of lights",
  //   "Clue #3 - In Afrikaans this city is called: Kaapstad"
];
var clueArrayThree = [
  "Clue #3 - The most visited attraction is a graveyard called: Recoleta",
  "Clue #3 - This city has the highest number of cafes per capita in the world",
  "Clue #3 - The capital of the 49th state of the USA",
  'Clue #3 - The city where "East meets West"',
  "Clue #3 - The home of Bollywood"
  //   "Clue #3 - The designer of the Statue of Liberty was from this city",
  //   "Clue #3 - This city has a mountain with a flat peak and four legs",
];

var answerArray = [
  ["Bogota", "Santiago", "Sao Paolo", "Buenos Aires"],
  ["Melbourne", "Sydney", "Perth", "Brisbane"],
  ["Anchorage", "Portsmouth", "Seattle", "San Francisco"],
  ["Ankara", "Istanbul", "Athens", "Beirut"],
  ["New Dehli", "Dhaka", "Mumbai", "Kolkata"]
  //   ["Madrid", "Munich", "Milan", "Paris"],
  //   ["Dakar", "Cape Town", "Durban", "Maputo"]
];

var correctAnswerArray = [
  answerArray[0][3],
  answerArray[1][0],
  answerArray[2][0],
  answerArray[3][1],
  answerArray[4][2]
  //   answerArray[5][3],
  //   answerArray[6][0]
];
