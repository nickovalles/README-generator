// create const for badges
const badges = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Mozilla": "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};

// create const for license sites
const licenseLinks = {
  "MIT": "https://opensource.org/licenses/MIT",
  "Apache": "https://opensource.org/licenses/Apache-2.0",
  "Mozilla": "https://opensource.org/licenses/MPL-2.0",
  "Unlicense": "http://unlicense.org/"
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badges[data.license]}

  ## Description
  ${data.describe}
  
  ## Table of Contents
  
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  License is covered under: ${licenseLinks[data.license]}
  ## Contributing
  ${data.contrib}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, you can reach me by emailing [${data.email}](mailto:${data.email}) or follow the link to my gitHub profile [${data.userName}](https://github.com/${data.userName}).
`;
}

module.exports = generateMarkdown;
