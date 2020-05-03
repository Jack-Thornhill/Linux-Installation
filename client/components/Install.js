import React from 'react'
import {Link} from 'react-router-dom'

const Install = () => {
  return (
    <div>
      <h1>Linux Mint Installation Guide</h1>
      <div>
        <div className="step-one">
          <b>1. Navigate to the Linux Mint Installation Page</b>
        </div>
        <div className="mint-link">
          <a href="https://www.linuxmint.com/download.php">
            Linux Mint Download Page
          </a>
          <p className="step-one">
            -On the Page, Click the 64-bit Cinnamon Link. You can also choose
            other desktops, but this is the one I am most familiar with. -Choose
            the Harvard School of Engineering Mirror. Your computer will now
            download the file(Takes 10-20min). -With our Linux Mint Iso
            downloaded we now will need to insert the fresh usb(8GB usb should
            be fine) into our computer.
          </p>
        </div>
        <div className="step-two">
          <b>2. Navigate to the Rufus Download Page</b>
          <div className="rufus-link">
            <a href="https://rufus.ie/">Rufus Download Page</a>
            <p className="step-two">
              This app will take our Linux download and turn our usb into a
              bootable drive. After downloading and opening Rufus, Select your
              usb for the drive, MBR for the partition scheme, File System: Fat
              32, cluster size can be kept default, and then check the bootable
              disk checkbox. This will prompt you to select the linux mint iso.
              Find and mount the iso. After that click start. This will wipe
              your usb and reformat it to run the linux installation. (takes
              10-20min)
            </p>
          </div>
          <div className="step-three">
            <b>3. Shutting Down/Restarting Computer and going into Boot Mode</b>
            <div className="boot-link">
              <a href="https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/boot-to-uefi-mode-or-legacy-bios-mode">
                Windows Docs For Boot Mode
              </a>
              <p className="step-three">
                From here, you'll need to follow along on your phone or another
                computer, because we're going into boot mode on your computer.
                With the USB plugged in we'll restart/shutdown the computer and
                then turn it back on, using the bootkey. On a lenovo laptop, the
                button is on the side and you have to push it in with a pen.
                Most other computers usually go into boot mode when you start
                the computer and hold the F5 key down. Once in the boot options,
                choose boot mode.
                <b>
                  From Windows Documentation if you need other options: “Boot
                  the PC, and press the manufacturer’s key to open the menus.
                  Common keys used: Esc, Delete, F1, F2, F10, F11, or F12. On
                  tablets, common buttons are Volume up or Volume down (find
                  more common keys and buttons). During startup, there’s often a
                  screen that mentions the key. If there’s not one, or if the
                  screen goes by too fast to see it, check your manufacturer’s
                  site.”
                </b>
                <b>
                  I believe for a DELL XPS 13, you shut down your computer and
                  then turn it back on holding the F12 key.
                </b>
                <b>
                  If you have a question about what your bootkey is on your
                  computer, you can email me here, and I'll figure it out for
                  you and add it to the guide
                </b>
              </p>
            </div>
          </div>
          <div className="step-four">
            <b>4. Boot Mode Menu</b>
            <p className="step-four">
              From here, use your right key, to switch over to settings. Change
              bootup to UEFI BIOS or legacy BIOS depending on the opposite of
              what your computer is currently set to. After that, click your
              left key to choose what to boot from. There should be the
              harddrive where your windows is and then the usb that you added
              the Linux ISO to. Move over to the USB and click enter.
            </p>
          </div>
          <div className="step-five">
            <b>5. Finishing up Linux Install</b>
            <p className="step-five">
              Congrats! You made it into the linux mint desktop! At this point
              to complete the installation on your computer, just click the
              linux cd to the left and follow the steps. This is easy if you
              only want Linux on your computer.
            </p>
            <b>
              If you want to go back to Windows, just restart your computer and
              select Windows 10 from the bottom Linux menu.
            </b>
            <b>
              If you'd like to Dual boot and have both Windows and Linux on your
              machine, you'll have to be a little more careful
            </b>
            <br />
          </div>
          <div className="step-six">
            <br />
            <b>6. Dual Booting Windows and Linux</b>
            <p className="step-six">
              I’ll add a dual boot guide later, but it can be a little trickier
              since you have to make sure you give enough space to linux and
              windows. I’ll also give the quick steps to setting up your
              environment with all the apps you need for Fullstack. I think it
              runs faster on Linux than Windows since Linux has a lot of tools
              already on its installation.
            </p>
          </div>
        </div>
      </div>
      <div />
      <div>
        <Link to="/linuxMintAppConfigure">
          <h1>
            Click Here to Move on to adding and configuring necessary apps for
            linux
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Install
