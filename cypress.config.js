const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here // 
      // npx cypress run --browser chrome  (headless run)   node_modules/.bin/cypress open  (ui run)
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  video: false
});
