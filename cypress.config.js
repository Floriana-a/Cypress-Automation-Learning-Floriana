const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here // 
      // run cypress -> npm bin  // npx cypress run --browser chrome
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
