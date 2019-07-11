import React, {Component} from 'react';
import './App.css';

export function makeTextWithMistakes(text, mistakes) {
  // ...
}

class App extends Component {
  renderParagraph = (paragraph, i) => {
    return (
      <p key={i}>
        {paragraph}
      </p>
    );
  };

  render() {
    const text = 'Meu texto está erado\nSegundo palagrafo';
    const mistakes = [
      {
        start: 15,
        end: 20,
        paragraph: 0,
      },
      {
        start: 8,
        end: 16,
        paragraph: 1,
      },
    ];

    // ========================================================================
    // Sua tarefa é implementar a função que converte as variáveis `text` e
    // `mistakes` na variável `textWithMistakes`, para textos e erros
    // arbitrários. Você deve fazer isso na função
    // `makeTextWithMistakes(text, mistakes)` usando outras funções de ajuda se
    // achar necessário
    // ========================================================================

    const textWithMistakes = [
      [
        'Meu texto está ',
        <em>erado</em>
      ],
      [
        'Segundo ',
        <em>palagrafo</em>
      ],
    ];

    return (
      <div className="App">
        {textWithMistakes.map(this.renderParagraph)}
      </div>
    );
  }
}

export default App;
