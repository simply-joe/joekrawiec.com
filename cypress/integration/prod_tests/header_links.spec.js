describe('My First Test', () => {
    it('clicking "blog" navigates to the posts page', () => {
      cy.visit('https://joekrawiec.com')
  
      cy.contains('Blog').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/posts')
    })
  })