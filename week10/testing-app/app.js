const fs = require('fs');
const path = require('path');
const htmlHelpers = require('./src/utils/html');
const inquirer = require('inquirer');
const Engineer = require('./src/employees/Engineer');
const Manager = require('./src/employees/Manager');
const Intern = require('./src/employees/Intern');

let employees = [
    {
        id: '1',
        type: "Manager",
        name: "Sam",
        officeId: '123',
        email: "sam@sam.com",
    },
    {
        id: '2',
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


function createEmployeeCard(employee){
    // read the templates
    const sourcePath = path.join(
        __dirname,
        "src",
        "html-templates",
        "main.html"
    );
    let source = fs.readFileSync(sourcePath, "utf-8");

    console.log({employee});

    

    const {name, id, role, ...other} = employee;
    console.log(Object.values(other));

    // substitude the placeholders with employees prop
    source = htmlHelpers.injectCode(source, "{{ name }}", employee.getName());
    source = htmlHelpers.injectCode(source, "{{ id }}", employee.getId());

    source = htmlHelpers.injectCode(source, "{{ role }}", employee.getRole());
    source = htmlHelpers.injectCode(source, "{{ other }}", Object.values(other)[0]);

    // return the html
    return source;

}




const cards = [];

for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    
    switch (employee.type) {
        case "Engineer":
            cards.push(
                createEmployeeCard(
                    new Engineer(employee.id, employee.name, employee.github)
                )
            );
            break;
        case "Manager":
            cards.push(
                createEmployeeCard(
                    new Manager(employee.id, employee.name, employee.officeId)
                )
            );
            break;
        case "Intern":
            cards.push(
                createEmployeeCard(
                    new Intern(employee.id, employee.name, employee.officeId)
                )
            );
            break;

        default:
            break;
    }
    
}


// console.log(cards);

const html = cards.join('');

console.log(html);
 const htmlPath = path.join(__dirname, "src", "html-templates", "layout.html");
 const layout = fs.readFileSync(htmlPath, "utf-8");

const result =  htmlHelpers.injectCode(layout, '{{ body }}', html);


console.log(result);

const outputPath = path.join(__dirname, "output", "output.html");
fs.writeFileSync(outputPath, result, 'utf-8');


// const engineer = new Engineer(123,'sam', 'sam-ngu')

// const html = createEmployeeCard(engineer )


