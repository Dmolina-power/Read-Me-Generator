const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

const writeFile = util.promisify(fs.writeFile);

// generate Questions //
const questions = [
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
];
function init() {
  questionAsk();
}

init();

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("success!");
  });
}

function questionAsk() {
  inquirer.prompt(questions).then((answers) => {
    const {
      username,
      title,
      description,
      installation,
      usage,
      projectLink,
      email,
      contributing,
      license,
    } = answers;
    let queryURL = `https://api.github.com/users/${username}?per_page=100`;
    axios.get(queryURL).then(function (response) {
      let imageURL = response.data.avatar_url;

      let markdown = ` 
  
  ![GitHub followers](https://img.shields.io/github/followers/${username}) 
  ![GitHub repo size](https://img.shields.io/github/repo-size/${username}/${title}) 
  
  
  
# ${title}

## Table of Contents:
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Project Link](#projectLink)
 * [Contact](#email) 
 * [Contributing](#contributing)
 * [License](#license)
 
 ## Description
 ${description}

 ## Installation
 ${installation}

 ## Usage
 ${usage}

 ## ProjectLink
 ${projectLink}

 ## Email
 ${email}

 

 ## Contributing
 ${contributing}

 ## License
 ${license}


 ![Avatar Image](${imageURL})
 `;
      writeToFile("./GenerateREADME.md", markdown);
    });
  });
}
