const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    defaultCommandTimeout: 6000,
    projectId: "f6zh3n",
    reporter: 'mochawesome',
    "reporterOptions" :{
      "reportDir":"cypress/reports",
      "reportFileName":"report",
      "overWrite" : true,
      "html": true,
      "json": true,
      "charts": true
    },
    retries: {
      runMode: 1
      },
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern:'cypress/e2e/*.js',

  },
});
