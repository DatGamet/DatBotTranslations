const chalk = require("chalk");
function logger(level, prefix, content, ...para) {
    switch (level.toLowerCase()) {
        case "info": {
            return console.log(chalk.bgBlue(" " + chalk.bold(prefix) + " ") + ` ${chalk.grey(content)}`, para.join(", "));
        }
        case "error": {
            return console.log(chalk.bgRed(" " + chalk.bold(prefix) + " ") + ` ${chalk.grey(content)}`, para.join(", "));
        }
        case "warn": {
            return console.log(chalk.bgYellow(" " + chalk.black(prefix) + " ") + ` ${chalk.grey(content)}`, para.join(", "));
        }
        case "success": {
            return console.log(chalk.bgGreen(" " + chalk.black(prefix) + " ") + ` ${chalk.grey(content)}`, para.join(", "));
        }
        default: {
            return console.log(chalk.bgBlue(" " + chalk.bold(prefix) + " ") + ` ${chalk.grey(content)}`, para.join(", "));
        }
    }
}

module.exports = {logger}
