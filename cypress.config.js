const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: 'joh63a',
  env: {
    // Importar variáveis precisa ser necessáriamente como string
    baseUrl: "https://google.com.br",
    auth_username: process.env.LOGIN,
    auth_password: process.env.PASSWORD,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
