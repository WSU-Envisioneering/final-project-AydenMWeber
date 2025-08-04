pi = 
[
  3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7,
  9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4,
  4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6, 2, 8, 0, 3, 4, 8, 2,
  5, 3, 4, 2, 1, 1, 7, 0, 6, 7, 9, 8, 2, 1, 4, 8, 0, 8, 6, 5, 1, 3, 2, 8, 2, 3, 0, 6, 6, 4,
  7, 0, 9, 3, 8, 4, 4, 6, 0, 9, 5, 5, 0, 5, 8, 2, 2, 3, 1, 7, 2, 5, 3, 5, 9, 4, 0, 8, 1, 2,
  8, 4, 8, 1, 1, 1, 7, 4, 5, 0, 2, 8, 4, 1, 0, 2, 7, 0, 1, 9, 3, 8, 5, 2, 1, 1, 0, 5, 5, 5,
  9, 6, 4, 4, 6, 2, 2, 9, 4, 8, 9, 5, 4, 9, 3, 0, 3, 8, 1, 9
];
totalDigits = 0;
goodDigits = [];
badDigits = [];
document.addEventListener("DOMContentLoaded", function()
{
    let digitText = document.getElementById("pitext");
    let form = document.getElementById("piform");
    console.log("Digitcheck Script Ran");
    form.addEventListener("submit", function(event)
    {
        console.log("Submit button pressed");
        event.preventDefault();
        let formData = new FormData(this);
        for (let [key,value] of formData.entries())
            {
                if (key = "pidigits")
                    {
                        for (let i = 0; i < value.length; i++)
                            {
                                if (value[i] == pi[i])
                                    {
                                        totalDigits += 1;
                                        goodDigits.append(value[i]);
                                    }
                                else
                                    {
                                        badDigits.append(value[i]);
                                    }
                            }
                        digitText.innerHTML = totalDigits.toString();
                        totalDigits = 0;
                    }
            }
    });
});