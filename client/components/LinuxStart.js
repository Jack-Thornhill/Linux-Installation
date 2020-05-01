import React from 'react'
import {Link} from 'react-router-dom'

export default class LinuxStart extends React.Component {
  render() {
    return (
      <div>
        <h1>Starting FSA with Linux</h1>
        <div>
          <body>
            Thank you for heeding my advice and taking the plunge into Linux!
            Here you will choose whether you need help with Installation, or if
            you just need help, formatting and downloading the various
            applications that you will use with Fullstack and your coding
            career. Instead of using another popular Linux Distrubution, Ubuntu,
            I will be having you try using Linux Mint, which I find even simpler
            to use and the shock to the system for Windows Users is small, since
            the layout is so similar.
          </body>
        </div>
        <div>
          <Link to="/linuxMintInstall">
            <h1>
              Click Here to See How to Install Linux Mint on your computer
            </h1>
          </Link>
        </div>
        <div>
          <Link to="/linuxMintAppConfigure">
            <h1>
              Click Here to Move onto downloading and setting up apps on Linux
              Mint!
            </h1>
          </Link>
        </div>
      </div>
    )
  }
}
