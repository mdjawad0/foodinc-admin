class LoginInPage {
    visit() {
      cy.visit('/login');
    }
  
    fillEmail(value) {
      const field =  cy.get('input[formControlName=email]');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('input[formControlName=password]');
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = cy.get('#btn1')
      button.click();
      cy.url().should('be.equal', 'http://localhost:4200/users')

    }

  }
  
  export default LoginInPage;