// VARIABLES //
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const otherCheckBox = document.getElementById("title");
const email = document.getElementById("mail");


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

const mainConference = document.getElementsByName("all");

let totalElement = document.createElement('h4');

let totalDiv = document.createElement("div");

activities.appendChild(totalDiv);

totalDiv.appendChild(totalElement);

let total = 0;

// ACTIVITIES EVENT LISTENER //

activities.addEventListener('change', (e) => {
// CHECK THE VALUE OF CHECKBOX //
    let check = e.target;
    let checkboxActivities = document.querySelectorAll('input[type="checkbox"]');
    let date = check.getAttribute("data-day-and-time");
    let cost = check.getAttribute("data-cost");
    cost = parseInt(cost);

    if(check.checked === true){
        total = total + cost
    } else if(check.checked === false){
        total = total - cost
    }

    totalElement.textContent = `Total $${total}`;

    for(let i = 0; i < checkboxActivities.length; i++){
        checkboxActivities[i];
        const input = checkboxActivities[i].getAttribute("data-day-and-time");

        // DISABLING INPUTS //

        if(date === input && check !== checkboxActivities[i]){
            if(checkboxActivities[i].disabled){
                checkboxActivities[i].disabled = false
            }
            else {
                checkboxActivities[i].disabled = true
            }
        }

    }
})



// PAYMENT SECTION //

let paymentOption = document.getElementById("payment");

let creditCard = document.getElementById("credit-card");

let selectMethod = document.getElementsByTagName("option")[20];


// HIDE PAYMENT MESSAGE ON CLICK //

selectMethod.hidden = true;

// PAYMENT ADDEVENTLISTENER //

paymentOption.addEventListener('change', (e) => {


    if(e.target.value == "bitcoin" || e.target.value == "paypal"){
        creditCard.style.display = "none";
    }

    else if(e.target.value == "credit card"){
        creditCard.style.display = "block";
    }

})



// Form Validation //

// NAME VALIDATOR //

const alertValidator = (show, e) => {
    if(show){
        e.style.display = "red";
    } else {
        e.style.display = "blue";
    }
}

const createEventListener = validator => {
    return e => {
        let text = e.target.value;
        let valid = validator(text);
        let showTip = text !== "" && !valid;
        let toolTip = e.target.nextElementSibling;
        alertValidator(showTip, toolTip);
    };
}

// VALID NAME VALIDATOR FUNCTION //

const isValidName = e => {
    e.preventDefault;
    let name = document.getElementById("name").value;
    let regexName =  /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    if(!regexName.test(name)){
        console.log("Invalid Name");
        document.getElementById("name").focus();
    } else {
        console.log("Valid Name");
        return true;
    }
}
// CREDIT CARD REGEX //

let visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
let masterCardRegex = /^(?:5[1-5][0-9]{14})$/;
let amexCardRegex = /^(?:3[47][0-9]{13})$/;
let discCardRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
let isValid = false;

// CC VALIDATOR FUNCTION //

const isValidCreditCard = () => {
    let ccNum = document.getElementById("credit-card").value;

    let isVisa = visaRegex.test(ccNum) === true;
    let isMasterCard = masterCardRegex.test(ccNum) === true;
    let isAmex = amexCardRegex.test( ccNum ) === true;
    let isDisc = discCardRegex.test( ccNum ) === true;

    if(visaRegex || masterCardRegex || amexCardRegex || discCardRegex){
        console.log("Valid Credit Card");
    } else {
        console.log("Invalid Credit Card");
    }
    
}

// EMAIL VALIDATOR FUNCTION //

const isValidEmail = e => {
    let email = document.getElementById("mail").value;
    let regexEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if(!regexEmail.test(email)){
        console.log("Invalid Name");
        document.getElementById("mail").focus();
    } else {
        console.log("Valid Name");
        return true;
    }
}




name.addEventListener("input", createEventListener(isValidName));

email.addEventListener("input", createEventListener(isValidEmail));

creditCard.addEventListener("input", createEventListener(isValidCreditCard));
