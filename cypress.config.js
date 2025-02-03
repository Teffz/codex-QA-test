const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação dos eventos aqui, se necessário
    },
     baseUrl: 'http://127.0.0.1:8080'  // Comente ou remova essa linha
  }
});