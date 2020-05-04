import React from 'react'
import {Link} from 'react-router-dom'
import {styled} from '@material-ui/core/styles'
import {Button, TableCell} from '@material-ui/core'

const Header = styled(TableCell)({
  background: '#228B22',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
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

export default class LinuxStart extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <h1>Starting FSA with Linux</h1>
        </Header>
        <div>
          <p>
            Thank you for heeding my advice and taking the plunge into Linux!
            <br />
            Here you will choose whether you need help with Installation, or if
            you just need help, formatting and downloading the various
            applications that you will use with Fullstack and your coding
            career. <br /> Instead of using another popular Linux Distrubution,
            Ubuntu, I will be having you try using Linux Mint, which I find even
            simpler to use and the shock to the system for Windows Users is
            small, since the layout is so similar.
          </p>
        </div>
        <div>
          <h4>Click Below to See How to Install Linux Mint on your computer</h4>
          <MyStyle>
            <Link to="/linuxMintInstall"> Install Guide</Link>
          </MyStyle>
        </div>
        <div>
          <h4>Click Below to Configure Development Apps</h4>
          <MyStyle>
            <Link to="/linuxMintAppConfigure">App Configuration</Link>
          </MyStyle>
        </div>
      </div>
    )
  }
}
