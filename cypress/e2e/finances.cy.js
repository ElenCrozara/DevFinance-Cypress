describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/');
    });
    it('Cadastrando uma entrada', () => {
        criarTransacao('salario', 800)
        cy.get('tbody tr td.description').should('have.text', 'salario')
    });

    it('Cadastrando uma saída', () => {
        criarTransacao('cineminha', -75)
        cy.get('tbody tr td.description').should('have.text', 'cineminha')
    });

    it('Validando o total', () => {
        criarTransacao('comissão', 550)
        criarTransacao('supermercado', -95)
        cy.get('.total').to.eq(455)
    });
    
    function criarTransacao(descricao,valor) {
        cy.contains("Nova Transação").click();
            cy.get('#form').should('be.visible');
            cy.get('#description').type(descricao);
            cy.get('#amount').type(valor);
            cy.get('#date').type('2024-02-10') // yyyy-mm-dd
            cy.get('button').click()
    }

    
});