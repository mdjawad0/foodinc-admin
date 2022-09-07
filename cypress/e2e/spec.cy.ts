describe('Admin Web App', () => {
  it('Should have title page', () => {
    cy.visit('/')
    cy.contains('Food Inc')
    cy.contains('Login')
    cy.contains('Admin Dashboard')
  })
})
