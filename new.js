const { execSync } = require('child_process');

const arg = process.argv[2] || 'new';

execSync(`mkdir src\\${arg}`, {stdio: [0, 1, 2]});
execSync(`type nul > src\\${arg}\\${arg}.md`, {stdio: [0, 1, 2]});
execSync(`type nul > src\\${arg}\\${arg}.ts`, {stdio: [0, 1, 2]});
execSync(`type nul > src\\${arg}\\${arg}.spec.ts`, {stdio: [0, 1, 2]});