import React, { useEffect, useState } from "react";

function Introduction()
{
    const [introduced, setIntroduced] = useState(false);

    useEffect(() =>
    {
        if (!introduced)
        {
            if (window.screen.availWidth >= 675)
            {
                let intro = document.querySelector('#intro');
                let anim =
                    [
                        { t: "", ms: 400 },
                        { t: "|", ms: 400 },
                        { t: "", ms: 400 },
                        { t: "|", ms: 400 },
                        { t: "C|", ms: 75 },
                        { t: "Co|", ms: 75 },
                        { t: "Con|", ms: 75 },
                        { t: "Conn|", ms: 75 },
                        { t: "Conno|", ms: 75 },
                        { t: "Connor|", ms: 75 },
                        { t: "Connor |", ms: 75 },
                        { t: "Connor E|", ms: 75 },
                        { t: "Connor Ea|", ms: 75 },
                        { t: "Connor Eas|", ms: 75 },
                        { t: "Connor East|", ms: 75 },
                        { t: "Connor Easte|", ms: 75 },
                        { t: "Connor Easter|", ms: 75 },
                        { t: "Connor Easterb|", ms: 75 },
                        { t: "Connor Easterbr|", ms: 75 },
                        { t: "Connor Easterbro|", ms: 75 },
                        { t: "Connor Easterbroo|", ms: 75 },
                        { t: "Connor Easterbrook|", ms: 400 },
                        { t: "Connor Easterbrook", ms: 400 },
                        { t: "Connor Easterbrook|", ms: 400 },
                        { t: "Connor Easterbrook", ms: 400 },
                    ];

                let stepDenominator = 1;
                if (window.localStorage.stepDenominator)
                {
                    stepDenominator = window.localStorage.stepDenominator;
                }

                let i = 0;
                let update = () =>
                {
                    let step = anim[i];
                    intro.innerText = step.t;
                    i++;

                    if (i < anim.length)
                    {
                        setTimeout(update, step.ms / stepDenominator);
                        document.getElementById('Portfolio').style.display = 'none';
                    }
                    else
                    {
                        document.getElementById('Portfolio').style.display = 'block';

                        intro.classList.add('top');
                        setTimeout(() =>
                        {
                            document.getElementById('Portfolio').style.opacity = 1;
                        }, 500);

                        window.localStorage.stepDenominator = 2;
                    }
                }
                update();

                setIntroduced(true);
            }
            else
            {
                let intro = document.querySelector('#intro');
                let anim =
                    [
                        { t: "", ms: 400 },
                        { t: "|", ms: 400 },
                        { t: "", ms: 400 },
                        { t: "|", ms: 400 },
                        { t: "C|", ms: 75 },
                        { t: "Co|", ms: 75 },
                        { t: "Con|", ms: 75 },
                        { t: "Conn|", ms: 75 },
                        { t: "Conno|", ms: 75 },
                        { t: "Connor|", ms: 75 },
                        { t: "Connor|", ms: 400 },
                        { t: "Connor", ms: 400 },
                        { t: "Connor|", ms: 400 },
                        { t: "Connor", ms: 400 },
                    ];

                let stepDenominator = 1;
                if (window.localStorage.stepDenominator)
                {
                    stepDenominator = window.localStorage.stepDenominator;
                }

                let i = 0;
                let update = () =>
                {
                    let step = anim[i];
                    intro.innerText = step.t;
                    i++;

                    if (i < anim.length)
                    {
                        setTimeout(update, step.ms / stepDenominator);
                        document.getElementById('Portfolio').style.display = 'none';
                    }
                    else
                    {
                        document.getElementById('Portfolio').style.display = 'block';

                        intro.classList.add('top');
                        setTimeout(() =>
                        {
                            document.getElementById('Portfolio').style.opacity = 1;
                        }, 500);

                        window.localStorage.stepDenominator = 2;
                    }
                }

                update();

                setIntroduced(true);
            }
        }
    }, [introduced])

    return (
        <div>
            <h1 id="intro">
                CONNOR <br></br>
                EASTERBROOK
            </h1>
        </div>
    );
}

export default Introduction;
