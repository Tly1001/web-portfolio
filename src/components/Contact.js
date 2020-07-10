import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
function Contact() {
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container" data-aos="fade-up" style={{opacity: 0.8}}>
          <h1>Contact</h1>
          <h2>Email: thomasly1001@gmail.com</h2>
          <div className="contact-links">
          <a className="contact-link" href="https://github.com/Tly1001">
            <img className="icon" src={require('../assets/github.png')}/>

          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/tly1001/">
            <img className="icon" src={require('../assets/linkedin.png')}/>
          </a>
        </div>
        </div>
      </section>

      <footer data-aos="fade-up">
        <p>© 2020 Thomas Ly.</p>
      </footer>

    </>

  )
}

export default Contact