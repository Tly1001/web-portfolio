import React from 'react'

function Home() {
  return (
    <>
    <section id="home" className="home-section">
      <div className="home-wrap">
        <h1 className="home-name">Thomas Ly</h1>
        {/* <h2 className="home-text">Full-Stack Developer</h2> */}

        <h4 class="wordCarousel">    
        <div> 
{/* Use classes 2,3, or 4 to match the number of words */}
            <ul class="flip4"> 
                <li>Petter of Dogs</li>  
                <li>Adventurous Eater</li> 
                <li>Anime Fanatic</li>
                <li>Full-Stack Developer</li>
            </ul>
        </div>  
    </h4>

      </div>
    </section>
    </>

  )
}

export default Home