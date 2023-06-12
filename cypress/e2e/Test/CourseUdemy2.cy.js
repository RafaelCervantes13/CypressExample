describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        
    })
    it('Test', () => {
        cy.get('[data-test="username"]').type('Test')
        cy.get('[data-test="password"]').debug().type('Test')
    });
});