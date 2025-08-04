var colornum = 0;
var gradientnum = 0;

function colorText()
{
    let colortext = document.getElementsByClassName("colored");
    //These are static colors:
    const colors = 
    [
        "#bd2828", "#bd3c28", "#bd4f28", "#bd6828", "#bd8428", "#bd9728", "#bdae28", "#b5bd28", "#9cbd28", "#81bd28", "#68bd28", "#4fbd28", "#37bd28", "#28bd2f", "#28bd43", "#28bd5c", "#28bd77", "#28bd8d", "#28bdae", "#28b0bd", "#288bbd", "#2877bd", "#2859bd", "#2843bd", "#282fbd", "#3c28bd", "#3c28bd", "#7f28bd", "#a428bd", "#bd28b3", "#bd2895", "#bd286b", "#bd284d", "#bd2828"  
    ]
    for (let i = 0; i < colortext.length; i++)
        {
            colortext[i].style.color=colors[colornum];
            if (!(colornum == colors.length - 1))
                {
                    colornum += 1;
                }
            else 
                {
                    colornum = 0;
                }
        }
    
    requestAnimationFrame(colorText);
}
function gradientChange()
{
    let gradientbg = document.getElementsByClassName("coloredGrad");
    const gradientcolors = 
    [
        "#208025", "#208025", "#208025", "#208025", "#208025", "#208025", "#208025", "#208025", "#248729", "#248729", "#248729", "#248729", "#248729", "#248729", "#248729", "#248729", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#50b555", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#43a848", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#39a33e", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#309c36", "#208025", "#208025", "#208025", "#208025", "#208025", "#208025", "#208025", "#208025", "#248729", "#248729", "#248729", "#248729", "#248729", "#248729", "#248729", "#248729", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f", "#29942f"
    ]
        for (let i = 0; i < gradientbg.length; i++)
            {
                if (!(gradientnum == gradientbg.length - 1))
                    {
                        gradientnum += 1;
                    }
                else 
                    {
                        gradientnum = 0;
                    }
                gradientbg[i].style.backgroundImage = `linear-gradient(to bottom, ${gradientcolors[colornum]}, ${gradientcolors[colornum + 1]})`
            }
    requestAnimationFrame(gradientChange);
}
window.onload = function()
{
    colorText();
    gradientChange();
}