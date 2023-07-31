const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
    
    env:{
      baseUrl:'https://gorest.co.in/public/v2',
      token:'Bearer 6cb9afa33c14843ea4c7388c8fa6f0a7ad304efff55c8f7eedb79e2f1fbd5693'
    }, 
  },
});
