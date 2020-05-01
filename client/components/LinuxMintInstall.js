import React from 'react'
import {Link} from 'react-router-dom'

const LinuxMintInstall = () => {
  return (
    <div>
      <h1>Linux Mint Installation Guide</h1>
      <div>
        <p>
          Here, you are going to follow along and complete the following Steps:
          1. Navigate to the Linux Mint Installation Page -On the Page, Click
          the 64-bit Cinnamon Link. You can also choose other desktops, but this
          is the one I am most familiar with. -Choose the Harvard School of
          Engineering Mirror. Your computer will now download the file(Takes
          10-20min). 1.5. With our Linux Mint Iso downloaded we now will need to
          insert the fresh usb into our computer. 2. Navigate to the Rufus
          Download Page. This app will take our Linux download and turn our usb
          into a bootable drive. After downloading and opening Rufus, Select
          your usb for the drive, MBR for the partition scheme, File System: Fat
          32, cluster size can be kept default, and then check the bootable disk
          checkbox. This will prompt you to select the linux mint iso. After
          that click start. This will wipe your usb and reformat it to run the
          linux installation. (takes 10-20min) 3. From here, you'll need to
          follow along on your phone or another computer, because we're going
          into boot mode. With the USB plugged in we'll restart/shutdown the
          computer and then turn it back on, using the bootkey. On lenovo it's
          this button you have to get with a pen, some are F5, ect. Once in the
          boot options, change bootup to entf or something, and then boot from
          your usb. 4. Congrats! You made it into the linux mint desktop! At
          this point to complete the installation on your computer, just click
          the linux cd to the left and follow the steps. TO BE CONTINUED
        </p>
      </div>
      <div>
        <a href="https://www.linuxmint.com/download.php">
          Step 1: Click here to Go to the Linux Mint Download Page
        </a>
        <div>
          <a href="https://rufus.ie/">
            Step 2: Click here to Go to the Rufus Download Page
          </a>
        </div>
      </div>
      <div>
        <Link to="/linuxStart">
          <h1>Click Here to Follow Linux Installation Guide</h1>
        </Link>
      </div>
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

export default LinuxMintInstall
