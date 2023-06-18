function Filter({ categoryButton, filterMenu, langButton, filterLang })
{
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

    function checkCategory(category)
    {
        if (category === "lang1")
        {
            return ("Software Development")
        }
        else if (category === "lang2")
        {
            return ("Game Development")
        }
        else if (category === "lang3")
        {
            return ("Web Development")
        }
        else if (category === "lang4")
        {
            return ("Cloud")
        }
        else if (category === "others")
        {
            return ("others")
        }
        else
        {
            return ("All")
        }
    }

    return (
        <div id="filter">
            <div>
                <h2>
                    |&nbsp;
                    {categoryButton.map((category, index) => 
                        {
                            return <>
                                {category !== "others" ?
                                    category !== "all" ?
                                        <>
                                            <span>&nbsp;</span>
                                            <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                                type="filterbutton" onClick={() => filterMenu(category)} key={index}>
                                                {checkCategory(category)}&nbsp;
                                            </span>
                                            |&nbsp;
                                        </>
                                        :
                                        <>
                                        <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                                type="filterbutton" onClick={() => filterMenu(category)} key={index}>
                                                {checkCategory(category)}&nbsp;
                                            </span>
                                            |&nbsp;
                                        </>

                                    :
                                    <>
                                        &nbsp;and&nbsp;
                                        <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                            type="filterbutton" onClick={() => filterMenu(category)} key={index}>
                                            {checkCategory(category)}&nbsp;
                                        </span>
                                        |&nbsp;
                                    </>
                                }
                            </>
                        })
                    }
                </h2>
            </div>
            <div style={{ "fontSize": "larger" }}>I work with the following languages:</div>

            <div>
                |&nbsp;
                {langButton.map(language =>
                (
                    <>
                    <span key={language} className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                            type="filterbutton" onClick={() => filterLang(language)}>
                        {language}&nbsp;
                        </span>
                        |&nbsp;
                    </>
                )
                )}
            </div>
        </div>
    );
}

export default Filter
