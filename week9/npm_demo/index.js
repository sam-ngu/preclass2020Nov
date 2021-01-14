const inquirer = require('inquirer');
const fs = require('fs');
// Goal: write a read me generator
// title
// desc
// license (dropdown)
// ...

// for each iten ask the user qs

const FILE_PATH = './readme.md'

inquirer.prompt([
    {
        type:'input',
        message: 'Where do you live?',
        name: 'target_addr'
    },
    {
        type: 'list',
        message: 'Whats ur favorite food? (Choose carefully, thats ur last meal ;)))',
        name: 'last_meal_choice',
        choices: [
            'arson soup',
            'bricks',
            'bone marrow marmalade',
            'some potion',
        ]
    }
]).then((response) => {
    console.log(response);


    const content = `
 # Title: ${response.target_addr}

 ## Wanted $1000 if you can find this person


 last meal : ${response.last_meal_choice}

    `

    fs.writeFileSync(FILE_PATH, content);

})

