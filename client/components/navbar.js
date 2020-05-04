import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
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
  background: 'lightgreen',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: '0 30px'
})

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <Header>
      <h1>Using Linux/Windows @ FSA Installation Guide</h1>
    </Header>
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
          <MyStyle>
            <Link to="/home">Home</Link>
          </MyStyle>
          <MyStyle>
            <Link to="/linuxStart">The Linux Installation Guide</Link>
          </MyStyle>
          <MyStyle>
            <Link to="/linuxMintAppConfigure">
              Configuring your development (Linux)
            </Link>
          </MyStyle>
          <MyStyle>
            <Link to="/windowsStart">The Windows Setup Guide</Link>
          </MyStyle>
          <MyStyle>
            <Link to="/dualBoot">Guide To Dual Booting Win/Linux</Link>
          </MyStyle>
          <MyStyle>
            <Link to="/windowsRestore">
              Oh no, I've wiped my Windows and I can't get up.
            </Link>
          </MyStyle>
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
