//<reference types="cypress" />

describe('Eval Todolist', () => {
    beforeEach(() => {
      cy.visit('../../compo4.html');
    });

    it('Todo', () => {
    let inputFields = ['one', 'two', 'three', 'four']

    for(let i = 0; i < 4; i++){
        cy.get('[data-cy=text]').type(inputFields[i])
        cy.get('[data-cy=sub]').click();
    }
    cy.get('[data-cy=length]').contains('4')
    cy.get('[data-cy=cont]:contains("three")').next().click()
    cy.get('[data-cy=cont]:contains("three")').should('not.exist')
    cy.get('[data-cy=length]').contains('3')
    
    })
});



