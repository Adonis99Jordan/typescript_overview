import Employee from "./Employee.js";

class Analyst extends Employee {
    cetifications: String[];
    
    constructor(firstName: string, lastName: string, salary: number, title: string, cetifications: String[]) {
        super(firstName, lastName, salary, title);

        this.cetifications = cetifications
    }

}

export default Analyst;