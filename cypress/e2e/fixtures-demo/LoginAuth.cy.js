describe('Loguear - Basic Auth y Auth con forms', () => {
    it('Loguea usando auth de Cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text', 'Congratulations')
    }); 
    it('Login', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations')
    });
});