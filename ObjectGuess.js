var theGame = [
  {
    roundOne: {
      title: "Round 1 - A city somewhere in Western Europe",
      clues: [
        "Clue #1 - The Designer of the Statue of Libery was from this city",
        "Clue #2 - The river Seine runs through the center of this city",
        "Clue #3 - Known as the City of Light"
      ],
      answers: ["London", "Madrid", "Munich", "Paris"],
      correctAnswer: "Paris"
    }
  },
  {
    roundTwo: {
      title: "Round 2 - A city somewhere in Africa",
      clues: [
        "Clue #1 - This city has a mountain with a flat peak and four legs",
        "Clue #2 - If you're traveling from the Indian Ocean to the Atlantic Ocean by boat, you would pass this city",
        "Clue #3 - In Afrikaans this city is called: Kaapstad"
      ],
      answers: ["Dakar", "Cape Town", "Durban", "Maputo"],
      correctAnswer: "Cape Town"
    }
  },
  {
    roundThree: {
      title: "Round 3 - A city somewhere in North America",
      clues: [
        "Clue #1 - A good place to drop the hook from the bow of your boat",
        "Clue #2 - Approximately 250 black bears, and 60 grizzly bears live in this urban center",
        "Clue #3 - The capital of the 49th state of the USA"
      ],
      answers: ["Portsmouth", "Anchorage", "Seattle", "San Francisco"],
      correctAnswer: "Anchorage"
    }
  },
  {
    roundFour: {
      title: "Round 4 - A city somewhere in Eastern Europe",
      clues: [
        "Clue #1 - Constantine the Great made this the capital of the Eastern Roman Empire in 306 AD ",
        "Clue #2 - This city has the third oldest subway in the world, dating from 1875",
        'Clue #3 - The city where "East meets West"'
      ],
      answers: ["Istanbul", "Ankara", "Athens", "Beirut"],
      correctAnswer: "Istanbul"
    }
  },
  {
    roundFive: {
      title: "Round 5 - A city somewhere in Asia",
      clues: [
        "Clue #1 - This city is built on a group of 7 islands.",
        'Clue #2 - British word for "mom" + teenage word for "bye"',
        "Clue #3 - The home of Bollywood"
      ],
      answers: ["New Dehli", "Dhaka", "Mumbai", "Kolkata"],
      correctAnswers: "Mumbai"
    }
  }
];

// var roundCounter = 1;

// for (var round in theGame) {
//   roundCounter++;
//   if (counter === 1) {
//     console.log(data[prop].title);
//   } else console.log("no not yet");
// }

var startButton = $("#start-game-button");
startButton.click(function() {
  viewHandler.startGame();
  viewHandler.theTimer();

  //   var nextButton = $("#next-round-button");
  // startButton.click(function() {
  //   viewHandler.startGame();
  //   viewHandler.theTimer();
});

var viewHandler = {
  startGame: function() {
    $("#roundNumber").html(theGame.roundOne.title);
    $("#cluesOne").html(theGame.roundOne.clues[0]);
    $("#clueTwo").html(theGame.roundTwo.clues[1]);
    $("#clueThree").html(theGame.roundThree.clues[2]);

    $("#radio-btn0").html(theGame.roundOne.answers[0]);
    $("#radio-btn1").html(theGame.roundOne.answers[1]);
    $("#radio-btn2").html(theGame.roundOne.answers[2]);
    $("#radio-btn3").html(theGame.roundOne.answers[3]);
  },

  theTimer: function() {
    count = 30;

    counter = setInterval(timer, 1000);
    function timer() {
      count = count - 1;
      $("#timer").html(count);

      if (count === 29) {
        clues[1];
      } else if (count === 20) {
        console.log("Clue #2");
      } else if (count === 10) {
        console.log("Clue #3");
      } else if (count <= -0) {
        clearInterval(counter);
      }
    }
  }
};

//   for (var round in theGame) {

//   if (counter === 0) {
//     $("next-round-button").html(data[prop].title);
//   } else console.log("no not yet");
//     }

//    click on the answer radio btn and match the array option with the correct answer option

// Timer Function

// timer = function(){

// }
// var theTimer {
// count = 30

//   counter = setInterval(timer, 1000);

//   function timer() {
//     count = count - 1;
//     if (count <= -1) {
//       clearInterval(counter);
//     };

// // Total Score Counter Function
// var totalScore{
// points = function() {
//    for (i = 0; i <= theGame.length; i++)
//    if theGame[i] === true
// }
// }
