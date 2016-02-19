var User = function(name, email) {
    this.name = name;
    this.email = email;
    this.quizScores = [];
    this.currentScore = 0;
}
//public methods
User.prototype = {
    constructor: User,
    saveScore: function(score) {
        this.quizScores.push(score);
    },
    displayScore: function() {
        var scores = this.quizScores.length > 0 ? this.quizScores : "No Score";
        return this.name + " Scores " + scores;
    }
}
var user1 = new User("Anu", "anumathew@gmail.com");
user1.saveScore(10);
var score = user1.displayScore();
console.log(score);
var user2 = new User("Anju", "anjuseban@gmail.com");
user2.saveScore(20);
var score = user2.displayScore();
console.log(score);
//Encapsulates data and methods
var Question = function(question, choices, crtAns) {
    this.question = question;
    this.choices = choices;
    this.crtAns = crtAns;
    this.userAnswer = "";
    //private variable
    var quizDate = new Date().toLocaleDateString();
    //privileged method
    this.getQuizDate = function() {
        return quizDate;
    };
    console.log(this.getQuizDate());
}
Question.prototype.getCorrectAnswer = function() {
    return this.crtAns;
};
Question.prototype.getUserAnswer = function() {
    return this.userAnswer;
};
Question.prototype.displayQuestion = function() {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
    choiceCounter = 0;
    this.choices.forEach(function(eachChoice) {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += "</ul>"
    console.log(questionToDisplay[0]);
   document.getElementById("demo").innerHTML = questionToDisplay;
   //document.getElementById("demo").innerHTML = questionToDisplay;
};
//inherits from Question
var SMCQuestion = function(question, choices, crtAns) {
    Question.call(this, question, choices, crtAns);
};
SMCQuestion.prototype = new Question();
//inherits from Question
var MMCQuestion = function(question, choices, crtAns) {
    Question.call(this, question, choices, crtAns);
};
MMCQuestion.prototype = new Question();
var allQuestions = [new SMCQuestion("Who is the prime minister of England?", ["Tony Blair", "David Cameron", "John Major"], 2),new SMCQuestion("Which is the Capital of Canada?",["Toronto", "Ottawa","Vancouver" ], 2)];
allQuestions.forEach(function(eachQuestion) {
    eachQuestion.displayQuestion();
});
