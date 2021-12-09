/// <reference types = "cypress" />


describe('DevFinance', () => {
    
    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });
    

    it('Adicionar uma nova transição de entrada', () => {
        cy.get ('a[onclick*=open]').click()
        cy.get ('#description').type('Freela')
        cy.get ('#amount').type('12')
        cy.get ('#date').type('2021-11-09')

        cy.contains ('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length',1)

    });


    it('Adicionar uma nova transição de saída', () => {
        cy.get ('a[onclick*=open]').click()
        cy.get ('#description').type('Chocolate')
        cy.get ('#amount').type('-5')
        cy.get ('#date').type('2021-11-13')

        cy.contains ('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length',1)

    });


    it('Automatizar uma exclusão', () => {
        cy.get ('a[onclick*=open]').click()
        cy.get ('#description').type('Freela')
        cy.get ('#amount').type('12')
        cy.get ('#date').type('2021-11-09')

        cy.contains ('button', 'Salvar').click()

        cy.get('img[onclick*=remove]').click()

        cy.get('table tbody tr').should('have.length',0)

    });
});
