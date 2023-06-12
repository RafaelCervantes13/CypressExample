describe('', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it.skip('Ejemplo de espera', () => {
        cy.wait(10000)
        cy.contains("Challenging DOM").click()
    });

    it.skip('Nueva pestaña', () => {      
        cy.contains("Multiple Windows").click()
        cy.contains("Click Here").invoke('removeAttr', 'target').click()
        cy.contains("New Window").should('have.text', 'New Window')
    });

    it.skip('Shadow DOM', () => {      
        cy.contains("Shadow DOM").click()
        cy.get("ul > :nth-child(2)").shadow().should('have.text', 'In a list!')
    });
    it.skip('Shadow DOM', () => {      
        cy.contains("Dynamic Content").click()
        cy.get("img").last().should('be.visible')
    });

    it.skip('Inove', () => {      
        cy.contains("Dynamic Content")
        .should('be.hidden')
        .invoke('show')
        .should('be.visible')
    });
    it('Click derecho', () => {      
        cy.contains("Context Menu").click()
        cy.get('#hot-spot').rightclick()
        cy.get('#hot-spot').invoke("trigger", "contextmenu")
        cy.on("window:alert", (alert) => {
            expect(alert).to.equal("You selected a context menu")
        })
    });
});