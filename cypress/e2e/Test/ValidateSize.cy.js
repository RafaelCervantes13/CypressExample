describe('Size', () => {
    it('Button Login', () => {
        cy.visit("/");
        cy.get('[data-test="login-button"]').should('have.css', 'width', '292px')
        cy.get('[data-test="login-button"]').should('have.css', 'height', '49px')
        cy.login('standard_user', 'secret_sauce')
        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').each(($ele, index) => {
            cy.wrap($ele).find("img").should('have.css', 'width' , '158.65625px')
        })

    });
});