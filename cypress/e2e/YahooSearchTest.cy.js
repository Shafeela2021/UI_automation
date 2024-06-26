///<reference types="cypress"/>
import HomePageActions from "../pages/HomePageActions"
import ResultPageActions from "../pages/ResultPageActions"

const homePage = new HomePageActions()
const resultPage = new ResultPageActions()

describe('yahoo searchTest suite', ()=>{
    let input
    beforeEach(()=> {
        cy.fixture('yahooTestData').then((data) => {
            input=data
          })
    })

    it('Validate Yahoo search return expected result',()=>{
        //Check if fixture data is loaded successfully
        expect(input).to.not.be.undefined;
        homePage.launchWebPage(input.url)
        homePage.validateTitle(input.title)
        homePage.clickSearchTxtBox()
        homePage.enterSearchQuery(input.query)
        homePage.submitSearchQuery()
        resultPage.verifyFirstSearchResult(input.query)   
    })
    
})