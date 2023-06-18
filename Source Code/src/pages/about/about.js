// import { useEffect, useState } from "react";
import "./aboutCSS.css";
import { Link } from "react-router-dom";

function About()
{
    function openTab(buttonName)
    {
        if (buttonName === "about")
        {
            document.querySelector(".about").classList.add("fadeIn");
            document.querySelector(".about").style.display = "block";

            document.querySelector(".work").classList.remove("fadeIn");
            document.querySelector(".work").style.display = "none";
        }
        else if (buttonName === "work")
        {
            document.querySelector(".work").classList.add("fadeIn");
            document.querySelector(".work").style.display = "block";

            document.querySelector(".about").classList.remove("fadeIn");
            document.querySelector(".about").style.display = "none";
        }
        else return;
    }

    function closeTab()
    {
        const about = document.querySelector(".about");
        if (about)
        {
            about.style.display = "none";
        }

        const work = document.querySelector(".work");
        if (work)
        {
            work.style.display = "none";
        }
    }


    return (
        <div id="aboutContainer" >
            <div id="header" className="slowFadeIn">

                <div className="mainPic">
                    <img className="circleImage" alt="FrontPicture" src="/images/me.jpg" />
                    <div className="circleText">
                        <p>
                            <br />
                            BSc Games Technology
                            <br />
                            -
                            <br />
                            The University of the West of England
                        </p>
                    </div>
                </div>

                <div className="content">
                    <p>
                        Welcome to the website.
                        <br /> Check out 'ABOUT' for more information!
                    </p>
                </div>

                <div className="buttons">
                    <li>
                        <p onClick={() => openTab("about")}>About</p>
                    </li>
                    <li>
                        <p onClick={() => openTab("work")}>Work</p>
                    </li>
                    {/* <li>
                        <p onClick={() => openTab("store")}>EXOWEB</p>
                    </li> */}
                </div>
            </div>

            <div id="mainText" className="openSquish">
                <div id="mainBubble" className="about">
                    <h2> About Me </h2>
                    <p>
                        Hello, I am Connor Easterbrook.<br /><br />

                        As a Games Technology student with a passion for programming, I am driven to pursue a career in software engineering. From a young age, I have been captivated by the power of coding and its ability to solve complex problems. Over the years, I have developed a strong skill set in programming and software development, as well as an ability to adapt to new technologies and work collaboratively in team environments.<br /><br />

                        As I embark on the next phase of my career, I am eager to apply my knowledge and skills to real-world projects and make a positive impact in the software industry. I am particularly drawn to the Microsoft Stack for its versatility and robustness, and I believe that my strong background in game development has equipped me with the skills necessary to excel in this area.<br /><br />

                        I am a dedicated and hardworking individual who is always eager to learn and grow. I am excited about the opportunities that lie ahead and look forward to connecting with others who share my passion for software development.
                    </p>
                    <span className="closeButton" onClick={closeTab}> &times; </span>
                </div>

                <div id="mainBubble" className="work">
                    <h2> Work & Skills </h2>
                    <p>
                        My portfolio discusses projects that are either complete or currently being worked on. <br /><br />
                        Please click the button below to visit the page.
                    </p>
                    {/* <button className="resumeButton" onClick={() => window.open('/portfolio')}>PORTFOLIO</button> */}
                    <Link to="/portfolio">
                        <button className="resumeButton"
                        // onClick={() => window.open('/portfolio')}
                        >PORTFOLIO</button>
                    </Link>
                    <span className="closeButton" onClick={closeTab}> &times; </span>
                </div>
            </div>


            <div className="copyright">
                <p>
                    &copy; Connor Easterbrook
                </p>
            </div>

            <div id="aboutbg" className="slowFadeIn">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div id="black"></div>
        </div>
    )
}

export default About
