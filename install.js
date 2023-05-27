const { execSync } = require("child_process");
const extensions = require("./extensions.js");
const colors = require("colors");

const install = (name) => {
	console.info(`install ext: ${name}`);
	execSync(`code --install-extension ${name}`);
};

extensions.forEach(install);

console.info("installed!".rainbow);
