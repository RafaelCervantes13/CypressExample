import FreeRangeHome from '../PageObjectModel/FreeRangeHome'

const home = new FreeRangeHome
describe('Ejemplo de POM en la web Free Range Testers', () => {
    it('Prueba con POM', () => {
        home.navigateToHome()
        home.givenButton().should('exist')

    });
});