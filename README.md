# Portfólio - Régis Picáz

[![Acessar Site](https://img.shields.io/badge/-ACESSAR_PORTFÓLIO-f2a65a?style=flat-square)](https://regispicaz.github.io/)

Portfólio pessoal de desenvolvedor full stack, com atuação também em QA e condução ágil. O site é uma página única com visualizações separadas por hash, em uma coluna de leitura de até 980px.

## ✨ Funcionalidades

- Visualizações: Início, Sobre, Serviços, Projetos, página de cada projeto e Contato
- Navegação por hash, sem recarregar a página (`#sobre`, `#servicos`, `#projetos`, `#contato`, `#eco-fit`, `#sindi`, `#paulino`)
- Página de projeto com tecnologias, status e botão para o site, quando houver
- Tema escuro com contraste pensado para leitura
- Layout responsivo, com margens laterais de 16px e sem scroll horizontal no celular
- Contato por WhatsApp, GitHub e LinkedIn

## 🗂 Projetos exibidos

- **Eco-Fit**: gestão de academias (projeto pessoal, em desenvolvimento)
- **Eco-Sindi**: gestão sindical (projeto da Ecossistemas, em desenvolvimento)
- **Nogueira Imóveis**: site imobiliário em Bagé e região (no ar)

## 🛠 Tecnologias

- HTML, CSS e JavaScript puro, sem framework nem build
- Google Fonts: Instrument Serif, Hanken Grotesk e IBM Plex Mono

**Paleta:**
- Fundo: `#0e0d11`
- Texto: `#ece5d8`
- Destaque: `#f2a65a`

## 📁 Estrutura

- `index.html`: o site inteiro. Conteúdo em três arrays no topo do script: `profile` (dados de contato), `projects` e `services`.
- `suporte.html`: página de suporte, com canal de WhatsApp e links úteis. Usa o mesmo visual do `index.html`, com estilos embutidos.

## ✏️ Como atualizar os projetos

Cada projeto é um objeto no array `projects` de `index.html`:

```js
{ id: "eco-fit", name: "Eco-Fit", kind: "Projeto pessoal", stack: ["Aplicação web"],
  lead: "Resumo curto que aparece nos cards.",
  body: ["Parágrafo do detalhe do projeto."],
  status: "Em desenvolvimento",
  url: "https://exemplo.com/" }   // opcional: mostra o botão "Acessar o site"
```

O `id` vira o endereço da página do projeto (`#eco-fit`). Os campos `url` e `status` podem ser omitidos ou ajustados conforme o caso.
