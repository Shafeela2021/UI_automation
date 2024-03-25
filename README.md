#Cypress Automation Framework

The Cypress automation framework, implemented with JavaScript (JS), adopts the Page Object Model (POM) design pattern to orchestrate UI tests for Google search and Yahoo search.

##Application Under Test (AUT): 
    "https://google.com/"
    "https://search.yahoo.com/"

##Features :
1. Test cases are atomic, independent, ensuring isolated execution without dependencies.
2. **Page object Model design pattern** has been imolemented ,page element are organized in a separate file for easy maintenance.
3. **Test data is loaded from external fixture files**, specifically JSON, for flexibility and ease of management.
4. Integrated **MochaAwesome reporting** provides comprehensive test reports for analysis.
5. Support for **Cypress Cloud dashboard** enables efficient management and monitoring of tests.
6. **Test retries** are implemented for failing tests, improving test reliability.
7. Tests can be executed across multiple browsers, including Chrome and Firefox.
8. **Dockerization is supported for running tests in different browser** versions, with steps provided in the Dockerfile for building and running the image.
9. **Object-Oriented Programming (OOP) principles** are utilized, employing inheritance to extend all pages from a BasePage. 
10. **CI/CD pipeline integration via GitHub workflows** ensures that tests are triggered whenever new code is pushed to the master branch, promoting continuous integration and deployment practices.






