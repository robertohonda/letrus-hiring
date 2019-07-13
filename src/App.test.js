import React from 'react'
import { shallow } from 'enzyme'
import App, { makeTextWithMistakes, sortMistakes } from './App'

describe('App', () => {
  it('Should render correctly', () => {
    const component = shallow(<App />)

    expect(component).toMatchSnapshot()
  })
})

describe('sortMistakes', () => {
  const mocks = [
    {
      input: [],
      output: [],
    },
    {
      input: [
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
    },
    {
      input: [
        { start: 2, end: 21, paragraph: 0 },
        { start: 130, end: 140, paragraph: 0 },
        { start: 2, end: 9, paragraph: 1 },
        { start: 51, end: 61, paragraph: 1 },
        { start: 25, end: 35, paragraph: 0 },
        { start: 81, end: 88, paragraph: 1 },
        { start: 18, end: 28, paragraph: 2 },
        { start: 35, end: 44, paragraph: 2 },
        { start: 36, end: 43, paragraph: 1 },
        { start: 78, end: 93, paragraph: 2 },
        { start: 38, end: 47, paragraph: 0 },
        { start: 15, end: 30, paragraph: 1 },
        { start: 0, end: 11, paragraph: 2 },
        { start: 87, end: 92, paragraph: 0 },
        { start: 51, end: 62, paragraph: 2 },
        { start: 96, end: 107, paragraph: 1 },
        { start: 63, end: 76, paragraph: 0 },
        { start: 96, end: 108, paragraph: 0 },
        { start: 129, end: 137, paragraph: 2 },
      ],
      output: [
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
          end: 76,
          paragraph: 0,
        },
        {
          start: 87,
          end: 92,
          paragraph: 0,
        },
        {
          start: 96,
          end: 108,
          paragraph: 0,
        },
        {
          start: 130,
          end: 140,
          paragraph: 0,
        },
        {
          start: 2,
          end: 9,
          paragraph: 1,
        },
        {
          start: 15,
          end: 30,
          paragraph: 1,
        },
        {
          start: 36,
          end: 43,
          paragraph: 1,
        },
        {
          start: 51,
          end: 61,
          paragraph: 1,
        },
        {
          start: 81,
          end: 88,
          paragraph: 1,
        },
        {
          start: 96,
          end: 107,
          paragraph: 1,
        },
        {
          start: 0,
          end: 11,
          paragraph: 2,
        },
        {
          start: 18,
          end: 28,
          paragraph: 2,
        },
        {
          start: 35,
          end: 44,
          paragraph: 2,
        },
        {
          start: 51,
          end: 62,
          paragraph: 2,
        },
        {
          start: 78,
          end: 93,
          paragraph: 2,
        },
        {
          start: 129,
          end: 137,
          paragraph: 2,
        },
      ],
    },
    {
      input: [
        { start: 0, end: 26, paragraph: 5 },
        { start: 18, end: 25, paragraph: 2 },
        { start: 6, end: 9, paragraph: 4 },
        { start: 0, end: 12, paragraph: 1 },
        { start: 0, end: 12, paragraph: 0 },
        { start: 0, end: 3, paragraph: 3 },
        { start: 17, end: 26, paragraph: 0 },
        { start: 0, end: 5, paragraph: 6 },
      ],
      output: [
        {
          start: 0,
          end: 12,
          paragraph: 0,
        },
        {
          start: 17,
          end: 26,
          paragraph: 0,
        },
        {
          start: 0,
          end: 12,
          paragraph: 1,
        },
        {
          start: 18,
          end: 25,
          paragraph: 2,
        },
        {
          start: 0,
          end: 3,
          paragraph: 3,
        },
        {
          start: 6,
          end: 9,
          paragraph: 4,
        },
        {
          start: 0,
          end: 26,
          paragraph: 5,
        },
        {
          start: 0,
          end: 5,
          paragraph: 6,
        },
      ],
    },
  ]

  it('Should sort mistakes correctly', () => {
    mocks.forEach(mock => {
      const { input, output } = mock
      const result = sortMistakes(input)

      expect(result).toEqual(output)
    })
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
          end: 76,
          paragraph: 0,
        },
        {
          start: 87,
          end: 92,
          paragraph: 0,
        },
        {
          start: 96,
          end: 108,
          paragraph: 0,
        },
        {
          start: 130,
          end: 140,
          paragraph: 0,
        },
        {
          start: 2,
          end: 9,
          paragraph: 1,
        },
        {
          start: 15,
          end: 30,
          paragraph: 1,
        },
        {
          start: 36,
          end: 43,
          paragraph: 1,
        },
        {
          start: 51,
          end: 61,
          paragraph: 1,
        },
        {
          start: 81,
          end: 88,
          paragraph: 1,
        },
        {
          start: 96,
          end: 107,
          paragraph: 1,
        },
        {
          start: 0,
          end: 11,
          paragraph: 2,
        },
        {
          start: 18,
          end: 28,
          paragraph: 2,
        },
        {
          start: 35,
          end: 44,
          paragraph: 2,
        },
        {
          start: 51,
          end: 62,
          paragraph: 2,
        },
        {
          start: 78,
          end: 93,
          paragraph: 2,
        },
        {
          start: 129,
          end: 137,
          paragraph: 2,
        },
      ],
      output: [
        [
          'O ',
          <em key={0}>letlamento impazcta</em>,
          ' na ',
          <em key={1}>autoeztima</em>,
          ' e ',
          <em key={2}>confianza</em>,
          ' do aluno e tem ',
          <em key={3}>conzequências</em>,
          ' em todo o ',
          <em key={4}>cicro</em>,
          ' de ',
          <em key={5}>aprendiçagem</em>,
          ' escolar, em todas as ',
          <em key={6}>diziplinas</em>,
          '.',
        ],
        [
          'A ',
          <em key={7}>esclita</em>,
          ' é um ',
          <em key={8}>moztor ezencial</em>,
          ' para ',
          <em key={9}>ampriar</em>,
          ' nossas ',
          <em key={10}>perzepções</em>,
          ' de mundo e, assim, ',
          <em key={11}>ampriar</em>,
          ' nossas ',
          <em key={12}>capazidades</em>,
          ' de ação e escolhas.',
        ],
        [
          <em key={13}>Acleditamos</em>,
          ' que a ',
          <em key={14}>capazidade</em>,
          ' de se ',
          <em key={15}>explessar</em>,
          ' é uma ',
          <em key={16}>competênzia</em>,
          ' fundamental ao ',
          <em key={17}>desenvorvimento</em>,
          ' cognitivo, humano e social de todo ',
          <em key={18}>individo</em>,
          '.',
        ],
      ],
    },
    {
      text:
        'Menha terrra tem parmeiras\nOnder cantta o Sabiá\nAs aves, que aqui gorgeia\nNao gorjeiam como lá.\nNosso cér tem mais estrelas\nNozas varseas tm ms frores\nNozos bosques têm mais vida\nNossa vida mais amores.',
      mistakes: [
        {
          start: 0,
          end: 12,
          paragraph: 0,
        },
        {
          start: 17,
          end: 26,
          paragraph: 0,
        },
        {
          start: 0,
          end: 12,
          paragraph: 1,
        },
        {
          start: 18,
          end: 25,
          paragraph: 2,
        },
        {
          start: 0,
          end: 3,
          paragraph: 3,
        },
        {
          start: 6,
          end: 9,
          paragraph: 4,
        },
        {
          start: 0,
          end: 26,
          paragraph: 5,
        },
        {
          start: 0,
          end: 5,
          paragraph: 6,
        },
      ],
      output: [
        [<em key={0}>Menha terrra</em>, ' tem ', <em key={1}>parmeiras</em>],
        [<em key={2}>Onder cantta</em>, ' o Sabiá'],
        ['As aves, que aqui ', <em key={3}>gorgeia</em>],
        [<em key={4}>Nao</em>, ' gorjeiam como lá.'],
        ['Nosso ', <em key={5}>cér</em>, ' tem mais estrelas'],
        [<em key={6}>Nozas varseas tm ms frores</em>],
        [<em key={7}>Nozos</em>, ' bosques têm mais vida'],
        ['Nossa vida mais amores.'],
      ],
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
