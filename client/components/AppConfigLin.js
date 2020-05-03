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
        of an app, you'll be choosing the Ubuntu/Debian version.<br /> Linux
        Mint I believe is built with similar specs, so it will always use the
        same version as these other Linux Distributions
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
          <br />
          To check if it installed, you can check the version by typing{' '}
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
            the dropdown and then download.
          </p>
        </div>
      </div>
      <div className="app-step-four">
        <b>Step 4 VSCode, Prettier and ESlint</b>
        <div>
          <a href="https://code.visualstudio.com/download"> VSCode Download </a>
          <p>
            Go with the .deb version, and once your vscode is down installing,
            open it up and click on the extensions, or open the extensions with{' '}
            <b>Ctrl+Shift+X</b> <br /> Type in prettier, select the first thing
            to pop up, install it. Type in eslint, select the first thing to pop
            up, install it.
          </p>
        </div>
      </div>
      <div className="app-step-five">
        <b>Step 5 Postgresql</b>
        <p>
          Saved the worst for last. This part is by far the most annoying on
          both Windows and Linux. By now though I have this down to a science.
          <br />
          The Fullstack Lab gives you the first pieces, and then if you follow
          my steps, you should get it fine. <br />
          <b>
            TRIGGER WARNING: DO NOT SKIP A SINGLE STEP, OTHERWISE YOU WILL RUN
            INTO ISSUES AND WILL WANT TO BLOW YOUR HEAD OFF.
            <p>
              type in the commands into your terminal <b>LITERALLY</b>. $USER is
              literally user, you don't have to type in your name or anything.
            </p>
          </b>
        </p>
        <div>
          <b>First: sudo apt-get install postgresql postgresql-contrib</b>
          <br />
          <br />
          <b>Second: sudo -u postgres createuser --superuser $USER</b>
          <br />
          <br />
          <b>Third: createdb $USER</b>
          <br />
          <p>
            After these commands is where there can be a slipup, but really all
            you need to do is type in{' '}
            <b>sudo nano etc/postgresql/10/main/pg_hba.conf</b>
            <br /> This is going to open your terminal text editor. What we need
            to do is use the down arrow to scroll to where it has the Ipv4 and
            Ipv6 local connections and change them both from m5 to trust.
            <br /> After this is done, <b>Ctrl-X</b> to leave the file, say yes
            when it wants you to save, and then hit enter to save it to that
            same file. Now that this is done, you won't get any bs sequelize:
            user not authenticated error. To check, I recommend opening the
            sequelize homework for your sql and express week and checking if you
            can run the sql tests.
          </p>
        </div>
      </div>
      <div className="app-step-six">
        <b>Step 6 Breathe a Sigh of Relief</b>
        <p>
          You're all done. Your machine is good to go and can now work with sql,
          node and express. If you have any issues on things I missed please let
          me know!
        </p>
      </div>
    </div>
  )
}

export default AppConfigLin
