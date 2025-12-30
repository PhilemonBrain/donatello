'use client'

import { useModal } from './ModalProvider'

export default function Footer() {
  const { openModal } = useModal()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    openModal()
  }

  return (
    <footer id="contact">
      <div className="container">
        <h2>Engage a Trusted Infrastructure Partner</h2>
        <p>Discuss deployments, partnerships, or long-term telecommunications contracts with our engineering team.</p>
        <a href="#contact" className="btn btn-primary" onClick={handleContactClick}>Contact Us</a>
      </div>
    </footer>
  )
}

