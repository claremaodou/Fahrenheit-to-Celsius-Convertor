//Set up Button Event Listeners
document.getElementById('convertBtn').addEventListener('click', setconvert)

//Mad Lib Button Functions
function setconvert() {
    
    //storing input values into variables
    let userInput = document.getElementById("fahrenheit-input").value;

    // Process - calculate sum
    let finalCalculation = (userInput - 32) * 5/9;

    //putting input variables into the output spot
    document.getElementById('celsiusOutput').innerHTML = finalCalculation;

}
