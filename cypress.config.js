const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser,launchOptions)=>{
        launchOptions.extensions.push('Grammarly')

        return launchOptions

      })
  }},
  video:true,

  baseUri: "https:www.google.com",

});
