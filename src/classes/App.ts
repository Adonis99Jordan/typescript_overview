import 'console.table';

import inquirer from 'inquirer';
import Analyst from './Analyst.js';
import Engineer from './Engineer.js';

class App {
    static started: boolean = false;
    static employees: (Analyst | Engineer)[] = [];

    static seedEmployees() {
        const bob = new Engineer('Bob', 'Smith', 120000, 'backend', ['JS', 'Python', 'C++']);
        const jane = new Engineer('Jane', 'Doe', 150000, 'backend', ['JS', 'Python', 'C++', 'Java']);
        const frank = new Analyst('Frank', 'Wilson', 90000, 'finacial analyst', ['BSAP', 'DSAP', 'ODOP']);
        const barbara = new Analyst('Barbara', 'Crawford', 80000, 'credit specialist', ['BSAP', 'DSAP']);

        this.employees.push(bob, jane, frank, barbara);
    }

    static async showMainMenu() {
        if (!this.started) {
            console.log('\n---------Welcome To The Employee Tracker---------\n');
            this.started = true;
        } else {
            console.log('---------\n');
        }

        const menuChoiceObj = await inquirer.prompt({
            message: 'Please choose an option',
            name: 'choice',
            type: 'list',
            choices: ['Show Employees', 'Add Employee', 'Update Employee Salary', 'Print Engineer Languages', 'Exit']
        });

        switch (menuChoiceObj.choice) {
            case 'Show Employees':
                await this.showEmployees();
                this.showMainMenu();
                break;
            case 'Add Employee':
                await this.showAddEmployeeInterface();
                this.showMainMenu();
                break;
            case 'Update Employee Salary':
                await this.showUpdateSalaryInterface();
                this.showMainMenu();
                break;
            case 'Print Engineer Languages':
                await this.printEngineerLanguages();
                this.showMainMenu();
                break;
            default:
                console.log('------\nThanks for using the Employee Tracker!');
        }
    }

    static showEmployees() {
        if (!this.employees.length) {
            console.log('No employees have been added yet...');
        }

        console.table(this.employees);
    }

    static async showAddEmployeeInterface() {
        const addAnswerObj = await inquirer.prompt([
            {
                message: 'What type of employee would you like to add?',
                name: 'employeeType',
                type: 'list',
                choices: ['Analyst', 'Engineer']
            },
            {
                message: 'Type the employee\'s first name',
                name: 'firstName',
                type: 'input',
            },
            {
                message: 'Type the employee\'s last name',
                name: 'lastName',
                type: 'input',
            },
            {
                message: 'Type the employee\'s salary',
                name: 'salary',
                type: 'number',
            },
            {
                message: 'Type the employee\'s title',
                name: 'employeeTitle',
                type: 'input',
            }
        ]);

        let employeeObj;

        if (addAnswerObj.employeeType === 'Analyst') {
            let keepAsking = true;
            const certifications = [];

            while (keepAsking) {
                const certOption = await inquirer.prompt({
                    message: 'Please choose an option',
                    name: 'option',
                    type: 'list',
                    choices: ['Enter a certification', 'Done']
                });

                if (certOption.option === 'Done') {
                    keepAsking = false;
                    break;
                }

                const certAnswer = await inquirer.prompt({
                    message: 'Please type a certification',
                    name: 'certification',
                    type: 'input'
                });

                certifications.push(certAnswer.certification);
            }

            employeeObj = new Analyst(addAnswerObj.firstName, addAnswerObj.lastName, addAnswerObj.salary, addAnswerObj.employeeTitle, certifications);
        } else {
            let keepAsking = true;
            const languages = [];

            while (keepAsking) {
                const langOption = await inquirer.prompt({
                    message: 'Please choose an option',
                    name: 'option',
                    type: 'list',
                    choices: ['Enter a programming language', 'Done']
                });

                if (langOption.option === 'Done') {
                    keepAsking = false;
                    break;
                }

                const langAnswer = await inquirer.prompt({
                    message: 'Please type a programming language',
                    name: 'language',
                    type: 'input'
                });

                languages.push(langAnswer.language);
            }

            employeeObj = new Engineer(addAnswerObj.firstName, addAnswerObj.lastName, addAnswerObj.salary, addAnswerObj.employeeTitle, languages);
        }


        this.employees.push(employeeObj);
        console.log('Employee added!');
    }

    static async showUpdateSalaryInterface() {
        // So, I need to show the user all the employees, so they can select one 

        // When they choose an employee, ask them what the new salary should be

        // Should I have a method on the employee object to change salary amount? Yes!!
        const choices = this.employees.map((employeeObj) => {
            return {
                // The name property is what the user sees in the terminal as an option/choice
                name: employeeObj.firstName + ' ' + employeeObj.lastName,
                // The value is what we get back on the answersObj
                value: employeeObj
            };
        });

        const employeeAnswer = await inquirer.prompt([
            {
                message: 'Please select an employee from the list',
                name: 'selectedEmployee',
                type: 'list',
                choices: choices
            },
            {
                message: 'Please enter the new salary amount',
                name: 'salaryAmount',
                type: 'number'
            }
        ]);

        employeeAnswer.selectedEmployee.updateSalary(employeeAnswer.salaryAmount);

        console.log('Employee salary updated!');
    }

    static async printEngineerLanguages() {
        const engineers = this.employees.filter((employeeObj) => {
            if (employeeObj instanceof Engineer) {
                return employeeObj;
            }
        });
        const choices = engineers.map((employeeObj) => {
            return {
                // The name property is what the user sees in the terminal as an option/choice
                name: employeeObj.firstName + ' ' + employeeObj.lastName,
                // The value is what we get back on the answersObj
                value: employeeObj
            };
        });


        const engineerAnswer = await inquirer.prompt({
            message: 'Please select an engineer from the list',
            name: 'selectedEngineer',
            type: 'list',
            choices: choices
        });

        engineerAnswer.selectedEngineer.printProgrammingLanguages();
    }
}

export default App;