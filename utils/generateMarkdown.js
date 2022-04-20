// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // "https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  //License Badge

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#testInstructions)
  - [Questions](#GitHub)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  // license link
  // license badge

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## Questions
  ${data.GitHub}
  ${data.email}

`;
}

module.exports = generateMarkdown;
