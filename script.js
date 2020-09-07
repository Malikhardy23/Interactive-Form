// VARIABLES //
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const otherCheckBox = document.getElementById("title");
const colorSelector = document.getElementById("color");
const designSelector = document.getElementById("design");
const shirtColors = document.getElementById("shirt-colors");

// T SHIRT VARIABLES //

for(let i = 0; i < colorSelector.length; i++){
    const cornflowerblue = colorSelector[0].value;
    const darkslategrey = colorSelector[1].value;
    const gold = colorSelector[2].value;
    const tomato = colorSelector[3].value;
    const steelblue = colorSelector[4].value;
    const dimgrey = colorSelector[5].value;
}




// NAME FOCUS //

const nameFocus = () => {
    name.focus();
}

nameFocus();


// HIDING OTHER INPUT FIELD FUNCTION //

const hideOtherCheckBox = () => {

    otherTitle.style.display = "none";

    otherCheckBox.addEventListener('click', (e) => {
        
        if(e.target.value != "other"){
            otherTitle.style.display = "none";
        } else {
            otherTitle.style.display = "block";
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

    for(let i = 0; i < colorSelector.length; i++){
        const cornflowerblue = colorSelector[0].value;
        const darkslategrey = colorSelector[1].value;
        const gold = colorSelector[2].value;
        const tomato = colorSelector[3].value;
        const steelblue = colorSelector[4].value;
        const dimgrey = colorSelector[5].value;
    }

    let iheartJsArray = [colorSelector[3].value, colorSelector[4].value, colorSelector[5].value];
    let jsPunsArray = [ cornflowerblue = colorSelector[0].value, 
                        darkslategrey = colorSelector[1].value,  
                        gold = colorSelector[2].value
                    ]

    console.log(iheartJsArray);

    designSelector.addEventListener('change', (e) => {

    for(let i = 0; i < designSelector.length; i++){
        let jsPunsTheme = designSelector[1].value;
        let heartJsTheme = designSelector[2].value;
    }

    jsPunsTheme = designSelector[1].value;
    heartJsTheme = designSelector[2].value;
    
        switch(e.value){
            case jsPunsTheme:
                iheartJsArray.children.style.display = "none";

            case heartJsTheme:
                jsPunsArray.children.style.display = "none";
        }
    });
}

themeSelector();

console.log(designSelector.value)

