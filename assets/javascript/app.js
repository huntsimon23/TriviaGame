$(document).ready(function(){

var ansTally = 0;
var i = 0;

var quest1 = {
    question: "What is Sharon Carter's code name?",
    a: "Agent 12",
    b: "Agent 13",
    c: "Sharon 13",
    d: "Agent 18",
    x: $("btn-b").data('clicked'),
    answer: "Agent 13",
};

var quest2 = [];
var questArray = [quest1, quest2];

function startGame() {
console.log("Game Start");
$(".ans").text("");
ansTally = 0;
i = 0;
nextQuest();
};

function layout() {
    $("#quesion-text").text(this.question);
    $("#btn-a").text(this.a);
    $("#btn-b").text(this.b);
    $("#btn-c").text(this.c);
    $("#btn-d").text(this.d);
};

function correct() {
    $("#question-text").text(this.answer + " is correct!"); 
    ansTally++;
    $("#score-text").text(ansTally);
    setTimeout(nextQuest(), 3000);
};

function incorrect() {
    $("#question-text").text("Incorrect. It is " + this.answer);
    setTimeout(nextQuest(), 3000);
};

function timeup() {
    $("#question-text").text("Slowpoke. It is " + this.answer);
    setTimeout(nextQuest(), 3000);
};

function eval() {
    if (this.x) {
        correct(this);
    } else if ($(".ans").data('clicked')) {
        incorrect(this);
    } else {
        timeup(this);};
};

function nextQuest() {
        $(".ans").text("");
        layout(questArray[i]);
        setTimeout(function() {
            eval(questArray[i]);
        }, 7000);
        i++;
        if (i === questArray.length) {
            endGame();
        }
    };

function endGame() {
    $(".ans").text("");
    $("#question-text").text("Oh snap.  You got " + ansTally + " correct, which means you got " + (questArray.length - ansTally) + " wrong.  As the Strange Doctor says, we are in the endGame now.  Press the button below to play again.  It's like the time-loop when he defeated Dormamu...");
}
$("#start-game").on('click', function () {
    startGame();
});
});

