var correctAnswers = 0;
var wrongAnswers = 0;


$("#submit-button").on("click", function () {

    var answersArray = ["B", "D", "A"];
    console.log(answersArray);

    var responsesArray = [
        $("input[name=answer0]:checked").val(),
        $("input[name=answer1]:checked").val(),
        $("input[name=answer2]:checked").val()
    ]
    console.log(responsesArray);

    for (i = 0; i < answersArray.length; i++) {
        intinitalAnswers();

        if (answersArray[i] === responsesArray[i]) {

            correctAnswers += 1;

            $("#correct-answers").html("Correct:" + correctAnswers);

        }
        if (answersArray[i] !== responsesArray[i]) {
            wrongAnswers += 1

            $("#wrong-answers").html("Wrong:" + wrongAnswers);
        }
    }

    hide();

});

var timeRemaining = 30;
$("#time-remaining").text("Time Remaining:" + timeRemaining);
var countDown;

function run() {
    clearInterval(countDown);
    $("#submit-button").show();
    countDown = setInterval(timer, 1000);
}

function timer() {

    timeRemaining--;

    $("#time-remaining").text("Time Remaining:" + timeRemaining);

    $("#submit-button").on("click", stop)



    
    if (timeRemaining === 0) {

        alert("TIME'S UP!!!");

        var answersArray = ["B", "D", "A"];
        console.log(answersArray);

        var responsesArray = [
            $("input[name=answer0]:checked").val(),
            $("input[name=answer1]:checked").val(),
            $("input[name=answer2]:checked").val()
        ]
        console.log(responsesArray);

        for (i = 0; i < answersArray.length; i++) {

            intinitalAnswers();

            if (answersArray[i] === responsesArray[i]) {

                correctAnswers += 1;

                $("#correct-answers").html("Correct:" + correctAnswers);

            }
            if (answersArray[i] !== responsesArray[i]) {
                wrongAnswers += 1

                $("#wrong-answers").html("Wrong:" + wrongAnswers);
            }
        }

        hide();
        stop();
    }
}

function stop() {
    clearInterval(countDown);
}

function intinitalAnswers() {
    $("#correct-answers").html("Correct:" + correctAnswers);
    $("#wrong-answers").html("Wrong:" + wrongAnswers);
}

function hide() {
    $("#time-remaining").hide();
    $("#submit-button").hide();
    $("#trivia-questions").hide();
}

run();