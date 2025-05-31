@echo off
echo feat: melhorias no layout e funcionalidades da loja

- Shopsidebar.tsx:
  • Adicionado botão de fechar visível apenas em telas pequenas
  • Implementado scroll lateral para visualizar todos os filtros no mobile
  • Corrigido controle de abertura/fechamento com estado externo via props

- Shop.tsx:
  • Adicionado controle de estado para abrir/fechar sidebar responsivamente
  • Estilização ajustada para centralizar os cards

- ProductCard.tsx:
  • Estrutura mantida, integrando com layout centralizado

- ProductShop.tsx:
  • Ajustado container para usar styled-component com flex-wrap e centralização
> commit-message.txt

git commit -F commit-message.txt
del commit-message.txt
