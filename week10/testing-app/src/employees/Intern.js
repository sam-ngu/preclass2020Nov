const BaseEmployee = require("./BaseEmployee");

class Intern extends BaseEmployee {
    constructor(id, name, school) {
        super(id, name);

        this.school = school;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
