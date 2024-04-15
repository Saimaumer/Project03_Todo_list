#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue.bold.italic("\n\t\t TODO LIST \t\n"));
//initialize an empty array to store todos
let todoArray = [];
let condition = true;
//loop prompting user until stop
while (condition) {
    const todoAnswer = await inquirer.prompt([
        //first prompt for adding a todo item
        {
            name: "q1",
            type: "input",
            message: chalk.yellow("what would you like to add your to-do list?"),
            //use transformer to format input with chalk
            transformer: (input) => {
                return chalk.cyan.bold(input);
            },
        },
        // second prompt to ask if user wants to add more todos
        {
            name: "q2",
            type: "confirm",
            message: chalk.yellow("Do you want to add more in your to-do list?"),
            default: false,
        },
    ]);
    //check if input is not empty and then push it to todos array
    if (todoAnswer.q1.trim() !== "") {
        todoArray.push(todoAnswer.q1);
    }
    //print current todos list with green color
    console.log(chalk.green(todoArray.join(' , ')));
    //update condition based on user input
    condition = todoAnswer.q2;
}
//print final todo list in yyellow
console.log(chalk.yellow("\nyour final list:"));
todoArray.forEach((todoArray, index) => {
    console.log(chalk.cyan(`${index + 1}. ${todoArray}`));
});
