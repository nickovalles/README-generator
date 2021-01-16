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
        //list type
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
      choices: [
        'Unlicense',
        'Apache',
        'Mozilla',
        'MIT'
      ]
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
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email address.'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please input your GitHub Username.'
          }
];

 
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    await fs.promises.writeFile(fileName, data, 'utf-8');
  }

// TODO: Create a function to initialize app


// Function call to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    const createMarkdown = generateMarkdown(answers);
    await writeToFile('README.md', createMarkdown);
  }

  init();
