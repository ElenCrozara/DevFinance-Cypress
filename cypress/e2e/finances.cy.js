describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/');
    });
    it('Cadastrando uma entrada', () => {
        cy.contains("Nova Transação").click();
        cy.get('#form').should('be.visible');
        cy.get('#description').type('salario');
        cy.get('#amount').type(800);
    });
});