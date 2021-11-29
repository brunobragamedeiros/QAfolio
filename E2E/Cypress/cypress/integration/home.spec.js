/// <reference types="cypress" />

describe('Links in Home', () => {

  it('should be accessible', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical'] })
  })

  it('tests the links in navbar', () => {
    const expectedTitles = ['Features', 'How it works', 'Dashboard', 'Pricing', 'Support', 'Blog', 'Docs', 'What\'s New', 'Login']
    const expectedPaths = ['/features', '/how-it-works', '/dashboard', '/pricing', '/support', '/blog', '/docs', '/whats-new', '/login']

    cy.get('.styled__MenuWrapper-sc-16oj5lj-1 li').should('have.length', 9)
    cy.assertLinks('.styled__MenuWrapper-sc-16oj5lj-1 li', expectedTitles, expectedPaths)
  })

  it('tests the links in buttons', () => {
    const expectedTitles = ['Learn more', 'Learn more', 'Check out the code', 'See more features', 'Subscribe']
    const expectedPaths = ['/features', '/dashboard', '/github', '/features']

    cy.get('.Link-sc-5cc5in-0.large').should('have.length', 4)
    cy.assertLinks('.Link-sc-5cc5in-0.large', expectedTitles, expectedPaths)
  })
})
