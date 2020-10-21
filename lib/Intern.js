// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Intern class inherits from Employeee class --> Intern class constructor includes super(); and has parameters: name, id, email, school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Engineer class has a method: getSchool(); --> retrieves key value of school from when object is called
    getSchool() {return this.school};
    getRole() {return "Intern"};
}

module.exports = Intern;