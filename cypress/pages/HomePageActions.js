var elements 
class HomePageActions {

    launchWebPage(url)
     {
        if(url.includes('google')){
            elements = require('./Google/HomePage/elements')
        }
        else{
            elements = require('./Yahoo/HomePage/elements')
        }

       return cy.visit(url)
    }
    
    validateTitle(pageTitle) {
        cy.log(pageTitle)
        cy.log("url",cy.url())
        return cy.title().should('eq', pageTitle)
     }
 
    clickSearchTxtBox(){
        return cy.get(elements.HOMEPAGE.SEARCH_TXTBOX).click()
    }

    enterSearchQuery(query){
        return cy.get(elements.HOMEPAGE.SEARCH_TXTBOX).type(query)
    }

    submitSearchQuery(){
        return cy.get(elements.HOMEPAGE.SEARCH_TXTBOX).type('{enter}')
    }

}


export default HomePageActions