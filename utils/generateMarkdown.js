// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// use this link for the badge "https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>;
function renderLicenseBadge(license) {
  if (license !== "None") {
    return (
      `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
    )
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `https://opensource.org/licenses/${license}`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License\nThis app is protected under the ${license} license.`
    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#testInstructions)
  - [Questions](#GitHub)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}


  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## Questions? You can reach out to me at:
  Email: ${data.email}
  
  Github: [${data.GitHub}](https://github.com/${data.GitHub})

`;
}

module.exports = generateMarkdown;
