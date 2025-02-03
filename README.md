# Automação de Testes - Formulário de Contato

Este projeto contém automações de testes utilizando o **Cypress** para testar um formulário de contato. Os testes abordam o envio de dados e a validação do nome inserido no formulário.

## Objetivo

O objetivo principal deste repositório é demonstrar a implementação de testes automatizados para um formulário de contato em um site de orçamento de viagem, verificando cenários de sucesso e falha.

### Cenários de Testes

1. **Teste que Falha Intencionalmente - Formulário de Contato - Nome Inválido (Menos de 3 Caracteres)**  
   - Descrição: Este teste verifica se o formulário não permite o envio quando o nome inserido tem menos de 3 caracteres. 
   - Comportamento Esperado: O teste falha intencionalmente com a mensagem de erro "O nome deve ter pelo menos 3 caracteres."

2. **Teste que Passa com Sucesso - Formulário de Contato - Envio do E-mail**  
   - Descrição: Este teste verifica se o formulário é enviado com sucesso quando os dados válidos são fornecidos.
   - Comportamento Esperado: O teste passa com a confirmação "Mensagem enviada com sucesso!"

## Como Executar os Testes

### Passo 1: Preparar o Ambiente

1. Clone o repositório:
    ```bash
    git clone https://github.com/Teffz/viagem-facil-tests-automation.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd viagem-facil-tests-automation
    ```

3. Instale as dependências necessárias:
    ```bash
    npm install
    ```

4. Inicie o servidor local:
    ```bash
    npm run start-server
    ```

### Passo 2: Executar os Testes

1. Em outro terminal, execute os testes do Cypress:
    ```bash
    npx cypress open
    ```

2. O Cypress irá abrir, permitindo que você execute os testes visualmente. Escolha os testes desejados na interface do Cypress.

## Tecnologias Utilizadas

- **Cypress**: Framework para automação de testes end-to-end.
- **JavaScript**: Linguagem de programação utilizada para os testes.

