//<reference types="cypress" />

describe('Eval Check Modal', () => {
    beforeEach(() => {
      cy.visit('../../compo.html');
    });

    it('Click Open', () => {
        cy.get('[data-cy=compo]').should('not.be.visible')
        cy.get('[data-cy=btncomp]').click()
        cy.get('[data-cy=compo]').should('be.visible')
    })
    
    it('Click Close', () => {
        cy.get('[data-cy=btncomp]').click();
        cy.get('[data-cy=compo]').should('be.visible')
        cy.get('body').click(0,0)
        cy.get('[data-cy=compo]').should('not.be.visible')
    });

    it('Lorem', () => {
        cy.get('[data-cy=btncomp]').click();
        cy.get('[data-cy=compo]').find('h2').contains("Lorem Ipsum")
    })
});



