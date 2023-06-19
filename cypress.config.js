const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
  },
});
