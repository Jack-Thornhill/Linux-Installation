import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Linux Installation Guide</h1>
    <h1>Hello, and welcome to Jack's guide to surviving FSA with a PC</h1>
    <div>
      <p>
        In this guide I'm going to layout a walkthrough for using either a Linux
        or Windows OS and the steps that you'll take to get your machine up and
        running with vscode, postgresql, slack, chrome, zoom, npm/node and more.
        If you're coming into FSA with a PC your first inclination may be to use
        Windows. However, I would HIGHLY recommend opting to use a Linux
        operating system instead. The setup may look like it will take longer at
        the beginning, but a lot of what you'll need for coding will already be
        included on the Linux installation, and really, the installation, along
        with all the downloaded applications you'll need will be on Linux. If
        you still want to use Windows, recognize that you'll need to use a tool
        called WSL, or Windows Subsystem for Linux, that is essentially running
        a version of Linux on your Windows machine, that will allow you access
        to UNIX commands that will be similar to what your classmates are using
        on their macbooks, so for the most part you'll be able to follow along.
      </p>
    </div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <div>
            <Link to="/linuxStart">
              <h5>
                Click Here to Follow Linux Installation Guide (Also, make sure
                to have a usb with 8gb of memory)
              </h5>
            </Link>
          </div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
