import React from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../../components/AppBar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

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
    newTexts.push(
      <Typography key={mistakeIndex} component="em" color="error">
        {text.slice(start, end)}
      </Typography>,
    )
    if (end < text.length) newTexts.push(text.slice(end))

    seletectedParagraph.push(...newTexts)
    startIndexes[paragraph] = end
  })

  return result
}

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}))

const App = (props) => {
  const classes = useStyles(props)
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
  const textWithMistakes = makeTextWithMistakes(text, mistakes)

  const renderParagraph = (paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar logoPath="logo.svg" />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <div>{textWithMistakes.map(renderParagraph)}</div>
      </main>
    </ThemeProvider>
  )
}

export default App
