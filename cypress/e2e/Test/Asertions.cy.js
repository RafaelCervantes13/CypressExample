describe('validaciones implicitas y explicitas', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Validaciones implicitas', () => {
        cy.contains('Inputs').click()
        cy.get('h3').should('have.text', 'Inputs')
        cy.get('.example').should('have.class', 'example').and('be.visible')

    });
    it('Validaciones explicitas', () => {
        cy.contains('Inputs').click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    });
});