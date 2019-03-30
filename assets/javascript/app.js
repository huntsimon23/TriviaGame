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

var quest2 = {
    question: "What is Pepper Potts' real name?",
    a: "Veronica Potter",
    b: "Virginia Potts",
    c: "Veronica Potts",
    d: "It’s just Pepper Potts",
    x: $("btn-b").data('clicked'),
    answer: "Virginia Potts",
};

var quest3 = {
    question: "How long was Captain America asleep?",
    a: "69 years",
    b: "70 years",
    c: "65 years",
    d: "58 years",
    x: $("btn-c").data('clicked'),
    answer: "65 years",
};

var quest4 = {
    question: "Who found the Tesseract?",
    a: "Odin",
    b: "Howard Stark",
    c: "Loki",
    d: "Nick Fury",
    x: $("btn-b").data('clicked'),
    answer: "Howard Stark",
};

var quest5 = {
    question: "Who destroyed Thor’s hammer?",
    a: "Captain America",
    b: "Odin",
    c: "Hela",
    d: "Vision",
    x: $("btn-c").data('clicked'),
    answer: "Hela",
};

var quest6 = {
    question: "What is the name of Scott Lang’s daughter?",
    a: "Jenny",
    b: "Cassie",
    c: "Cassy",
    d: "Maddie",
    x: $("btn-b").data('clicked'),
    answer: "Cassie",
};

var quest7 = {
    question: "Where does Steve Rogers come from?",
    a: "Soho",
    b: "Brooklyn",
    c: "Manhattan",
    d: "Queens",
    x: $("btn-b").data('clicked'),
    answer: "Brooklyn",
};

var questArray = [quest1, quest2, quest3, quest4, quest5, quest6, quest7];

function startGame() {
console.log("Game Start" + i);
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
        console.log("nextQuest" + i)
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
    console.log("endGame" + i)
    clearTimeout
    $(".ans").text("");
    $("#question-text").text("Oh snap.  You got " + ansTally + " correct, which means you got " + (questArray.length - ansTally) + " wrong.  As the Strange Doctor says, we are in the endGame now.  Press the button below to play again.  It's like the time-loop when he defeated Dormamu...");
}
$("#start-game").on('click', function () {
    startGame();
});
});

