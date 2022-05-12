//<reference types="cypress" />

describe('Eval Scroll to top', () => {
    beforeEach(() => {
      cy.visit('../../compo2.html');
    });

    it('Scroll', () => {
        cy.get('[data-cy=top]').should('not.be.visible')
        cy.scrollTo('bottom')
        cy.get('[data-cy=top]').should('be.visible')
    })
    

    it('Scroll Return', () => {
        cy.get('[data-cy=top]').should('not.be.visible')
        cy.scrollTo('bottom')
        cy.get('[data-cy=top]').should('be.visible')
        cy.get('[data-cy=top]').click();
        cy.get('[data-cy=top]').should('not.be.visible')

    })
});



