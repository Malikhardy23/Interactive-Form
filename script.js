// VARIABLES //
const name = document.getElementById("name");
//const otherTitle = document.getElementById("other-title");
const otherCheckBox = document.getElementById("title");
const colorSelector = document.getElementById("color");
const designSelector = document.getElementById("design");
const shirtColors = document.getElementById("shirt-colors");


// NAME FOCUS //

const nameFocus = () => {
    name.focus();
}

nameFocus();


// HIDING OTHER INPUT FIELD FUNCTION //

const hideOtherCheckBox = () => {

    //otherTitle.style.display = "none";

    otherCheckBox.addEventListener('click', (e) => {
        
        if(e.target.value != "other"){
          //  otherTitle.style.display = "none";
        } else {
           // otherTitle.style.display = "block";
        }
    })
}

hideOtherCheckBox();


// THEME FUNCTION //

const themeSelector = () => {

    let optionValue = document.createElement("OPTION");

    optionValue.setAttribute("value", "Please select a T-shirt theme");

    let message = document.createTextNode("Please select a T-shirt theme");

    optionValue.appendChild(message);

    colorSelector.appendChild(optionValue);

    colorSelector.value = "Please select a T-shirt theme";

    designSelector.value = "Select Theme"; 

    // GRABBING ALL VALUES FROM DESIGN SELECTOR //

    let jsPunsTheme = designSelector[1].value;
    let iheartJsTheme = designSelector[2].value;

    // THEME VALUES //

    designSelector.addEventListener('change', (e) => {

        switch(e.target.value){
            case jsPunsTheme:
                colorSelector.remove(3);
                colorSelector.remove(4);
                colorSelector.remove(5);
            break;

            case iheartJsTheme:
                colorSelector.remove(0);
                colorSelector.remove(1);
                colorSelector.remove(2);
                colorSelector.remove(3);
            break;
        }
       /* if(e.target.value === jsPunsTheme){
            colorSelector.remove(0);
            colorSelector.remove(3);
            colorSelector.remove(4);
            colorSelector.remove(5);
        }
        if(e.target.value === iheartJsTheme){
            colorSelector.remove(0);
            colorSelector.remove(1);
            colorSelector.remove(2);
            colorSelector.remove(3);
        } */

    });
}

themeSelector();


console.log(colorSelector[0])

console.log(colorSelector[1])

console.log(colorSelector[2])

console.log(colorSelector[3])

console.log(colorSelector[4])

console.log(colorSelector[5])
