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
8. Ability to run in multiple browser  ( chrome, firefox)

Usage of OOP Inheritance to extend all the pages from BasePage
Allows to load header and footer components from BasePage constructor
Call the cy.visit() from BasePage with specified path
Test Retries for failing tests

