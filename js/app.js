"use strict";

// Functions
function promptUser(message) {
  return prompt(message);
}

//check age 
function isAgeValid(age) {
  return age > 10;
}

//display message
function alertUser(message) {
  alert(message);
}

//show welcoming message
function displayWelcomeMessage(name, gender) {
  var title = "";

        if (gender === "male") {
            title = "Mr.";
        } else if (gender === "female") {
            title = "Ms.";
        }

  alertUser("Welcome, " + (title || "") + " " + name);
}


    var name = promptUser("Enter your name here:");

    var gender = promptUser("Enter your gender here (male or female):");

    var age = promptUser("Enter your age here:");

        if (!isAgeValid(age)) {
        alertUser("Invalid age. Please enter a valid age.");
        }

    var skipWelcomeMessage = confirm("Do you want to skip the welcoming message?");

            if (!skipWelcomeMessage) {
            displayWelcomeMessage(name, gender);
            }

//phase 2
//yes no quetsions function
function askYesNoQuestion(question) {
    var answer = prompt(question);
    if (answer === null || answer === "") {
        return "Invalid";
      } else {
        return answer;
     } 
    }
     
        var question1 = askYesNoQuestion ("Question 1: Do you usually keep track of your daily tasks? (Yes/No)");
        var question2 = askYesNoQuestion  ("Question 2: Have you ever used a to do list? (Yes/No)");
        var question3 = askYesNoQuestion ("Question 3: Do you think a to do list will make you more productive? (Yes/No)");
  
            answers.push(question1);
            answers.push(question2);
            answers.push(question3);

                var answers = [];
  
  answers.forEach (function(answer, index) 
  {
    console.log("Question " + (index + 1) + ":" + answer);
  }
  );
  