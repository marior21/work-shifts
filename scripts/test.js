const { breakline, command } = require('./command');

(() => {
  const params = process.argv.splice(2).join(' ');

  command(`react-scripts test --passWithNoTests --transformIgnorePatterns "node_modules/(?!mirai)/" ${params}`);

  breakline();
})();
