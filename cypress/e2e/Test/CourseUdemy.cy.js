describe('Testing', () => {
    beforeEach (() => {
        cy.visit('https://www.freerangetesters.com/');        
    })
    it('Cursos', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length', 12)
        cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog')
    });
    it('Boton', () => {
        //cy.wait(4000)
        cy.get('#comp-krjarw4p > [data-testid="linkElement"]').should('not.be.visible')
    });

    it('Checked', () => {
        cy.get().should('be.checked')
    });
    it('Disabled', () => {
        cy.get().should('be.disabled')
    });
});