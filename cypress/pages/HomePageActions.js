import BasePage from './BasePage'

var elements 
class HomePageActions extends BasePage{

    launchWebPage(url)
     {
        if(url.includes('google')){
            elements = require('./Google/HomePage/elements')
        }
        else{
            elements = require('./Yahoo/HomePage/elements')
        }

       return this.open(url)
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