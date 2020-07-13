import React from 'react'


function About() {
  const [formOpen, setformOpen] = React.useState(false)

  const handleForm = (event) => { 
    setformOpen(event)
  }

  return (
    <>
      <div id="about" className="about-section" onMouseEnter={() => handleForm('')}>
        <div className="about-container">
          <h2 className="sub-head">About</h2>
          <div className="container" onMouseEnter={() => handleForm('')}>


            <p className="about-text">
          Kaizen (改善) is a concept that means continual improvement and change for the better. I follow this in all aspects of life. I have a constant drive to learn and develop myself, as well as those around me. 
            </p>

            <p className="about-text">
          I taught myself JavaScript using online resources and books while working at an identification technology business. This piqued my interest and I forged a path towards a career in coding and enrolled onto the Software Engineering Immersive course at General Assembly. My perseverance, curiosity and logical approach to problem solving were enhanced at GA and are skills which I continue to level-up as a developer.
            </p>

            <p className="about-text">
          I am looking to add value, to contribute, and grow alongside a team in a Full-Stack role.
            </p>
          </div>
        </div>

        <div className="about-container">

          <h2>Interests</h2>
        

          <div className="container interest-container" id="app">
            <div className= {`add-product ${ formOpen === 'dd' ? 'open' : ''}`} onMouseEnter={() => handleForm('dd')}>
              <div className="button-copy">
                <span>Dungeons </span>
                <span>& </span>
                <span>dragons</span>
              </div>
              <div className="interest">
                <p className="about-text">
              I love imaginative worlds, role-playing, and preparing for challenges to come. The idea of tackling issues with an ‘out of the box’ mentality alongside friends in a  team with a mixed skillset is something I thoroughly enjoy. 
                </p>
              </div>
            </div>
          </div>

          <div className="container interest-container" id="app">
            <div className= {`add-product ${ formOpen === 'muay' ? 'open' : ''}`} onMouseEnter={() => handleForm('muay')}>
              <div className="button-copy" >Muay Thai</div> 
              <div className="interest">
                <p className="about-text">
              Healthy body, healthy mind! Discipline and stress relief being my motivations of uptaking this martial art, I am inspired by the dedication shown in the members and also appreciate the environment that encourages mutual respect among my peers and teachers.
                </p>
              </div>
            </div>
          </div>

          <div className="container interest-container" id="app">
            <div className= {`add-product ${ formOpen === 'cooking' ? 'open' : ''}`} onMouseEnter={() => handleForm('cooking')}>
              <div className="button-copy">Cooking</div>
              <div className="interest">
                <p className="about-text">
              One of my absolute favourite things to do. Growing up, my parents were always working so I quickly learned to love grabbing random items from the fridge and experimenting to see what I could create, eating tasty food was also an added bonus! 
              I tend to try learning french cooking techniques and integrating them into chinese and viet dishes. Have you ever noticed that duck á l’orange was essentially a french duck in plum sauce?
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About