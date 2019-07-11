# Letrus Teste de Habilidades Práticas
Esse é um teste de conhecimento em JavaScript do time de desenvolvimento da
Letrus.

Nesse teste queremos que você implemente uma **visualização** básica de erros
ortográficos em um texto. Essencialmente, você irá receber uma lista de erros
ortográficos com suas posições de início e fim e os parágrafos e teria que
mostrar na tela o texto com os erros.

## Como instalar o projeto e desenvolver sua solução
Você deve encontrar o esqueleto do problema e sua descrição. O esqueleto é
baseado em `React.js` e EcmaScript6, a última versão do JavaScript. O arquivo
que você precisa editar é o `src/App.js`.

Você pode ou não quebrar a solução em mais arquivos; não é o ponto desse
exercício.

Para instalar o projeto no seu computador você vai precisar:

- Clonar o projeto na sua máquina `git clone ...` (vamos te mandar instruções se
  não for familiar com `git`)
- Instalar o Node.js https://nodejs.org/en/download/
- Rodar `npm install` na raiz do projeto

Para rodar o servidor de desenvolvimento do projeto rode:
```
npm run start
```

Para rodar testes unitários usando `jest` rode:
```
npm test
```

## O que deve funcionar?
- Marcadores no meio de frases
- Marcadores no começo de frases
- Marcadores no final de frases
- Marcadores em parágrafos arbitrários

## Pontos extras e dicas para uma boa solução
* Faça o texto errado estar sublinhado em vermelho.
  - Vai ficar bonito e mais próximo do que seria seu trabalho na realidade
  - Pesquise por "CSS" e "React.js Styling and CSS"
* Adicione testes unitários.
  - Você vai economizar tempo com isso
  - Pesquise por "Jest"
* Minimize/explicite o uso de estado local/global
  - Estado local/global implícito fazem o código ser mais difícil de refatorar,
    manter, entender, paralelizar etc. queremos minizar isso o máximo possível
  - Tente usar `const` no lugar de `let`/`var` e ver onde isso te leva; aprenda
    a diferença entre os 3
  - É possível resolver esse problema sem nenhuma variável, só constantes
  - Pesquise por "Programação funcional" e "Programação funcional em JavaScript"
* Resova warnings que possam aparecer quando você gerar o JSX
  - Pesquise por "React.js Keys"
