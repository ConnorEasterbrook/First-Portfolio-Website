function ProjectDetails({ details, projectTitle })
{
    function closeButton(event)
    {
        const textBox = document.querySelector("#textBox"); // For button information

        if (textBox)
        {
            textBox.classList.remove("shown");
        }
    }

    function checkColour(category)
    {
        if (category === "lang1")
        {
            return ("#7750A9")
        }
        else if (category === "lang2")
        {
            return ("#8A72BE")
        }
        else if (category === "lang3")
        {
            return ("#80D2E6")
        }
        else if (category === "lang4")
        {
            return ("#50BED2")
        }
        else if (category === "others")
        {
            return ("#f1ff71")
        }
        else
        {
            return ("#ffffff")
        }
    }

     return (
         <div id="textBox" style={{ "border-color": checkColour(details.category) }}>
             <h2 className="singleLine">{details.title}</h2>
             <p>
                 {details.InDepthDesc.split("\n").map(line => <div key={line}>{line}</div>)}
             </p>

             <button className="close" href="#" onClick={closeButton}>
                 &times;
             </button>

             <div id="tbimg" style={{ "border-color": checkColour(details.category) , "backgroundColor": checkColour(details.category) }}>
             <img alt="" id="image" className="firstImage" src={details.firstImage} />
                 <img alt="" id="image" className="secondImage" src={details.secondImage} />
             </div>
         </div>
     );
}

export default ProjectDetails;
