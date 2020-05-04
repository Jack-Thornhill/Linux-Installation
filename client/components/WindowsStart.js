import React from 'react'
import {Link} from 'react-router-dom'
import {styled} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const MyStyle = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
})

const Warning = styled(Button)({
  background: 'red',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: '0 30px'
})

// Add in audio on page navigation

export default class WindowsStart extends React.Component {
  render() {
    return (
      <div>
        <Warning>
          <h1>Don't die a hero.</h1>
        </Warning>
        <h4>Why do this? For Justice?</h4>
        <h4>For Honor?</h4>
        <h4>For Power?</h4>
        <p>
          If you still want to go ahead with Windows, I'd first recommend
          looking through this guide
          <br />
          by another former member of Fullstack
        </p>
        <MyStyle>
          <a href="https://gist.github.com/melissasage/c576efc87e6067a045ad619f61897c95">
            Melissa's Guide to Windows at FSA
          </a>
        </MyStyle>
      </div>
    )
  }
}
