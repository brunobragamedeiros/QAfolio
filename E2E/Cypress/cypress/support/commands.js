Cypress.Commands.add('checkPlanByCardIdentifier', (cardIdentifier, data) => {
    cy.get(cardIdentifier + ' .styled__Title-bksqcq-4').should('have.text', data.title)
    cy.get(cardIdentifier + ' .styled__Price-bksqcq-5').then($body => {
        if ($body.find(" .styled__Price-bksqcq-5 .value").length > 0) {   //  this if clause checks for the presence of price value to make the assertion
            cy.get(cardIdentifier + ' .styled_Price-bksqcq-5 .value').should('have.text', data.price)
        }
    });
    cy.get(cardIdentifier + ' .styled__Specs-bksqcq-6 .value').eq(0).should('have.text', data.totalUsers)
    cy.get(cardIdentifier + ' .styled__Specs-bksqcq-6 .value').eq(1).should('have.text', data.totalTests)
    cy.get(cardIdentifier + ' .cta-button').should('have.text', data.buttonTitle)
    cy.get(cardIdentifier + ' .cta-button').click()
})

Cypress.Commands.add('assertLinks', (elementIdentifier, expectedTitle, expectedPath) => {
    cy.get(elementIdentifier).each((item, index) => {
        cy.get(elementIdentifier).eq(index)
            .contains(expectedTitle[index])
            .should('have.attr', 'href').and('include', `${expectedPath[index]}`) // without clicking the button, it checks for the url and its status code
            .then(href => {
                cy
                    .request(href)
                    .its('status')
                    .should('eq', 200);
            });
    })
})
