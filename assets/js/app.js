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

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));