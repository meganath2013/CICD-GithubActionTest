
describe('Log in to ClinicFlow console', () => {

  it('login as Super Admin', () => {
    cy.visit('/');
    /* Console UI login as Super Admin */
    cy.get('input[name="username"]').type(Cypress.env('username'));
    cy.get('input[name="password"]').type(Cypress.env('password'), { log: false });
    cy.get('button').contains('Continue').click({force:true});

    /* Validate user lands on home page */
    cy.url().should('contain', '/home');
    cy.contains('Welcome to ClinicFlow');
  })
})