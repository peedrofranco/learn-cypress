describe('Login no SauceDemo', () => {
  it('Deve fazer login com sucesso', () => {
    // Visitar a página de login
    cy.visit('https://www.saucedemo.com');

    // Preencher o formulário de login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    // cy.get('#login-button').click();

    // // Verificar se o login foi bem-sucedido
    // cy.url().should('include', '/inventory.html');
    // cy.get('.product_label').should('contain', 'Products');
  });

  // it('Deve exibir mensagem de erro para login inválido', () => {
  //   // Visitar a página de login
  //   cy.visit('https://www.saucedemo.com');

  //   // Preencher o formulário de login com credenciais inválidas
  //   cy.get('#user-name').type('usuario_invalido');
  //   cy.get('#password').type('senha_invalida');
  //   cy.get('#login-button').click();

  //   // Verificar se a mensagem de erro é exibida
  //   cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  // });
});
