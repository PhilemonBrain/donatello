'use client'

import Logo from './Logo'
import { useModal } from './ModalProvider'

export default function Navbar() {
  const { openModal } = useModal()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    openModal()
  }

  return (
    <header>
      <div className="nav">
        {/* <div className="logo">
          <Logo />
        </div> */}
        <div className="logo">
          Donatello Telecom
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" onClick={handleContactClick}>Contact</a>
        </div>
      </div>
    </header>
  )
}

