#!/usr/bin/env node

const { execSync } = require("child_process");
const extensions = require("./extensions.js");
const colors = require("colors");

const install = (name) => {
	execSync(`code --install-extension ${name}`);
	console.info(`install ext: ${name}`);
};

extensions.forEach(install);

console.info("installed!".rainbow);
