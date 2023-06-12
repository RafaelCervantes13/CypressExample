describe('Pruebas en API con Cypress', () => {
    it('El endpoint post responde con status 200', () => {

        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then((respuesta) => {
            expect(respuesta.status).to.eq(200)
        })    
    });
    it.skip('El endpoint tienen mas de 100 entradas', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
        .its('body')
        .should('have.lenght', 100)
    });
    it('El Post reqyest funciona correctamente para el endpoint', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            userId:5,
            title: 'lol',
            body: 'oli crayoli'
        }).then((respuesta)=> {
            expect(respuesta.body).to.have.property('title', 'lol')
        })
    });
});