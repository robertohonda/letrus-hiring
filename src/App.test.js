import React from 'react'
import { shallow } from 'enzyme'
import App, { makeTextWithMistakes } from './App'

describe('App', () => {
  it('Should render correctly', () => {
    const component = shallow(<App />)

    expect(component).toMatchSnapshot()
  })
})

describe('makeTextWithMistakes', () => {
  const mocks = [
    {
      text: 'Meu texto está erado\nSegundo palagrafo',
      mistakes: [
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
      ],
      output: [
        ['Meu texto está ', <em key={0}>erado</em>],
        ['Segundo ', <em key={1}>palagrafo</em>],
      ],
    },
    {
      text:
        'Todo aluno pode aprender a ler e a escrever plenamente, sem exceções.',
      mistakes: [],
      output: [
        [
          'Todo aluno pode aprender a ler e a escrever plenamente, sem exceções.',
        ],
      ],
    },
    {
      text:
        'O letlamento impazcta na autoeztima e confianza do aluno e tem conzequências em todo o cicro de aprendiçagem escolar, em todas as diziplinas.\nA esclita é um moztor ezencial para ampriar nossas perzepções de mundo e, assim, ampriar nossas capazidades de ação e escolhas.\nAcleditamos que a capazidade de se explessar é uma competênzia fundamental ao desenvorvimento cognitivo, humano e social de todo individo.',
      mistakes: [
        {
          start: 2,
          end: 21,
          paragraph: 0,
        },
        {
          start: 25,
          end: 35,
          paragraph: 0,
        },
        {
          start: 38,
          end: 47,
          paragraph: 0,
        },
        {
          start: 63,
          end: 75,
          paragraph: 0,
        },
        {
          start: 87,
          end: 92,
          paragraph: 0,
        },
      ],
      output: [],
    },
  ]

  it('Should return text with mistakes correctly', () => {
    mocks.forEach((mock) => {
      const { text, mistakes, output } = mock
      const result = makeTextWithMistakes(text, mistakes)
      expect(result).toEqual(output)
    })
  })
})
