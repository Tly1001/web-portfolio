import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
function Skills() {

  return (
    <section id="skills" className="section" style={{ opacity: 0.8 }}>
      <div className="container skills-wrap" data-aos="fade-up">
        <h3>Front-end</h3>

        <ul className="skills" >

          <li className="skill" data-aos="fade-up">
            <img className="icon" src={require('../assets/html-5.png')} alt="HTML5"/>
            <p>HTML5</p>
          </li>

          <li className="skill" data-aos="fade-up" data-aos-delay="50">
            <img className="icon" src={require('../assets/css.png')} alt="CSS3"/>
            <p>CSS3</p>
          </li>

          <li className="skill" data-aos="fade-up" data-aos-delay="100">
            <img className="icon" src={require('../assets/sass.png')} alt="SASS"/>
            <p>SASS</p>
          </li>

          <li className="skill" data-aos="fade-up" data-aos-delay="150">
            <img className="icon" src={require('../assets/javascript.png')} alt="JavaScript"/>
            <p>JavaScript</p>
          </li>

          <li className="skill" data-aos="fade-up" data-aos-delay="200">
            <img className="icon" src={require('../assets/react.png')} alt="ReactJS"/>
            <p>ReactJS</p>
          </li>

        </ul>
      </div>

      <div className="container skills-wrap" data-aos="fade-up">
        <h3>Back-end</h3>
        
        <ul className="skills">

          <li className="skill" data-aos="fade-up">
            <img className="icon" src={require('../assets/nodejs.png')} alt="NodeJS"/>
            <p>Node.JS</p>
          </li>

          <li className="skill" data-aos="fade-up" data-aos-delay="50">
            <img className="icon" src={require('../assets/python.png')} alt="Python"/>
            <p>Python</p>
          </li>

          <li  className="skill" data-aos="fade-up" data-aos-delay="100">
            <img className="icon" src={require('../assets/sql.png')} alt="SQL"/>
            <p>SQL</p>
          </li>

          <li  className="skill" data-aos="fade-up" data-aos-delay="150">
            <img className="icon" src={require('../assets/mongo.png')} alt="MongoDB"/>
            <p>MongoDB</p>
          </li>

          <li  className="skill" data-aos="fade-up" data-aos-delay="200">
            <img className="icon" src={require('../assets/postgresql.png')} alt="PostgreSQL"/>
            <p>PostgreSQL</p>
          </li>

          <li  className="skill" data-aos="fade-up" data-aos-delay="250">
            <img className="icon" src={require('../assets/django.png')} alt="Django"/>
            <p>Django</p>
          </li>

        </ul>
      </div>

      <div className="container skills-wrap" data-aos="fade-up">
        <h3>Developer & Design Tools</h3>

        <ul className="skills">

          <li  className="skill" data-aos="fade-up">
            <img className="icon" src={require('../assets/github.png')} alt="Git"/>
            <p>Git/Github</p>
          </li>

          <li  className="skill" data-aos="fade-up" data-aos-delay="50">
            <img className="icon" src={require('../assets/figma.png')} alt="Figma"/>
            <p>Figma</p>
          </li>

          <li  className="skill" data-aos="fade-up" data-aos-delay="100">
            <img className="icon" src={require('../assets/photoshop.png')} alt="Photoshop"/>
            <p>Photoshop</p>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Skills