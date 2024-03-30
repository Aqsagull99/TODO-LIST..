
import inquirer from "inquirer";

let todos = [];

let condition = true; // Initialize as boolean true
while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message:"what do you want to add in your todos?",
    },
    {
      name: "addmore",
      type: "confirm",
      message: "Is it confirm do you want to add more?",
      default: false // Initialize as boolean false
    }
  ]);

  todos.push(addTask.todo);
  condition = addTask.addmore;
  console.log(todos);
}




