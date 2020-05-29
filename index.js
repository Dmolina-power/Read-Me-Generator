const fs = require("fs");
const util = require("util");
const axios = require("axios")
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

const writeFile = util.promisify(fs.writeFile);



// generate Questions //
inquirer
  .prompt([
    {
      name: "username",
      type: "input",
      message: "What is your Github username?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your Email address?",
      },
      {
        name: "social",
        type: "input",
        message: "What is your linkedIn address?",
      },
    {
      name: "title",
      type: "input",
      message: "Name of the project Title",
    },
    {
        name: "projectLink",
        type: "input",
        message: "whats your project link URL?",
      },
    {
      name: "description",
      type: "input",
      message: "describe your project:",
    },
    {
      name: "installation",
      type: "input",
      message: "steps in installing your project are?",
    },
    {
      name: "usage",
      type: "input",
      message: "how to use the repo:",
    },
    {
      name: "license",
      type: "list",
      message: "which license do you use?",
      choices: ["MIT", "IBM"],
    },
    {
      name: "contributing",
      type: "input",
      message: "mention any collaborators in your project",
    },
  ])
    .then(function (response) {
        fs.writeFile("README.md",markdown(response), function (err) {
        if (err) throw err;
        console.log("success!");
    });
  });
    



























