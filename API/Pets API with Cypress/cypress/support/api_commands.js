Cypress.Commands.add('api_getById', pet => cy.request({
    method: 'GET',
    url: `/`+pet.id,
}))

Cypress.Commands.add('api_create', pet => cy.request({
    method: 'POST',
    url: `/`,
    body: pet,
}))

Cypress.Commands.add('api_update', pet => cy.request({
    method: 'PUT',
    url: `/`,
    body: pet,
}))

Cypress.Commands.add('api_delete', pet => cy.request({
    method: 'DELETE',
    url: `/`+pet.id,
    body: pet,
}))