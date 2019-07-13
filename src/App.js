import React, { Component } from 'react'
import './App.css'

export const sortMistakes = (mistakes) => {
  const mistakesCopy = [...mistakes]
  return mistakesCopy.sort(
    (mistake, nextMistake) =>
      mistake.paragraph - nextMistake.paragraph ||
      mistake.start - nextMistake.start,
  )
}

export const makeTextWithMistakes = (text, mistakes) => {
  const texts = text.split('\n')
  const sortedMistakes = sortMistakes(mistakes)
  const result = texts.map((text) => [text])
  const startIndexes = new Array(texts.length).fill(0)

  sortedMistakes.forEach((mistake, mistakeIndex) => {
    const { start, end, paragraph } = mistake
    const text = texts[paragraph]
    const seletectedParagraph = result[paragraph]
    const selectedStart = startIndexes[paragraph]
    const newTexts = []

    seletectedParagraph.pop()

    if (start > selectedStart) newTexts.push(text.slice(selectedStart, start))
    newTexts.push(<em key={mistakeIndex}>{text.slice(start, end)}</em>)
    if (end < text.length) newTexts.push(text.slice(end))

    seletectedParagraph.push(...newTexts)
    startIndexes[paragraph] = end
  })

  return result
}

class App extends Component {
  renderParagraph = (paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  }

  render() {
    const text = 'Meu texto está erado\nSegundo palagrafo'
    const mistakes = [
      {
        start: 15,
        end: 20,
        paragraph: 0,
      },
      {
        start: 8,
        end: 17,
        paragraph: 1,
      },
    ]

    // ========================================================================
    // Sua tarefa é implementar a função que converte as variáveis `text` e
    // `mistakes` na variável `textWithMistakes`, para textos e erros
    // arbitrários. Você deve fazer isso na função
    // `makeTextWithMistakes(text, mistakes)` usando outras funções de ajuda se
    // achar necessário
    // ========================================================================

    // const textWithMistakes = [
    //   ['Meu texto está ', <em>erado</em>],
    //   ['Segundo ', <em>palagrafo</em>],
    // ]

    const textWithMistakes = makeTextWithMistakes(text, mistakes)

    return (
      <div className="App">{textWithMistakes.map(this.renderParagraph)}</div>
    )
  }
}

export default App
