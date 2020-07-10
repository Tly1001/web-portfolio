import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">

        
      
        <li className="logo">
          <Link className="nav-link" to="home" spy={true} smooth={true} duration={600}>
            <div className="nav-link">
              <div>
                <div className="link-text logo-text">Thomas Ly</div>
                <div className="link-text logo-text">Full-Stack</div>
                <div className="link-text logo-text">Developer</div>
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="about" spy={true} smooth={true} duration={600}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path 
                d="M0 0h24v24H0V0z" 
                fill="none"
              />
              <path d="M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z" 
                fill="currentColor"
                className="fa-secondary"
                opacity=".7"
              />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
                fill="currentColor"
                className="fa-primary"
              />
              <circle cx="9" cy="13" r="1.25"
                fill="currentColor"
                className="fa-primary"
              />
              <circle cx="15" cy="13" r="1.25"
                fill="currentColor"
                className="fa-primary"
              />
            </svg>
            <span className="link-text">About</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="skills" spy={true} smooth={true} duration={600}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path 
                d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" 
                opacity=".7"
                fill="none"
              
              /><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
                fill="currentColor"
                className="fa-primary"
              /></svg>
            <span className="link-text">Skills</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="side-quests" spy={true} smooth={true} duration={600}>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g>
              <rect fill="none"/>
            </g>
            <g><g/><g>
              <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z"
                fill="currentColor"
                className="fa-primary"
              />
              <path d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" 
                opacity=".7"
                fill="currentColor"
                className="fa-secondary"
              />
            </g>
            <g>
              <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z"
                fill="currentColor"
                className="fa-primary"
              />
              <path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z"
                fill="currentColor"
                className="fa-primary"
              />
              <path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z"
                fill="currentColor"
                className="fa-primary"
              /></g></g></svg>
            <span className="link-text">Side-quests</span>
          </Link>
        </li>
        <i className="far fa-meh-blank"></i>

        <li className="nav-item">
          <Link className="nav-link" to="contact" spy={true} smooth={true} duration={600}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" 
                opacity=".7"
                fill="currentColor"
                className="fa-secondary"
              />
              <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"
                fill="currentColor"
                className="fa-primary"
              /></svg>
            <span className="link-text">Contact</span>
          </Link>
        </li>
        
      </ul>
    </nav>

  )
}

export default Navbar