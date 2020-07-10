import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function SideQuests() {

  return ( 
    <section id="side-quests" className="section" style={{ opacity: 0.8 }}>
      <div className="container side-quest-wrap" data-aos="fade-up">
        
        <h2>Side quests</h2>
        

        <div className="project">
          <video autoPlay loop muted playsInline src={require('../assets/tetris-play.mp4')}></video>
          {/* <img src="https://imgur.com/CNbrJei.jpeg" alt="Tetris"/> */}
          <div className="project-info">
            <p>Tetris</p>
            <p className="description">The classic game built in vanilla JavaScript</p>
            <div className="project-links">
              <a className="project-link" href="https://github.com/Tly1001/project-2" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/github-image.png')} alt="github"/>
              </a>
              {/* not deployed yet */}
              {/* <a className="project-link" href="https://dinder-for-recipes.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/link.png')} alt="site-link"/>
              </a> */}
            </div>
          </div>
        </div>

        <div className="project">
          <img src="https://imgur.com/CNbrJei.jpeg" alt="dinder"/>
          <div className="project-info">
            <p>Dinder</p>
            <p className="description">A tinder clone for recipes</p>
            <div className="project-links">
              <a className="project-link" href="https://github.com/Tly1001/project-2" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/github-image.png')} alt="github"/>
              </a>
              <a className="project-link" href="https://dinder-for-recipes.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/link.png')} alt="site-link"/>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src="https://imgur.com/xCTmVHT.jpeg" alt="dinder"/>
          <div className="project-info">
            <p>Spot.me</p>
            <p className="description">A facebook clone for fitness</p>
            <div className="project-links">
              <a className="project-link" href="https://github.com/Tly1001/project-2" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/github-image.png')} alt="github"/>
              </a>
              <a className="project-link" href="" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/link.png')} alt="site-link"/>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src="https://imgur.com/aqQvlJn.jpeg" alt="site-image"/>
          <div className="project-info">
            <p>V & N beauty</p>
            <p className="description">Price listing and booking services</p>
            <div className="project-links">
              <a className="project-link" href="https://github.com/Tly1001/project-4" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={require('../assets/github-image.png')} alt="github"/>
              </a>
              <a className="project-link" href="https://vnbeauty.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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