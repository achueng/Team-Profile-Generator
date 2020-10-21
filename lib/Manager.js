// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Manager class inherits from Employee class --> Manager class constructor uses super(); and has parameters: name, id, email, officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Manager class has a method: getOfficeNumber(); --> retrieves key value from when object is called
    getOfficeNumber() {return this.officeNumber};
    getRole() {return "Manager"};
}

module.exports = Manager;