var elements

class ResultPageActions {
    getElementPath(){ 
        return cy.title().then((txt)=>{
            if(txt.includes('Google')){
                cy.log(txt)
                elements = require('./Google/ResultPage/elements')
            }
            else{
                elements = require('./Yahoo/ResultPage/elements')
            }
        })
    }

    verifyFirstSearchResult(query){
        return this.getElementPath().then(() =>{
            return  cy.get(elements.RESULTPAGE.SEARCH_RESULT_LIST).first().invoke('text')
            .then (value =>
                {
                    expect(value).to.include(query)
                });
        })
       
    }
}

export default ResultPageActions