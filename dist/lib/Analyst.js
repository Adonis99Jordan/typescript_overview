import Employee from "./Employee.js";
class Analyst extends Employee {
    cetifications;
    constructor(firstName, lastName, salary, title, cetifications) {
        super(firstName, lastName, salary, title);
        this.cetifications = cetifications;
    }
}
export default Analyst;
