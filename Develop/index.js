// TODO: Include packages needed for this application
// inquirer
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const fs = require('fs');

const questions = [
    // Pass your questions in here
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Include the links of any collaborators.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license?'
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'Are there any badges?'
        // if yes, include badges
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Would you like others to contribute? If yes, please describe how.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any tests written for your application?'
    }
  ];

  questions()
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
