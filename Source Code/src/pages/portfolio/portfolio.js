import React from "react";
import "./portfolioCSS.css";
import Introduction from "./portfolioComponents/introduction";
import LangButtons from "./portfolioComponents/langButtons";

function Portfolio()
{

    return (
        <>
            <div id="container">
                <Introduction />
                <div id="Portfolio">
                    <LangButtons />
                </div>
                <div id="bg"></div>
            </div>
        </>
    )
}

export default Portfolio;
