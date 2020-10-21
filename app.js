const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const questions = [
    {
        type: "list",
        message: "Which team member would you like to add? A team mangager must be added before adding other team members.",
        name: "manager",
        choices: ["Manager"]
    },
    {
        type: "input",
        message: "Team Member Name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Team Member ID: ",
        name: "id"
    },
    {
        type: "input",
        message: "Team Member Email: ",
        name: "email"
    },
    {
        type: "input",
        message: "Manager Office Number: ",
        name: "officeNumber"
    },
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "addMember",
        choices: ["Yes", "No"]
    },
    {
        type: "list",
        message: "Which team member would you like to add?",
        name: "position",
        choices: ["Engineer", "Intern"]
    }
];

const engQuestions = [
    questions[1],
    questions[2],
    questions[3],
    {
        type: "input",
        message: "Team Member GitHub: ",
        name: "github"
    },
    questions[5],
    questions[6]
];

const intQuestions = [
    questions[1],
    questions[2],
    questions[3],
    {
        type: "input",
        message: "Team Member School: ",
        name: "school"
    },
    questions[5],
    questions[6]
];

inquirer.prompt(questions).then(response1 => {
    console.log(response1);
});

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required above)
// and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee
// Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
