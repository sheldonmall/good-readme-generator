// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title
${data.title} 

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  
## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributuing
${data.contributing}

## Testing
${data.testing}

## Questions
${data.questions}  
`;
}

module.exports = generateMarkdown;
