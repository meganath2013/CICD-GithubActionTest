describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://novascotia.flow.qa.canimmunize.dev')

    cy.log('logging into NS-CanI console')
    cy.get('input[id="username"]').type('meganath@canimmunize.ca')
    cy.get('input[id="password"]').type('Mice@2020')
    
    cy.get('button').contains('Continue').click()

    
    //cy.visit('chrome://extensions')
  })
})