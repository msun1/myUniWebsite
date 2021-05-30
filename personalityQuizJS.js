//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var cheerfulScore = 0;
var intelligentScore = 0;
var charmingScore = 0;
var introvertedScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");
var description = document.getElementById("description");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Cheerful);
q1a2.addEventListener("click", Intelligent);
q1a3.addEventListener("click", Charming);
q1a4.addEventListener("click", Introverted);

q2a1.addEventListener("click", Introverted);
q2a2.addEventListener("click", Charming);
q2a3.addEventListener("click", Intelligent);
q2a4.addEventListener("click", Cheerful);

q3a1.addEventListener("click", Cheerful);
q3a2.addEventListener("click", Intelligent);
q3a3.addEventListener("click", Charming);
q3a4.addEventListener("click", Introverted);

q4a1.addEventListener("click", Cheerful);
q4a2.addEventListener("click", Charming);
q4a3.addEventListener("click", Intelligent);
q4a4.addEventListener("click", Introverted);

q5a1.addEventListener("click", Cheerful);
q5a2.addEventListener("click", Intelligent);
q5a3.addEventListener("click", Charming);
q5a4.addEventListener("click", Introverted);

restart.addEventListener("click", resetQuiz);

//#TODO: Define quiz functions here
function Cheerful() {
  cheerfulScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
};

function Intelligent() {
  intelligentScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
};

function Charming() {
  charmingScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function Introverted() {
  introvertedScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
};

function updateResult() {
  if (cheerfulScore >= 2) {
    result.innerHTML = "Your personality is cheerful!";
    description.innerHTML =
      "You are kind, considerate, and always wanting to put a smile on everyone's face. If others are not in a good mood, you are not in a good mood either. You are always looking on the bright side of every situation with an optimistic point of view and in sync with how other people feel!";
  } else if (intelligentScore >= 2) {
    result.innerHTML = "Your personality is intelligent!";
    description.innerHTML =
      "You are curious, a fast learner, and open minded to new ideas and opportunities. You are always looking for new ways to solve problems and reflecting on your past mistakes to avoid new ones in the future. You are always using your mind to the fullest extent, but also not too stiff to enjoy a good laugh every once in a while!";
  } else if (charmingScore >= 2) {
    result.innerHTML = "Your personality is charming!";
    description.innerHTML =
      "You are confident, energetic, and have a flambouyant persona that cannot be ignored. You're very popular and always feel the need for attention. You can talk to anyone about anything and be yourself without caring about what other people think about you. There is never a dull moment when you are around!";
  } else if (introvertedScore >= 2) {
    result.innerHTML = "Your personality is introverted!";
    description.innerHTML =
      "You are shy, sensitive, and have a wide imagination. You try to avoid social activities as much as possible, and you perfer to have a small, close circle of friends. You also don't like to talk, but you feel more comfortable expressing your own thoughts and feelings on paper. There's norhing you enjoy more than sitting on your bed reading a good book!";
  } else {
    result.innerHTML =
      "You seem to be a person with multiple personalities. There is no one way to describe you!";
    description.innerHTML =
      "You can get along with almost anyone without having them feel uncomfortable around you. Anyone can tolerate you, and you try to avoid confrontation as much as possible. On top of that, you are a very easy person to talk to and careful in your choice of words. You're always willing to give a helping hand and undestanding of other people!";
  }
}

function resetQuiz(){
    result.innerHTML = "Your result is...";
    description.innerHTML = "What could it be?";
    cheerfulScore = 0;
    intelligentScore = 0;
    charmingScore = 0;
    introvertedScore = 0;
    questionCount = 0;
  
    if (questionCount >= 0) {
      questionCount = 0;
   }
}