// Teste que passa com sucesso - Formulário de contato - Envio do e-mail

describe('Formulário de Contato', () => {
  it('Deve enviar o formulário de contato com dados válidos', () => {
    cy.visit('http://127.0.0.1:8080/index.html'); // URL do servidor local

    // Preenche os campos do formulário de contato com dados válidos
    cy.get('#nome').type('Sthefane Nunes'); // Nome
    cy.get('#email').type('sthefane@gmail.com'); // E-mail
    cy.get('#mensagem').type('Gostaria de mais informações sobre os pacotes de viagem.'); // Mensagem


    // Clica no botão de envio do formulário
    cy.contains('button', 'Enviar').click();  // Clica no botão com o texto 'Enviar'

        // Defina o comportamento esperado para o alert
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.contains('Mensagem enviada com sucesso!');
        });
  });
});

