// VARIABLES //
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const otherCheckBox = document.getElementById("title");


// NAME FOCUS //

const nameFocus = () => {
    name.focus();
}

nameFocus();


// HIDING OTHER INPUT FIELD FUNCTION //

 const hideOtherCheckBox = () => {

    otherTitle.style.display = "none";

    otherCheckBox.addEventListener('click', (e) => {
        
        if(e.target.value !== "other"){
          otherTitle.style.display = "none";
        } else {
           otherTitle.style.display = "block";
        }
    })
}

hideOtherCheckBox();


// THEME FUNCTION //

const themeSelector = () => {

// T SHIRT SECTION VARIABLES 
const colorSelector = document.getElementById("color");

const designSelector = document.getElementById("design");

const shirtColors = document.getElementById("shirt-colors");

colorSelector.disabled = true;

const optionValue = document.createElement('option');

optionValue.text = 'Please Select a T-Shirt theme';

// Place Color to beginning of list // 
colorSelector.add(optionValue, colorSelector.options[0]);

colorSelector.selectedIndex = '0';

optionValue.disabled = true;

designSelector.value = "Select Theme";

    // GRABBING ALL VALUES FROM DESIGN SELECTOR //

    let jsPunsTheme = designSelector[1].value;
    let iheartJsTheme = designSelector[2].value;

    // THEME VALUES //

    designSelector.addEventListener('change', (e) => {

    colorSelector.disabled = false;

    if(e.target.value === 'heart js'){
        for(let i = 0; i < colorSelector.length; i++){
            if(colorSelector.options[i].text.includes('Puns')){
                colorSelector.options[i].hidden = true;
                colorSelector.value = "tomato";
            } else {
                colorSelector.options[i].hidden = false;
            }
        }
    }

    if(e.target.value === 'js puns'){
        for(let i = 0; i < colorSelector.length; i++){
            if(colorSelector.options[i].text.includes('♥')){
                colorSelector.options[i].hidden = true;
                colorSelector.value = "cornflowerblue";
            } else {
                colorSelector.options[i].hidden = false;
            }
        }
    }
    });
}

themeSelector();


// ACTIVITIES ALERT //

const activitiesTitle = document.querySelector('.activities legend');
let activitiesError = document.createElement('h5');
activitiesError.innerHTML = 'Please Select an Option'



// CHECKBOX VARIABLES //

const activities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('label input');

const mainConference = document.getElementsByName("all");

let disabled = () => {
    document.getElementsByName("express").disabled = true;
}

let totalElement = document.createElement('h4');

let totalDiv = document.createElement("div");

let totalCost = 0;

activities.appendChild(totalDiv);

let total = 0;

// ACTIVITIES EVENT LISTENER //

activities.addEventListener('change', (e) => {
// CHECK THE VALUE OF CHECKBOX //
    let checked = e.target;
    let checkboxActivities = document.querySelectorAll('input[type="checkbox"]');
    let date = checked.getAttribute("data-day-and-time");
    let cost = checked.getAttribute("data-cost");
    cost = parseInt(cost);
   if(e.target === checked){
        totalCost = totalCost + cost;
        console.log(totalCost);
    }
    else {
        console.log("false");
    }


    // DISABLE CHECK BOX //

    if(e.target.name === "express"){
        document.getElementsByName("js-frameworks").disabled = true;
    }
})


