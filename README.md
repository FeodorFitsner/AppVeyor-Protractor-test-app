# AppVeyor-Protractor-test-app
Application running a minimal solution with a web application and [Protractor](https://github.com/angular/protractor) with [Selenium](http://www.seleniumhq.org/).

This is to test an error [related to this SO](http://stackoverflow.com/questions/33647123/protractor-tests-fails-when-closing-selenium-webdriver-connection) where AppVeyor fails build when shutting down the selenium webdriver.

[![Build status](https://ci.appveyor.com/api/projects/status/7tn2ep7ngj5surcc/branch/master?svg=true)](https://ci.appveyor.com/project/Crevil/appveyor-protractor-test-app/branch/master)

## Install
Run `npm install` to install dependencies.

## Start
Run the application from Visual Studio (There is no HTTP server included).

Run `npm test` to launch protractor.
