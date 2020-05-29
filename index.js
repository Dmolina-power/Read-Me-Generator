const fs = require("fs");
const util = require("util");

const inquirer = require("inquirer");

const writeFile = util.promisify(fs.writeFile);


inquirer
  .prompt([
      {
        name:"username",
        type: "input",
        message: "What is your Github username?",
      },
      {
        name:"title",
        type:"input",
        message:"project title name is ?",
      },
      {
        name:"description",
        type:"input",
        message:"describe your project:",
      },
      {
        name:"Installation",
        type:"input",
        message:"steps in installing your project are?",
      },
      {
        name:"usage",
        type:"input",
        message:"how to use the repo:",
      },
      {
        name:"license",
        type:"list",
        message:"which license do you use?",
        choices:["MIT", "IBM"]
      },
      {
        name:"contribute",
        type:"input",
        message:"mention any collaborators in your project",
      },
  )];