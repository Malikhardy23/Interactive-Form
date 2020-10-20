// VARIABLES //
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const otherCheckBox = document.getElementById("title");
// const email = document.querySelector('input[name="user-email"]');
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

let creditCardSection = document.getElementById("credit-card");

let selectMethod = document.getElementsByTagName("option")[20];


// HIDE PAYMENT MESSAGE ON CLICK //

selectMethod.hidden = true;

// PAYMENT ADDEVENTLISTENER //

paymentOption.addEventListener('change', (e) => {


    if(e.target.value == "bitcoin" || e.target.value == "paypal"){
        creditCardSection.style.display = "none";
    }

    else if(e.target.value == "credit card"){
        creditCardSection.style.display = "block";
    }

})



// Form Validation //

// NAME VALIDATOR //

// VALID NAME VALIDATOR FUNCTION //

const isValidName = () => {
    let nameLabel = document.getElementsByTagName("label")[0];
    let nameError = document.createElement("span");
    nameError.setAttribute("id", "nameError");
    let errorSpan = document.getElementById("nameError");
    let nameRegex =  /^([\w]{3,})+\s+([\w\s]{3,})+$/i;

    // if(name.length > 0 || name.length > 4) return true;

    if (!errorSpan){
        nameError.style.color = "red";
        nameLabel.innerHTML = "Invalid Name";
        nameLabel.appendChild(nameError);
        name.style.border = "2px solid red";
        return false;
        // TRYING TO MAKE A VALID NAME MESSAGE //
    } else if (name.length < 6 || name.value.indexOf(" ") > -1){
        nameError.style.color = "green";
        nameLabel.appendChild(nameError);
        name.style.border = "2px solid green";
        return true;
    }
}

// EMAIL VALIDATOR //

const isValidEmail = () => {
    let emailLabel = document.getElementsByTagName("label")[1];
    let emailError = document.createElement("span");
    emailError.setAttribute("id", "emailError");
    let emailErrorSpan = document.getElementById("emailError");
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    // EMAIL LENGTH MUST BE GREATER THAN 0 & HAVE AN @ //
    if(email.length < 0 || email.value.indexOf('@') == -1){
        emailError.style.color = "red";
        emailLabel.innerHTML = "Invalid Email";
        emailLabel.appendChild(emailError);
        email.style.border = "2px solid red";
        return false;
    } else if (emailRegex){
        emailError.style.color = "green";
        emailLabel.appendChild(emailError);
        email.style.border = "2px solid green";
        return true;
    }
}

// CREDIT CARD REGEX //


// CC PAYMENT VALIDATOR FUNCTION //

const creditCardLabel = document.querySelector('label[for=cc-num]');
const creditCardInput = document.getElementById("cc-num");
const registerBtn = document.querySelector('button[type="submit"]');
/////////////////////////////////////////////////////////////////////////////
const form = document.querySelector("form");
let creditCardError = document.createElement("span");
creditCardError.setAttribute("id", "ccError");
let ccErrorSpan = document.getElementById("ccError");
let ccRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ || /^(?:5[1-5][0-9]{14})$/ || /^(?:3[47][0-9]{13})$/;

const isValidCreditCard = (e) => {
    e.preventDefault();
    const creditCardValue = document.getElementById("cc-num").value;
    // CREDIT CARD VALUE CAN NOT BE NULL & CAN NOT HAVE LESS THAN 16 CHARACTERS //
    if(creditCardValue === null || creditCardValue.length < 16){
        creditCardError.style.color = "red";
        creditCardLabel.textContent = "Invalid Credit Card";
        creditCardLabel.appendChild(creditCardError);
        creditCardInput.style.border = "2px solid red";
    }
}

// VALID ZIP CODD FUNCTION //

const isValidZipCode = e => {
    e.preventDefault();
    const zipCodeValue = document.getElementById("zip").value;
    let zipCodeInput = document.getElementById("zip");
    let zipCodeError = document.createElement("span");
    let zipCodeLabel = document.querySelector('label[for=zip]');
    zipCodeError.setAttribute("id", "zipCodeError");
    let zipCodeErrorSpan = document.getElementById("zipCodeError");
    if(zipCodeValue === null || zipCodeValue.length < 4){
        zipCodeError.style.color = "red";
        zipCodeLabel.textContent = "Invalid Zip Code";
        zipCodeLabel.appendChild(zipCodeError);
        zipCodeInput.style.border = "2px solid red";
    }
}


// VALID CVV FUNCTION //

const isValidCvv = e => {
    e.preventDefault();
    const cvvValue = document.getElementById("cvv").value;
    let cvvInput = document.getElementById("cvv");
    let cvvError = document.createElement("span");
    let cvvLabel = document.querySelector('label[for=cvv]');
    cvvError.setAttribute("id", "cvvError");
    let cvvErrorSpan = document.getElementById("cvvError");
    if(cvvValue === null || cvvValue.length < 2){
        cvvError.style.color = "red";
        cvvLabel.textContent = "Invalid CVV";
        cvvLabel.appendChild(cvvError);
        cvvInput.style.border = "2px solid red";
    } 
}



form.addEventListener("input", isValidName);

form.addEventListener("input", isValidEmail);

form.addEventListener("submit", isValidName);

form.addEventListener("submit", isValidEmail);

form.addEventListener("submit", isValidCreditCard);

form.addEventListener("submit", isValidZipCode);

form.addEventListener("submit", isValidCvv);