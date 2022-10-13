const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,  // need this for switching to different domain
    e2e: {
        baseUrl: 'http://promethium.ai/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
