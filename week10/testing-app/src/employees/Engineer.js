const BaseEmployee = require('./BaseEmployee');

class Engineer extends BaseEmployee {
    constructor(id, name, github) {
        super(id, name)

        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
