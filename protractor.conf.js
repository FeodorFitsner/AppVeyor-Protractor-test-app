exports.config = {
    // path to the selenium server jar. Update version number accordingly!
    //seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar',
    
    localSeleniumStandaloneOpts: {
        args: ['-Djna.nosys=true']
    },

    // select all end to end tests
    specs: ['AppVeyor-Protractor-test-app/*e2e.spec.js'],

    baseUrl: 'http://localhost:47602/'
};
