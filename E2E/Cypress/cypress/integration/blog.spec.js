/// <reference types="cypress" />

describe('Search feature in blog', () => {

  it('should be accessible', () => {
    cy.visit('/blog')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical'] })
  })

  it('access an article', () => {
    cy.get('#search-input').type('Visual Testing');
    cy.contains('Guest Post: Visual Testing with Cypress').click({ force: true });
  })
})

describe('Blog structure', () => {
  it('tests older posts flow', () => {
    cy.visit('/blog')
    cy.get('.older-posts').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}blog/page/2/`)
  })

  it('tests new posts flow', () => {
    cy.visit('/blog/page/2/')
    cy.get('.newer-posts').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}blog/`)
  })

  it('tests subscription flow', () => {
    cy.visit('/blog/page/2/')
    cy.get('.input').type('medeiros.braga.bruno@gmail.com');
    cy.get('.hs-button').click();
    cy.get('.submitted-message').should('have.text', 'Thanks for submitting the form.');
  })
})