const BaseEmployee = require("./BaseEmployee");

class Manager extends BaseEmployee {
    constructor(id, name, office) {
        super(id, name);

        this.office = office;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
