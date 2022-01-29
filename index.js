// npm packages (require modules)
const fs = require('fs');
const inquirer = require('inquirer');

// link to markdown page where the README is created
const generatePage = require('./utils/generateMarkdown')

// array of questions for user input
const questions = () => {
    console.log(`
        ===================================================
           Create a Professional README ( * = Required )
        ===================================================
        `)
    // inquirer package will prompt the questions
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (*)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (*)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project. (*)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ['MIT']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? (*)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app? (*)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'test',
           message: 'What command should be used to run tests?',
           default: 'npm test' 
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);
};


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// function to initialize app
questions ()

// retrieving the input answers
.then(answers => {
    return generatePage(answers);
})


