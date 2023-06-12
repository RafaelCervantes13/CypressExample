describe('Demoblaze', () => {
    it('Testing', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.scrollTo('bottom', { duration: 2000 })
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.name').then(function ($ele) {
            const textOfProductOne = $ele.text();        
            cy.get('.col-sm-12 > .btn').click()
            cy.get('#cartur').click()
            cy.get('.success > :nth-child(2)').then(function ($ele) {           
                const textOfProduct = $ele.text();
                expect(textOfProductOne).to.equal(textOfProduct)
            });

        });

    });
});