/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['@remix-galaxy/eslint-config/base.js'],
  root: true,
  parserOptions: {
    project: true,
  },
};

module.exports = config;
