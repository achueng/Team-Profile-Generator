// TODO: Write code to define and export the Employee class
// Employee class constructor has params: name, id, email
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Employee class has methods: getName(), getId(), getEmail(), getRole() --> these methods retrieve the value of the key passed into the object when called
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getRole() {return "Employee"};
}

module.exports = Employee;