import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: 30,
    [theme.breakpoints.up('sm')]: {
      height: 40,
    },
  },
}))

const CustomAppBar = (props) => {
  const classes = useStyles(props)
  const { logoPath, ...appBarProps } = props

  return (
    <AppBar {...appBarProps}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} alt="logo" src={logoPath} />
      </Toolbar>
    </AppBar>
  )
}

CustomAppBar.propTypes = {
  logoPath: PropTypes.string.isRequired,
}

export default CustomAppBar
