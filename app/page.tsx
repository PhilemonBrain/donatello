export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Engineering the Networks That Power Modern Connectivity</h1>
          <p>We design, deploy, and maintain carrier-grade telecommunications infrastructure for ISPs, enterprises, developers, and public-sector institutions.</p>

          <div className="hero-stats">
            <div className="stat"><strong>Carrier-Grade</strong> Standards & Compliance</div>
            <div className="stat"><strong>Scalable</strong> Urban & Residential Deployments</div>
            <div className="stat"><strong>End-to-End</strong> Fiber & Wireless Delivery</div>
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Request a Quote</a>
            <a href="#contact" className="btn btn-secondary">Partner With Us</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>Built for Critical Infrastructure Delivery</h2>
          <p className="lead">Our work supports essential connectivity projects where reliability, safety, and execution quality are non-negotiable.</p>

          <div className="about-grid">
            <div>
              <p>We execute telecommunications projects with a strict engineering-first mindset. Every deployment is planned, documented, and delivered to industry and regulatory standards, ensuring long-term performance and operational stability.</p>
              <p>Our teams integrate seamlessly with client project managers, procurement units, and technical stakeholders, enabling efficient delivery across complex, multi-phase infrastructure programs.</p>
            </div>
            <div className="about-panel">
              <p><strong>Focus Areas</strong></p>
              <ul>
                <li>Standards-compliant engineering</li>
                <li>Safety-first field operations</li>
                <li>Scalable network architecture</li>
                <li>Documented handover & support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="lead">Comprehensive telecommunications infrastructure services designed for scale, performance, and long-term reliability.</p>

          <div className="services-grid">
            <div className="service-card">
              <h3>FTTH Deployment</h3>
              <p>Planning, civil coordination, fiber installation, splicing, testing, and documentation delivered to carrier standards.</p>
            </div>
            <div className="service-card">
              <h3>Home Connection Installations</h3>
              <p>Professional last-mile installations focused on clean execution, rapid activation, and reduced fault rates.</p>
            </div>
            <div className="service-card">
              <h3>Wireless Equipment Installations</h3>
              <p>Installation and commissioning of radios, antennas, access points, and supporting wireless infrastructure.</p>
            </div>
            <div className="service-card">
              <h3>Telecommunication Contracts</h3>
              <p>Large-scale rollout, upgrade, and maintenance contracts for enterprise and public-sector networks.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="why-us">
            <div className="why-item">Proven delivery of carrier-grade infrastructure</div>
            <div className="why-item">Structured deployment and rollout methodologies</div>
            <div className="why-item">Experienced engineers and certified field teams</div>
            <div className="why-item">Regulatory, safety, and compliance focus</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Industries We Serve</h2>
          <div className="industries">
            <div className="industry">Internet Service Providers</div>
            <div className="industry">Real Estate Developers</div>
            <div className="industry">Enterprises & Campuses</div>
            <div className="industry">Government & Public Sector</div>
          </div>
        </div>
      </section>
    </main>
  )
}
