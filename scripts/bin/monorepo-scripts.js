#!/usr/bin/env node

const path = require("path");
const { addResolvePath } = require("just-scripts");
addResolvePath(path.join(__dirname, "node_modules"));
