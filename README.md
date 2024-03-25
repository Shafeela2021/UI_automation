Cypress Automation Framework

The Cypress automation framework, implemented with JavaScript (JS), adopts the Page Object Model (POM) design pattern to orchestrate UI tests for Google search and Yahoo search.

Application Under Test (AUT): 
    "https://google.com/"
    "https://search.yahoo.com/"

Features :
1. Test cases are atomic, independent, ensuring isolated execution without dependencies.
2. Robust locators are organized in a separate file for easy maintenance.
3. Test data is separated from test files for better organization.
4. Loading test data from external fixtures files i.e. JSON
5. Integerated MochaAwesome report
6. Support for Cypress Cloud (Dashboard)
7. Test Retries for failing tests
8. Ability to run in multiple browser (chrome, firefox)
9. Ability to run in docker container using dockerfile for testing in different browser version 
    Steps to run :
    export PATH="$PATH:/Applications/Docker.app/Contents/Resources/bin/"
     To build the image : "docker build -t cypress-image ."
     To run the image in container : "docker run -it cypress-image"
10. Usage of OOP Inheritance to extend all the pages from BasePage  - which      allow  to use common function to open the url and validate the title
(Call the cy.visit() from BasePage with specified path)
11. Integerated in CI/CD pipeline using github workflow - Whenever new code is pushed to master test will be triggered






