import React, { useState } from "react";
import "../portfolioCSS.css";
import Filter from "./filter.js"
import Projects from "./projectHighlight.js"
import ProjectDetails from "./projectDetails.js";

const allCategories =
    [
        "all",
        ...new Set(Projects.map(item => item.category))
    ];

function LangButtons()
{
    // Variables used for sorting projects
    const [menuItem, setMenuItem] = useState(Projects);
    const [categoryButtons] = useState(allCategories);

    const [selectedProject, setSelectedProject] = useState(null);
    const [itemName, setItemName] = useState("");

    // Filter projects based on the object pressed
    const filterMenu = (button) =>
    {
        if (button === "all")
        {
            setMenuItem(Projects);
        }
        else
        {
            const filteredData = Projects.filter(item => item.category === button);
            setMenuItem(filteredData);
        }
    }

    const uniqueLanguages =
        [
            ...new Set(Projects.flatMap(item => item.langFilter))
        ];
    const languages = Array.from(uniqueLanguages);

    const filterLang = (button) =>
    {
        const filteredData = Projects.filter(item => item.langFilter.includes(button));
        setMenuItem(filteredData);
    }

     function showProjectText(event)
     {
         const projectItem = event.target.closest(".item-con");
         const key = projectItem.dataset.key;
         const selectedProject = Projects.find((project) => project.title === key);
         setSelectedProject(selectedProject);
         setItemName(key);

         const textBox = document.getElementById("textBox"); // For button information

         if (textBox)
         {
             textBox.classList.add('shown');
             textBox.openingElement = event.target;
         }
     }

    return (
        <>
            <div id="Header">
                <div id="Start">
                    <h2>I'm a software developer that works on</h2>

                    <Filter
                        categoryButton={categoryButtons}
                        filterMenu={filterMenu}
                        langButton={languages}
                        filterLang={filterLang}
                    />

                    <div id="details">
                        <div className="table">
                            {
                                menuItem.map((item, index) =>
                                {
                                    return <div className={menuItem.includes(item) ? "item-con filtered" : "item-con"} id={item.category} key={item.title} onClick={showProjectText} data-key={item.title}>
                                        <div className="item-container" data-cat={item.category}>
                                            <img src={item.firstImage} alt=""
                                                onMouseEnter={e => (e.currentTarget.src = item.secondImage)}
                                                onMouseLeave={e => (e.currentTarget.src = item.firstImage)} />
                                            <div className="tip">{item.languages}</div>
                                            <div className="tip">{item.skills}</div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            {item.github && (
                                                <span className="ref" onClick={() => window.open(item.github)}>
                                                    {item.linkName}
                                                </span>
                                            )}
                                        </div>

                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="copyright">
                        <p>
                            &copy; Connor Easterbrook
                        </p>
                    </div>

                </div>
            </div>

            <div id="boxAnim" />

            {selectedProject && (
                <ProjectDetails
                    details={selectedProject}
                    projectTitle={itemName}
                />
            )}
        </>
    )
}

export default LangButtons;
