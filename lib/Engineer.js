// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Engineer class inherits from Employeee class --> Engineer class constructor includes super(); and has parameters: name, id, email, github
class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // Engineer class has a method: getGithub(); --> retrieves key value of github from when object is called

}

module.exports = Engineer;