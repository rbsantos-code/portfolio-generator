// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// MODULE 9 LESSON 1 -------------------------------------------------------------------
// const printProfileData = profileDataArr => {
//     // 9.1.6 added += 1 at the end of for loop
//     // This..
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('==============');

    // Is the same as this...

    // profileDataArr.forEach((profileItem) => {
        //console.log(profileItem)
    //});

    // Updated code below to use arrow function 
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);


// MODULE 9 LESSON 2 ------------------------------------------------------------

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// const fs = require('fs');

// const generatePage = (userName, githubName) => `Name: ${userName}, GitHub: ${githubName}`;
// console.log(generatePage('Jane', 'janeHub'));

// create multi-line input
// const generatePage = (name, github) => {
//     return `
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//    </head>

//    <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">GitHub</a></h2>
//    </body>
//    </html> 
//     `;
// };


// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index,html to see the output!');
// }) 

// 9.2.6 Refactor Code --------
const inquirer = require('inquirer');

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2); // -- remove using inquirer instead - 9.3.5

// const [name, github] = profileDataArgs;

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if(err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// 9.3.5 ----------------------------------

// refactor fs.writeFile

// fs.write('./js/index.html'), pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see output!');
// };

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         }
//     ])
//     .then(answers => console.log(answers));  THIS SHOWS INQUIRER IS WORKING

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            // adding validation 9.3.6
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            // adding validation
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself',
            // incorporating the "when" property -- 9.3.6
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};



const promptProject = portfolioData => {

    // If there is no 'projects' array property, create one --- 9.3.5
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: userDescription => {
                if (userDescription) {
                    return true;
                } else {
                    console.log('Please enter project description!');
                    return false;
                }
            }

        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: link => {
                if (link) {
                    return true;
                } else {
                    console.log('Please enter a link to your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => console.log(projectAnswers)); --- Revised chained function -- 9.3.5


promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });