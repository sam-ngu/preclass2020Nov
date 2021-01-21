const fs = require('fs');
const path = require('path');
const htmlHelpers = require('./src/utils/html');
let employees = [
    {
        type: "Manager",
        roomId: "12-A",
        name: "Sam",
        email: "sam@sam.com",
    },
    {
        type: "Engineer",
        github: "sam-ngu",
        name: "Sam",
        email: "sam@sam.com",
    },
];


// inquirer 

// keep asking the user to enter which employee type

// ask question specific to emmployee type
// ;

 const htmlPath = path.join(__dirname, "src", "html-templates", "main.html");
 const layout = fs.readFileSync(htmlPath, "utf-8");
htmlHelpers.injectCode(layout, '{{ code_injection }}', JSON.stringify(employees));
