import React from 'react'
// import chromeSS from '../../public/googlechromedl.png'

const AppConfigLin = () => {
  return (
    <div>
      <h1>Apps You will Need For Your Time At FullStack</h1>
      <b className="app-list">
        -Node -npm -slack -zoom -vscode -prettier -eslint -google Chrome
        -postgresql
      </b>
      <h3>
        An Important Note: Whenever you're downloading one of the Linux versions
        of an app, you'll be choosing the Ubuntu/Debian version. Linux Mint I
        believe is built with similar specs, so it will always use the same
        version as these other Linux Distributions
      </h3>
      <div className="web-browser">
        {/* <img src={chromeSS} alt="chrome screenshot" /> */}
      </div>
      <div className="app-step-one">
        <b>Step 1 Downloading Google Chrome</b>
        <p className="app-step-one">
          Open up the FireFox Browser pre-installed on your Linux Mint. Simply
          Navigate to the Google Chrome Download page and choose the
          debian/ubtunu version.
        </p>
        <div className="google-link">
          <a href="https://www.google.com/chrome/">
            Google Chrome Download Page
          </a>
          <br />
        </div>
      </div>
      <br />
      <div className="app-step-two">
        <b>Step 2 Downloading and Updating Nodejs/npm</b>
        <p>
          Open up your terminal. in your terminal type the following command:{' '}
          <b>sudo apt update</b> After this, type <b>sudo apt install nodejs</b>{' '}
          <br />To check if it installed, you can check the version by typing{' '}
          <b>nodejs --version</b>
          <br /> Now let's install npm. Type: <b>sudo apt install npm</b> Again,
          let's check the version by doing <b>npm --version</b>
          <br /> If the version is a bit outdated, you can run the command{' '}
          <b>sudo npm update -g npm</b>
          <br /> If it's still showing the same version, X out of your terminal
          and reopen it. Often you'll have to do this with updates.
        </p>
      </div>
      <div className="app-step-three">
        <b>Step 3 Slack and Zoom</b>
        <div>
          <a href="https://slack.com/downloads/linux"> Slack Download </a>
          <br />
          <a href="https://zoom.us/download"> Zoom Download </a>
          <p>
            Slack just click the link and download. For zoom, select Mint from
            the dropdown and then download
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppConfigLin
