

describe('Log in to ClinicFlow console', () => {

  it('login as Super Admin', () => {
    cy.visit('https://novascotia.flow.qa.canimmunize.dev');

    /* Console UI login as Super Admin */
    cy.get('input[name="username"]').type('meganath@canimmunize.ca');
    cy.get('input[name="password"]').type('Mice@2020', { log: false });
    cy.get('button').contains('Continue').click({force:true});

    /* Validate user lands on home page */
    cy.url().should('contain', '/home');
    cy.contains('Welcome to ClinicFlow');
  })
})