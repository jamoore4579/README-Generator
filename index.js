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
            name: 'email',
            message: 'What is your email address? (*)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
            } else {
                console.log('Please enter your email address!');
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
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? (*)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps needed to install your project.');
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
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ['MIT']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        },
        {
           type: 'input',
           name: 'test',
           message: 'What command should be used to run tests?',
           default: 'npm test' 
        },
    ]);
};


//function writeToFile(fileName, data) {}
// function to write README file using fs
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if an error occurs
        if (err) {
            console.log(err);
            return;
        } else {
            //when the README has been created
            console.log("Your README has been created!")
        }
    })
};


// function to initialize app
questions ()

// retrieving the input answers
.then(answers => {
    return generatePage(answers);
})

.then(data => {
    return writeFile(data);
})
// catching errs
.catch(err => {
    console.log(err)
})


