'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/siteConfig'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus trap
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus first input when modal opens
      const firstInput = modalRef.current.querySelector('input') as HTMLInputElement
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100)
      }
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
    // You can add API call here
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="contact-modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="contact-modal" ref={modalRef}>
        <button
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="contact-modal-content">
          {/* Left Section - Form */}
          <div className="contact-modal-form-section">
            <h2 id="contact-modal-title" className="contact-modal-title">Get in Touch</h2>
            <p className="contact-modal-subtitle">Send us a message and we'll get back to you promptly.</p>
            
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section - Contact Info */}
          <div className="contact-modal-info-section">
            <div className="contact-info-content">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Reach out to us through any of these channels. We're here to help with your telecommunications infrastructure needs.
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-info-details">
                    <div className="contact-info-label">Email</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="contact-info-value">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-details">
                    <div className="contact-info-label">Phone</div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="contact-info-value">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-info-details">
                    <div className="contact-info-label">Address</div>
                    <div className="contact-info-value contact-info-address">
                      {siteConfig.contact.address.split('\n').map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

