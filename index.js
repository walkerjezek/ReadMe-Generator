// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for your project",
    },
    {
        type: "input",
        name: "installation",
        message: "List the necessary steps to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "How should this project be used?",
    },
    {
        type: "input",
        name: "contribution",
        message: "List the contribution guidelines",
    },
    {
        type: "input",
        name: "testInstruction",
        message: "List the test intructions for your project",
    },
    {
        type: "list",
        name: "license",
        message: "Select the appropriate license for your project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "GitHub",
        message: "Add your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
