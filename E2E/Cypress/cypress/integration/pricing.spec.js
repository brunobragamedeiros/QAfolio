/// <reference types="cypress" />

describe('Price cards in Pricing', () => {

  it('should be accessible', () => {
    cy.visit('/pricing')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical'] })
  })

  it('checks free plan', () => {
    const data = {
      title: 'Free',
      price: '0',
      totalUsers: '3',
      totalTests: '500 ',
      buttonTitle: 'Sign Up Free',
    };

    cy.checkPlanByCardIdentifier('.hmYVWj', data);
  })

  it('checks team plan', () => {
    const data = {
      title: 'Team',
      price: '75',
      totalUsers: '10',
      totalTests: '10,000 included',
      buttonTitle: 'Get Started',
    };

    cy.checkPlanByCardIdentifier('.BGtVy', data);
  })

  it('checks business plan', () => {
    const data = {
      title: 'Business',
      price: '300',
      totalUsers: '40',
      totalTests: '10,000 included',
      buttonTitle: 'Get Started',
    };

    cy.checkPlanByCardIdentifier('.fjyTtk', data);
  })

  it('checks enterprise plan', () => {
    const data = {
      title: 'Enterprise',
      totalUsers: 'Unlimited',
      totalTests: 'Variable ',
      buttonTitle: 'Contact Us',
    };

    cy.checkPlanByCardIdentifier('.eqLlPO', data);
  })
})
