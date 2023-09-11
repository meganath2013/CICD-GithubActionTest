describe('empty spec', () => {
  it('passes', () => {
    cy.visit('google.co.in')

    cy.log('logging into gmail document')
    cy.get('input[type="email"]').type('meganathtest@gmail.com')
    cy.get('button').contains('Next').click()

    
    //cy.visit('chrome://extensions')
  })
})