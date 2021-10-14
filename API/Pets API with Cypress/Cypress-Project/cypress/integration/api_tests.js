const faker = require('faker')

describe('Checking valid data in /pet', () => {
  const pet = {
    id: faker.datatype.number({ min: 800, max: 900 }),
    category: { id: faker.datatype.number(), name: faker.lorem.word() },
    name: faker.name.firstName(),
    photoUrls: [faker.internet.url()],
    tags: [{ id: faker.datatype.number(), name: faker.lorem.word() }],
    status: faker.lorem.word()
  };

  const updatedPet = {
    id: pet.id,
    category: { id: faker.datatype.number(), name: faker.lorem.word() },
    name: faker.name.firstName(),
    photoUrls: [faker.internet.url()],
    tags: [{ id: faker.datatype.number(), name: faker.lorem.word() }],
    status: faker.lorem.word()
  };

  it('tests POST method', () => {
    cy.api_create(pet).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('verifies response type', () => {
    cy.api_getById(pet).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.a('object');
      expect(response.body.id).to.be.a('number');
      expect(response.body.category).to.be.a('object');
      expect(response.body.name).to.be.a('string');
      expect(response.body.photoUrls).to.be.a('array');
      expect(response.body.tags).to.be.a('array');
      expect(response.body.status).to.be.a('string');
    });
  });

  it('tests PUT method', () => {
    cy.api_update(updatedPet).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('verifies response data', () => {
    cy.api_getById(updatedPet).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(updatedPet.id);
      expect(response.body.category.id).to.equal(updatedPet.category.id);
      expect(response.body.category.name).to.equal(updatedPet.category.name);
      expect(response.body.name).to.equal(updatedPet.name);
      expect(response.body.photoUrls[0]).to.equal(updatedPet.photoUrls[0]);
      expect(response.body.tags[0].id).to.equal(updatedPet.tags[0].id);
      expect(response.body.tags[0].name).to.equal(updatedPet.tags[0].name);
      expect(response.body.status).to.equal(updatedPet.status);
    });
  });

  it('tests DELETE method', () => {
    cy.api_delete(pet).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});