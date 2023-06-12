describe('Fixtures demo', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/');

    })

    it('Test correct', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.getCookies().should('have.length', 1).then((cookies) => {
            expect(cookies[0]).to.have.property('name','session-username')
        })
        cy.logout();
    })

    it('Test incorrect', () => {
        cy.login('lol', 'secret_sauce')
        cy.screenshot()
    })
       

})