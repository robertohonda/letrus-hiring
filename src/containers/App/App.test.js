import React from 'react'
import { shallow } from 'enzyme'
import App, { makeTextWithMistakes, sortMistakes } from './App'
import Typography from '@material-ui/core/Typography'

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
    mocks.forEach((mock) => {
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
        [
          'Meu texto está ',
          <Typography key={0} color="error" component="em">
            erado
          </Typography>,
        ],
        [
          'Segundo ',
          <Typography key={1} color="error" component="em">
            palagrafo
          </Typography>,
        ],
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
          <Typography key={0} color="error" component="em">
            letlamento impazcta
          </Typography>,
          ' na ',
          <Typography key={1} color="error" component="em">
            autoeztima
          </Typography>,
          ' e ',
          <Typography key={2} color="error" component="em">
            confianza
          </Typography>,
          ' do aluno e tem ',
          <Typography key={3} color="error" component="em">
            conzequências
          </Typography>,
          ' em todo o ',
          <Typography key={4} color="error" component="em">
            cicro
          </Typography>,
          ' de ',
          <Typography key={5} color="error" component="em">
            aprendiçagem
          </Typography>,
          ' escolar, em todas as ',
          <Typography key={6} color="error" component="em">
            diziplinas
          </Typography>,
          '.',
        ],
        [
          'A ',
          <Typography key={7} color="error" component="em">
            esclita
          </Typography>,
          ' é um ',
          <Typography key={8} color="error" component="em">
            moztor ezencial
          </Typography>,
          ' para ',
          <Typography key={9} color="error" component="em">
            ampriar
          </Typography>,
          ' nossas ',
          <Typography key={10} color="error" component="em">
            perzepções
          </Typography>,
          ' de mundo e, assim, ',
          <Typography key={11} color="error" component="em">
            ampriar
          </Typography>,
          ' nossas ',
          <Typography key={12} color="error" component="em">
            capazidades
          </Typography>,
          ' de ação e escolhas.',
        ],
        [
          <Typography key={13} color="error" component="em">
            Acleditamos
          </Typography>,
          ' que a ',
          <Typography key={14} color="error" component="em">
            capazidade
          </Typography>,
          ' de se ',
          <Typography key={15} color="error" component="em">
            explessar
          </Typography>,
          ' é uma ',
          <Typography key={16} color="error" component="em">
            competênzia
          </Typography>,
          ' fundamental ao ',
          <Typography key={17} color="error" component="em">
            desenvorvimento
          </Typography>,
          ' cognitivo, humano e social de todo ',
          <Typography key={18} color="error" component="em">
            individo
          </Typography>,
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
        [
          <Typography key={0} color="error" component="em">
            Menha terrra
          </Typography>,
          ' tem ',
          <Typography key={1} color="error" component="em">
            parmeiras
          </Typography>,
        ],
        [
          <Typography key={2} color="error" component="em">
            Onder cantta
          </Typography>,
          ' o Sabiá',
        ],
        [
          'As aves, que aqui ',
          <Typography key={3} color="error" component="em">
            gorgeia
          </Typography>,
        ],
        [
          <Typography key={4} color="error" component="em">
            Nao
          </Typography>,
          ' gorjeiam como lá.',
        ],
        [
          'Nosso ',
          <Typography key={5} color="error" component="em">
            cér
          </Typography>,
          ' tem mais estrelas',
        ],
        [
          <Typography key={6} color="error" component="em">
            Nozas varseas tm ms frores
          </Typography>,
        ],
        [
          <Typography key={7} color="error" component="em">
            Nozos
          </Typography>,
          ' bosques têm mais vida',
        ],
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
