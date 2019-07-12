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
  const paragraphs = text.split('\n')
  const sortedMistakes = sortMistakes(mistakes)
  const result = paragraphs.map((paragraph) => [paragraph])

  sortedMistakes.forEach((mistake) => {
    const { start, end, paragraph } = mistake
    const resultParagraph = result[paragraph]
    const selectedParagraph = paragraphs[paragraph]

    if (resultParagraph.length === 1)
      resultParagraph[0] = selectedParagraph.slice(0, start)
    else {
      const lastIndex = resultParagraph.length - 1
      // console.log(mistake, resultParagraph)
      // console.log('aaaaa', JSON.stringify(selectedParagraph))
      console.log(mistake, resultParagraph[lastIndex])
      resultParagraph.push(
        selectedParagraph.slice(resultParagraph[lastIndex].length, start),
      )
    }

    resultParagraph.push(<em>{selectedParagraph.slice(start, end)}</em>)
  })

  return result
}

// console.log(
//   sortMistakes([
//     {
//       start: 15,
//       end: 20,
//       paragraph: 0,
//     },
//     {
//       start: 8,
//       end: 16,
//       paragraph: 1,
//     },
//   ]),
// )

class App extends Component {
  renderParagraph = (paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  }
  // ...
  render() {
    const text = 'Meu texto está erado\nSegundo palagrafo'
    const mistakes = [
      {
        start: 15,
        end: 20,
        paragraph: 0,
      },
      {
        start: 0,
        end: 5,
        paragraph: 0,
      },
      {
        start: 8,
        end: 16,
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

    // console.log(textWithMistakes)

    return (
      <div className="App">{textWithMistakes.map(this.renderParagraph)}</div>
    )
  }
}

export default App
