// Teste que Falha Intencionalmente - Formulário de contato - Nome inválido (menos de 3 caracteres)



describe('Formulário de Contato', () => {
    it('Não deve permitir o envio com nome inválido', () => {
      cy.visit('http://127.0.0.1:8080/index.html'); // Substitua pelo URL correto
  
      cy.get('#nome').type('Jo'); // Nome com menos de 3 caracteres
      cy.get('#email').type('email@exemplo.com');
      cy.get('#mensagem').type('Mensagem de teste');
  
      // Captura o alerta e verifica se a mensagem está correta
      cy.window().then((win) => {
        cy.stub(win, 'alert').callsFake((msg) => {
          expect(msg).to.include('O nome deve ter pelo menos 3 caracteres.');
        });
      });
  
      cy.get('#contatoForm').submit(); // Envia o formulário
    });
  });
  