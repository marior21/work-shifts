const { execSync } = require('child_process');

const breakline = () => console.log(line());
const line = (char = '-') => `\n${Array(78).join(char)}\n`;

const command = async (command, verbose = true) => {
  if (verbose) console.log(line(), `⚙️  ${command}`, line());

  execSync(command, { stdio: 'inherit' });
};

module.exports = { breakline, command };
