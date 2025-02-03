# Gerador de Senhas com React-Native

Um aplicativo de geração e armazenamento de senhas desenvolvido com **React Native** e **Expo**.

## 📜 Descrição

Este aplicativo permite que os usuários gerem senhas seguras e as salvem no armazenamento local do dispositivo utilizando **AsyncStorage**. A interface é simples e intuitiva, garantindo facilidade no uso e segurança no gerenciamento das senhas.

## 🚀 Funcionalidades

- Gerar senhas aleatórias com critério de tamanho.
- Salvar senhas localmente usando **AsyncStorage**.
- Listar senhas salvas.
- Excluir senhas armazenadas pressionando em cima e mantendo por um tempo.
- Futuramente possuirá tema escuro.

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**

## 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório:

   ```sh
   git clone git@github.com:KaikAp/Gerador-de-Senhas-com-React-Native.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd Gerador-de-Senhas-com-React-Native/
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn install
   ```

4. Inicie o aplicativo:

   ```sh
   npx expo start
   ```

## 📱 Como Usar

1. Abra o aplicativo e selecione os critérios para a geração da senha.
2. Pressione o botão "Gerar Senha" para criar uma senha aleatória.
3. Salve a senha no armazenamento local.
4. Acesse a lista de senhas salvas para visualizar ou excluir suas senhas.

## 🔒 Segurança

- As senhas são armazenadas apenas no **AsyncStorage**, sem transmissão para servidores.
- Para maior segurança, recomenda-se a implementação de criptografia no armazenamento local.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com este projeto! Para isso:

1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature:
   ```sh
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```sh
   git commit -m "Minha nova feature"
   ```
4. Faça push para a branch criada:
   ```sh
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo **LICENSE** para mais detalhes.

