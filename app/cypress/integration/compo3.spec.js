//<reference types="cypress" />

describe('Eval Smarttag', () => {
    beforeEach(() => {
      cy.visit('../../compo3.html');
    });

    it('Hover', () => {
        cy.get('body').click(0, 0);
        cy.get('[data-cy=lor]').should('not.be.visible');
        cy.get('[data-cy=hov]').trigger('mouseover');
        cy.get('[data-cy=lor]').should('be.visible');
    })

    it('Hidden', () => {
        cy.get('body').click(0, 0);
        cy.get('[data-cy=lor]').should('not.be.visible');
        cy.get('[data-cy=hov]').trigger('mouseover');
        cy.get('[data-cy=lor]').should('be.visible');
        cy.get('body').trigger('mouseover');
        cy.get('[data-cy=lor]').should('not.be.visible');
    })
});



