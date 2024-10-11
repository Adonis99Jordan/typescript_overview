class Employee {
    firstName;
    lastName;
    salary;
    title;
    constructor(firstName, lastName, salary, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.title = title;
    }
    printFullname() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    updateSalary(newSalary) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
}
export default Employee;
