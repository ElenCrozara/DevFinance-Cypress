/// <reference types="cypress" />

describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/');
    });
    it('Cadastrando primeira entrada', () => {
        criarTransacao('salario', 800)
        cy.get('tbody tr td.description').should('have.text', 'salario')
    });

    it('Cadastrando primeira saída', () => {
        criarTransacao('cineminha', -75)
        cy.get('tbody tr td.description').should('have.text', 'cineminha')
    });

    it('Excluindo uma saída', () => {
        criarTransacao('mercado', -50)
        cy.contains('.description', 'mercado').should('be.visible')
        cy.get(' td img').click()
        //cy.contains('.description', 'frela').parente().find('img').click()
    });

    it('Validando o total', () => {
        criarTransacao('comissão', 550)
        criarTransacao('supermercado', -95)
        cy.get('.total')
        expect(455).to.equal(455)
    });

    function criarTransacao(descricao, valor) {
        cy.contains("Nova Transação").click();
        cy.get('#form').should('be.visible');
        cy.get('#description').type(descricao);
        cy.get('#amount').type(valor);
        cy.get('#date').type('2024-02-10') // yyyy-mm-dd
        cy.get('button').click()
    }


});