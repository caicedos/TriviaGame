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
        if (answersArray[i] === responsesArray[i]) {

            $("#correct-answers").html(correctAnswers += 1);

        } else if (answersArray[i] !== responsesArray[i]) {
            $("#wrong-answers").html(wrongAnswers += 1);
        }
    }
});

var timeRemaining = 15;
$("#time-remaining").text(timeRemaining);
var countDown;

function run() {
    clearInterval(countDown);
    $("#submit-button").show();
    countDown = setInterval(timer, 1000);
}

function timer() {

    timeRemaining--;

    $("#time-remaining").text(timeRemaining);

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
            if (answersArray[i] === responsesArray[i]) {

                $("#correct-answers").html(correctAnswers += 1);

            } else if (answersArray[i] !== responsesArray[i]) {
                $("#wrong-answers").html(wrongAnswers += 1);
            }
        }

        $("#submit-button").hide();

        stop();
    }
}

function stop() {
    clearInterval(countDown);

}

run();