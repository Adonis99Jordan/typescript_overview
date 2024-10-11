import 'console.table';

import Employee from "./Employee.js";

class Engineer extends Employee implements EngineerProps {
    programmingLanguages: String[]

    constructor(firstName: string, lastName: string, salary: number, title: string, programmingLanguages: String[]) {
        super(firstName, lastName, salary, title);

        this.programmingLanguages = programmingLanguages
    }

    printProgrammingLanguages(): void {
        console.table(this.programmingLanguages)
    }
    getProgrammingLanguages(): String[] {
        return this.programmingLanguages
    }
}

export default Engineer;