// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
// inquirer.prompt([
    {
        type: "input",
        name: "GitHub",
        message: "Add your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address: ",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? ",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for your project: ",
    },
    {
        type: "input",
        name: "usage",
        message: "How should this project be used? ",
    },
    {
        type: "input",
        name: "installation",
        message: "List the necessary steps to install your project: ",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "List the test intructions for your project: ",
    },
    {
        type: "input",
        name: "contribution",
        message: "List the contribution guidelines: ",
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want to add to your project? ",
        choices: [
            "Academic",
            "Apache",
            "Apache2",
            "BSD",
            "GNU",
            "GPL",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
        ]
    },
];
// Testing readme creation, remove ; above and add ) after ] to use this
    // .then((answers) => {
    //     const generateReadMe = generateMarkdown(answers);

    //     fs.writeFile('README.md', generateReadMe, )
    // });

// TODO: Create a function to write README file
// Example from class:
// fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Created index.html')
//       );
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log("Your README is being generated")
    );
}

// TODO: Create a function to initialize app
// use async function? nope made it work without it
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("./Output/README.md", markdown({...answers}));
    })
}

// Function call to initialize app
init();
