class FreeRangeHome {
    navigateToHome() {
        cy.visit('https://www.freerangetesters.com/')
    }

    givenButton(){
        return cy.get('#comp-krjarw4p > [data-testid="linkElement"]')
    }
} 

export default FreeRangeHome