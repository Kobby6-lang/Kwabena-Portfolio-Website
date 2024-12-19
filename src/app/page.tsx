"use client";
import React from "react";
import {useState} from "react";
import Image from "next/image";
export default function Home() {

  const[menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => 
  {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
    <header>
        <a href="" className="logo-holder">
            <div className="logo">K</div>
            <div className="logo-text">Kwabena Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">My Works</a>
                </li>
                <li>
                    <a href="mailto: koseitutu03@gmail.com" className="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                </svg>
                  
            </a>
        </nav>
    </header>
    <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi I'm</small>
                        Kwabena Osei-Tutu
                    </h1>
                    <p>
                        I am in my third year at London South Bank University, pursuing a BA (Hons) in Games Design.
                        I have honed my skills in 3D modelling using Maya and Blender, and I am eager to apply my expertise professionally.
                        My experience working as a waiter at Shoryu Restaurant has equipped me with valuable customer service skills and a strong work ethic.<br /><br />
                        I am seeking a placement in the video games industry to leverage my 3D modelling capabilities and further my career in game design.<span>
                        I'm also getting my hands on coding to have more options in my career path.<br />
                        My interests are watching anime, reading manga and light novels, playing games, and playing badminton.
                        </span>
                    </p>
                      <div className="call to action">
                      <a href="./Kwabena CV template.pdf" className="button black button-spacing">
                        View Resume
                      </a>
                      <a href="mailto:koseitutu03@gmail.com" className="button white">
                        Contact Me
                      </a>
                      </div>
                    <div className="social-links">
                        <a href="https://linktr.ee/kobby6">
                            <img src="./imgs/Linktree.png" alt="Github" width="48" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/kwabena-osei-tutu-a38078223/">
                            <img src="./imgs/linkedin.png" alt="Linkedin" width="48" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="./imgs/Portfolio-5.png" alt="Creature" width="110%" height="110%"/>
            </div>

        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./imgs/html.png" alt="html" width="128"/>
                    <img src="./imgs/css.png" alt="css" width="128"/>
                    <img src="./imgs/javascript.png" alt="javascript" width="128"/>
                    <img src="./imgs/maya.png" alt="maya" width="128"/>
                    <img src="./imgs/blender.png" alt="blender" width="128"/>
                    <img src="./imgs/Unity.png" alt="Unity" width="128"/>
                    <img src="./imgs/Substance Painter.png" alt="SP" width="128"/>
                    <img src="./imgs/Photoshop.png" alt="PS" width="128"/>
                    <img src="./imgs/Webflow.png" alt="PS" width="128"/>
                    <img src="./imgs/Visual Studio.png" alt="PS" width="128"/>
                    <img src="./imgs/vscode.png" alt="PS" width="128"/>

                </div>
            </div>
        </section>
        <section id="skills" className="skills container" >
            <h2>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>3D Artist</h3>
                    <ul>
                        <li>Blender</li>
                        <li>Maya</li>
                        <li>Substance</li>
                    </ul>
                    <h3>Web Design</h3>
                    <ul>
                        <li>Webflow</li>
                        <li>Figma</li>

                    </ul>
                    <h3>Coding</h3>
                    <ul>
                        <li>Unity</li>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>

                </div>
                <div className="right-column">
                    <h3> A bit about me</h3>
                    <p>Hi there! I'm Kwabena, a 21-year-old 3D artist, web designer, and web developer from London.
                        I love creating 3D models and designing visually engaging websites. <br /> <br /> 
                        I'm passionate about 3D art and aim to incorporate it into my web designs to create stunning and interactive user experiences. <br /> 
                        One fun fact about me: I've traveled to a few countries and hope to go to Japan next!<br /> </p>
                </div>
            </div>
        </section>
        <section id="projects" className="bento container">
            <h2>
                Completed Projects
            </h2>
            <div className="bento-grid">
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-1.png" alt="Portfolio 1" width="100%"/>
                </a>
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-2.png" alt="Portfolio 2" width="100%"/>
                </a>
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-3.png" alt="Portfolio 3" width="100%"/>
                </a>
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-4.png" alt="Portfolio 4" width="100%"/>
                </a>
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-5.png" alt="Portfolio 4" width="100%"/>
                </a>
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-6.png" alt="Portfolio 5" width="100%"/>
                </a>
                <a href="https://www.artstation.com/ks1jr" className="bento-item">
                    <img src="./imgs/Portfolio-7.png" alt="Portfolio 5" width="100%"/>
                </a>
            </div>
        </section>
    </main> 
    </>
  );
}
