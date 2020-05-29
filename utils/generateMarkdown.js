function generateMarkdown(data) {
  return `
  
# ${data.title}

 ## Table of Contents:
 - [Description] ${data.description}
 - [Installation] ${data.installation}
 - [Usage] ${data.installation}
 - [Contact] ${data.email} <br> ${data.social}

`;
}

module.exports = generateMarkdown;
