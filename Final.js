const prompt = require("prompt-sync")({ sigint: true });
//Problem to solve: I hate manually grading


let correctQ = 0; //After user takes the test this will get updated depenging on how many questions user gets right
let correctAnswers = ["D","B","A","D","C","A","B","A"]; //The answer key for the test
let userAnswers = []; //This will get updated after the test and have the user's answers

class TestResult{ //This class will get the user's results and tell the percentage and letter grade of it and tell if the grade is passing or not
    constructor(result){
    let calResult = (result / 8) * 100; //Depending on results this could be a float or integer and this var is only for the if statments
    this.result = (result / 8) * 100; //The percentage of the test 
    if(calResult <= 59){
        this.letterGrade = "F.";
        this.isPassing = false;
    } else if(calResult >= 60 && calResult < 70){
        this.letterGrade = "D.";
        this.isPassing = true;
    } else if(calResult >= 70 && calResult < 80){
        this.letterGrade = "C.";
        this.isPassing = true;
    } else if(calResult >= 80 && calResult < 90){
        this.letterGrade = "B.";
        this.isPassing = true;
    } else {
        this.letterGrade = "A.";
        this.isPassing = true;
    }
    }        
}


function test(){ // Function for the test, user answers questions and if there response isn't valid for answering they have to redo their Answer
    console.log("What time does odd day caps start?");
    let a1 = prompt("A) 7:00am B) 7:45am C) 8:00am D) 7:30am ");
    while(true){//The while loops is to make sure the user puts in a valid answer
        if(a1 === "A" || a1 === "B" || a1 === "C" || a1 === "D"){
            break;
        }
        a1 = prompt("A) 7:00am B) 7:45am C) 8:00am D) 7:30am ");
    }
    userAnswers.push(a1); //The push is to add the user's answers into an array
    console.log("What time does even day caps start?")
    let a2 = prompt("A) 7:00am B) 7:45am C) 8:00am D) 7:30am ");
    while(true){
        if(a2 === "A" || a2 === "B" || a2 === "C" || a2 === "D"){
            break;
        }
        a2 = prompt("A) 7:00am B) 7:45am C) 8:00am D) 7:30am ");
    }
    userAnswers.push(a2);
    console.log("What is Jason's personal project?");
    let a3 = prompt("A) Alarm B) Video Game C) Event Planner D) Web site ");
    while(true){
        if(a3 === "A" || a3 === "B" || a3 === "C" || a3 === "D"){
            break;
        }
        a3 = prompt("A) Alarm B) Video Game C) Event Planner D) Web site ");
    }
    userAnswers.push(a3);
    console.log("What's Arsalan's personal project?");
    let a4 = prompt("A) Alarm B) Web site C) Telescope D) Remote Controller for telescope ");
    while(true){
        if(a4 === "A" || a4 === "B" || a4 === "C" || a4 === "D"){
            break;
        }
        a4 = prompt("A) Alarm B) Web site C) Telescope D) Remote Controller for telescope ");
    }
    userAnswers.push(a4);
    console.log("What's Jaiden's personal project?");
    let a5 = prompt("A) Platformer Game B) Open World Game C) Pirate Game D) Space Game ");
    while(true){
        if(a5 === "A" || a5 === "B" || a5 === "C" || a5 === "D"){
            break;
        }
        a5 = prompt("A) Platformer Game B) Open World Game C) Pirate Game D) Space Game ");
    }
    userAnswers.push(a5);
    console.log("What was Jason's name of his app for Congressional App Challenge?");
    let a6= prompt("A) Debris Collector B) Space Collector C) Trash Collector D) Space Cleaner ");
    while(true){
        if(a6 === "A" || a6 === "B" || a6 === "C" || a6 === "D"){
            break;
        }
        a6 = prompt("A) Debris Collector B) Space Collector C) Trash Collector D) Space Cleaner ");
    }
    userAnswers.push(a6);
    console.log("What day do we make to do's list?");
    let a7 = prompt("A) Monday B) Tuesday C) Wednesday D) Thursday");
    while(true){
        if(a7 === "A" || a7 === "B" || a7 === "C" || a7 === "D"){
            break;
        }
        a7 = prompt("A) Monday B) Tuesday C) Wednesday D) Thursday");
    }
    userAnswers.push(a7);
    console.log("What days do we do weekly summary?");
    let a8 = prompt("A) Friday B) Thursday C) Wednesday D) Tuesday");
    while(true){
        if(a8 === "A" || a8 === "B" || a8 === "C" || a8 === "D"){
            break;
        }
        a8 = prompt("A) Friday B) Thursday C) Wednesday D) Tuesday");
    }
    userAnswers.push(a8);
    console.log(userAnswers);

}

test();

let userResults; // global var that will be user for TestResult Class

function testGrader(){ //Function that has a for loop for grading the test
for(let i = 0; i < userAnswers.length; i++){
    if(userAnswers[i] === correctAnswers[i]){
        correctQ++;
    }
}
userResults = new TestResult(correctQ);//The class will use correctQ for the results
}

testGrader();

console.log("These are your test results, you got " + correctQ + " out of 8, percentage wise: " + userResults.result + "%" + " and the letter grade for that is " + userResults.letterGrade);
console.log("Did the user pass the test: " + userResults.isPassing);