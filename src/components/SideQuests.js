import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function SideQuests() {

  return ( 
    <section id="side-quests" className="section">
      <div className="container" data-aos="fade-up">
        <h1>Side quests</h1>

        <div className="project">
          <img src="https://imgur.com/CNbrJei.jpeg" alt="dinder"/>
          <div className="project-info">
            <p>Dinder</p>
            <p className="description">A tinder clone for recipes</p>
            <div className="project-links">
              <a className="project-link">
                <img className="icon" src={require('../assets/github-image.png')} alt="github"/>
              </a>
              <a className="project-link">
                <img className="icon" src={require('../assets/link.png')} alt="site-link"/>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src="https://imgur.com/aqQvlJn.jpeg" alt="site-image"/>
          <div className="project-info">
            <p>V & N beauty</p>
            <p className="description">price listing and booking services</p>
            <div className="project-links">
              <a className="project-link">
                <img className="icon" src={require('../assets/github-image.png')} alt="github"/>
              </a>
              <a className="project-link">
                <img className="icon" src={require('../assets/link.png')} alt="site-link"/>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default SideQuests