var fs = require('fs'),
    path = require('path'),
    yaml = require('js-yaml');

module.exports = yaml.safeLoad(
  fs.readFileSync(path.join(__dirname, '.eslintrc'), { encoding: 'utf8' })
);
