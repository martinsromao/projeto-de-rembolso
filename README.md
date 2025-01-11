# Sistema de Reembolso

Um aplicativo web para gerenciamento de solicitações de reembolso de despesas.

## Funcionalidades

- Adicionar novas despesas com:
  - Título da despesa
  - Categoria (Alimentação, Hospedagem, Transporte, Serviços, Outros)  
  - Valor em R$
- Visualizar lista de despesas cadastradas
- Remover despesas individualmente
- Cálculo automático do total de despesas
- Formatação automática de valores monetários
- Layout responsivo

## Tecnologias utilizadas

- HTML5
- CSS3 (com variáveis CSS para tema consistente)
- JavaScript vanilla
- Fonte Open Sans do Google Fonts

## Estrutura do projeto
assets/ # Imagens e ícones style/ # Arquivos CSS ├── global.css # Estilos globais e variáveis ├── header.css # Estilos do cabeçalho
├── index.css # Arquivo principal de CSS ├── request.css # Estilos do formulário └── cont-direito.css # Estilos da lista de despesas index.html # Página principal script.js # Lógica JavaScript


## Como usar

1. Preencha o formulário com os dados da despesa
2. Clique em "Adicionar despesa" 
3. A despesa será adicionada à lista
4. Para remover uma despesa, clique no ícone de remover
5. O total será atualizado automaticamente

## Detalhes da implementação

- Utiliza LocalStorage para persistência dos dados
- Formatação de moeda no padrão brasileiro (R$)
- Validação de formulário
- Cálculos automáticos de totais
- Design responsivo para diferentes tamanhos de tela

Para executar o projeto localmente, basta abrir o arquivo `index.html` em um navegador web.
