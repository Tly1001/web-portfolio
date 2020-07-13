import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
function Contact() {
  return (
    <>
      <section id="contact" className="section contact-section">
          <h1 data-aos="fade-up">Contact</h1>
        <div className="container" data-aos="fade-up" style={{ opacity: 0.8 }}>

          <div className="email-wrap">
            <p>@</p>
            <h2>thomasly1001@gmail.com</h2>
          </div>
          
          
          <div className="link-wrap" href="https://github.com/Tly1001">
            <a className="contact-link" href="https://github.com/Tly1001">
              <img className="icon" alt="github" src={require('../assets/github.png')}/>
              <h2>Github</h2>
            </a>
          </div>

          <div className="link-wrap">
            <a className="contact-link" href="https://www.linkedin.com/in/tly1001/">
              <img className="icon" alt="linkedin" src={require('../assets/linkedin.png')}/>
              <h2>Linkedin</h2>
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