const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser,launchOptions)=>{
        launchOptions.extensions.push('Test')

        return launchOptions

      })
  }},
  video:true,

  baseUri: "https://novascotia.flow.qa.canimmunize.dev",

});
