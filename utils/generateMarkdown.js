function generateMarkdown(data) {
  return `
  ![GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.title}) 
  ![GitHub followers](https://img.shields.io/github/followers/${data.username}) 
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.title}) 
  ![GitHub](https://img.shields.io/github/license/${data.username}/${data.license})
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.title})
  
# ${data.title}

## Table of Contents:
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Project Link](#projectLink)
 * [Contact](#email,#social) 
 * [Contributing](#contributing)
 * [License](#license)
 
 ## Description
 ${data.description}

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Project Link
 ${data.projectLink}

 ## Contact
 ${data.email}

 ${data.social}

 ## Contributing
 ${data.contributing}

 ## License
 ${data.license}


 ![Avatar Image](${imageURL})

`;
}

module.exports = generateMarkdown;
