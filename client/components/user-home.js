import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div>
      <h1>Hello, and welcome to Jack's guide to surviving FSA with a PC</h1>
      <div>
        <p>
          In this guide I'm going to layout a walkthrough for using either a
          Linux or Windows OS and the steps that you'll take to get your machine
          up and running with vscode, postgresql, slack, chrome, zoom, npm/node
          and more. If you're coming into FSA with a PC your first inclination
          may be to use Windows. However, I would HIGHLY recommend opting to use
          a Linux operating system instead. The setup may look like it will take
          longer at the beginning, but a lot of what you'll need for coding will
          already be included on the Linux installation, and really, the
          installation, along with all the downloaded applications you'll need
          will be on Linux. If you still want to use Windows, recognize that
          you'll need to use a tool called WSL, or Windows Subsystem for Linux,
          that is essentially running a version of Linux on your Windows
          machine, that will allow you access to UNIX commands that will be
          similar to what your classmates are using on their macbooks, so for
          the most part you'll be able to follow along.
        </p>
      </div>
      <div>
        <Link to="/linuxStart">
          <h2>
            Click Here to Follow Linux Installation Guide (Also, make sure to
            have a usb with 8gb of memory)
          </h2>
        </Link>
      </div>
      <div>
        <Link to="/windowsStart">
          <h2>Click Here to Join the Windows Struggle Squad</h2>
        </Link>
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
