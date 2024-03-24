class BasePage {

    open(path) {
        return cy.visit(path)
    }

    validateTitle(pageTitle) {
        return cy.title().should('eq', pageTitle)
     }
 

}

export default BasePage;