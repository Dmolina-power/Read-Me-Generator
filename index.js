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
      name: "title",
      type: "input",
      message: "Name of the project Title",
    },
    {
      name: "description",
      type: "input",
      message: "describe your project:",
    },
    {
      name: "Installation",
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
      name: "contribute",
      type: "input",
      message: "mention any collaborators in your project",
    },
  ])
    .then(function (reponse) {
        fs.writeFile("README.md",markdown(response,profile, name), function (err) {
        if (err) throw err;
        console.log("success!");
    });
  });
    



























