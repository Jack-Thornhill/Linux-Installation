import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {styled} from '@material-ui/core/styles'
import {Button, TableCell} from '@material-ui/core'

const Header = styled(TableCell)({
  background: 'black',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'red',
  height: 48,
  padding: '0 30px'
})

const MyStyle = styled(Button)({
  background: 'lightblue',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
})

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div>
      <Header>
        <h1>Hello, and welcome to Jack's guide to surviving FSA with a PC!</h1>
      </Header>
      <div>
        <p>
          In this guide I'm going to layout a walkthrough for using either a
          Linux or Windows OS and the steps that you'll take to get your machine
          up and running with vscode, postgresql, slack, chrome, zoom, npm/node
          and more. <br /> If you're coming into FSA with a PC your first
          inclination may be to use Windows. However, I would HIGHLY recommend
          opting to use a Linux operating system instead. <br /> The setup may
          look like it will take longer at the beginning, but a lot of what
          you'll need for coding will already be included on the Linux
          installation.<br /> If you still want to use Windows, recognize that
          you'll need to use a tool called WSL, or Windows Subsystem for Linux.{' '}
          <br /> This is essentially running a version of Linux on your Windows
          machine, that will allow you access to UNIX commands that will be
          similar to what your classmates are using on their macbooks, so for
          the most part you'll be able to follow along.
        </p>
      </div>
      <div>
        <h4>
          Click Below to Follow The Linux Installation Guide (Also, make sure to
          have a usb with 8gb of memory)
        </h4>
        <MyStyle>
          <Link to="/linuxStart">Linux Installation</Link>
        </MyStyle>
      </div>
      <h4>Otherwise, use this link to Join the Windows Struggle Squad</h4>
      <div>
        <MyStyle>
          <Link to="/windowsStart">Windows Setup</Link>
        </MyStyle>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)
