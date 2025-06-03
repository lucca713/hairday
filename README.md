# 💇‍♂️ HairDay

**HairDay** é um sistema simples de agendamento de horários para salão de cabeleireiro, feito com JavaScript moderno, Webpack, Babel e JSON. O objetivo é facilitar o uso com um executável que já carrega todas as dependências, sem precisar rodar `npm install` manualmente.

## 🚀 Funcionalidades

- Cadastro de clientes
- Marcação e visualização de horários
- Salvamento em JSON local
- Interface interativa (melhorias com jQuery em andamento)
- Empacotamento completo com Webpack
- Executável para facilitar o uso em qualquer máquina

## 🛠️ Tecnologias

- JavaScript (ES6+)
- Webpack
- Babel
- JSON
- jQuery *(em breve para melhorar a interação com o DOM)*
- `pkg` para gerar o executável

## 📦 Instalação

```bash
git clone https://github.com/lucca713/hairday.git
cd hairday
npm install
npm run start        # Inicia em modo dev
npm run build        # Gera versão final com Webpack
npm run package      # (Em breve) Gera executável com todas as dependências
