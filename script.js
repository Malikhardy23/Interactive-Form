// VARIABLES //
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const otherCheckBox = document.getElementById("title");
// const email = document.querySelector('input[name="user-email"]');
const email = document.getElementById("mail");
const jobRoleInput = document.getElementsByTagName("input")[2];
var errorFound = false;

// NAME FOCUS //

const nameFocus = () => {
    name.focus();
}

nameFocus();


// HIDING OTHER INPUT FIELD FUNCTION //



 const hideOtherCheckBox = () => {

    jobRoleInput.style.display = "none";

    otherCheckBox.addEventListener('click', (e) => {
        
        if(e.target.value !== "other"){
            jobRoleInput.style.display = "none";
        } else {
            jobRoleInput.style.display = "block";
        }
    })
}

hideOtherCheckBox();

otherCheckBox.addEventListener('change', hideOtherCheckBox);


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

let creditCardOption = document.getElementsByTagName("option")[21];

paypal.style.display = "none";

bitcoin.style.display = "none";

selectMethod.textContent = "Credit Card";



// HIDE PAYMENT MESSAGE ON CLICK //

selectMethod.hidden = true;

// PAYMENT ADDEVENTLISTENER //

paymentOption.addEventListener('change', (e) => {


    if(e.target.value == "bitcoin"){
        creditCardSection.style.display = "none";
        paypal.style.display = "none";
        bitcoin.style.display = "block";
    }
    else if(e.target.value == "paypal"){
        paypal.style.display = "block";
        creditCardSection.style.display = "none";
        bitcoin.style.display = "none";
    }

    else if(e.target.value == "credit card"){
        creditCardSection.style.display = "block";
        bitcoin.style.display = "none";
    }

})



// Form Validation //


// ACTIVITY VALIDATOR //

const activityValidator = () => {
    // check to see any checkboxes are checked //

    let selected = document.querySelector("input:checked");

    let errorActivity = document.createElement("span");

    let errorSpan = document.getElementById("activityError");

    if(selected){
        if(errorSpan){
            activities.removeChild(errorActivity);
        }
        return true;
    } else {
        if(!errorSpan){
            const activitiesLabel = document.querySelector(".activities label");
            errorActivity.style.color = "red";
            errorActivity.innerHTML = "Please Select at least one activity";
            errorFound = true;
            errorActivity.setAttribute("id", "errorSpan");
            activities.insertBefore(errorActivity, activitiesLabel);
        }
        return false;
    }
}

// NAME VALIDATOR //

// VALID NAME VALIDATOR FUNCTION //

function isValidName(){
    let nameLabel = document.getElementsByTagName("label")[0];
    let nameError = document.createElement("span");
    nameError.setAttribute("id", "nameError");
    let errorSpan = document.getElementById("nameError");
    // let nameRegex =   /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(name.value);
    let formName = document.myform.name.value;

    if(formName.length > 0){
        name.style.border = "2px solid green";
        nameLabel.innerHTML = "Valid Name!";
        nameLabel.style.color = "green";
        return true;
    }
    else{
        name.style.border = "2px solid red";
        nameLabel.innerHTML = "Invalid Name!";
        nameLabel.style.color = "red";
        errorFound = true;
        return false;
    }

}

// EMAIL VALIDATOR //

// remove invalid if correct
const isValidEmail = (e) => {
    let emailLabel = document.getElementsByTagName("label")[1];
    let emailError = document.createElement("span");
    emailError.setAttribute("id", "emailError");
    let emailErrorSpan = document.getElementById("emailError");
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
   
    if(emailErrorSpan){
        emailLabel.removeChild(emailErrorSpan)
    }

    // EMAIL LENGTH MUST BE GREATER THAN 0 & HAVE AN @ //
    if(email.value.length > 5 && emailRegex){
        email.style.border = "2px solid green";
        emailLabel.style.color = "green";
        emailLabel.innerHTML = "Valid Email Address!"
        return true
    } else if (!emailErrorSpan){
        emailLabel.style.color = "red";
        emailLabel.innerHTML = "Invalid Email Address!"
        email.style.border = "2px solid red";
        emailLabel.removeChild(emailErrorSpan);
        errorFound = true;
        return false;
    }
}

// CREDIT CARD REGEX //


// CC PAYMENT VALIDATOR FUNCTION //
// place inside function it's cleaner :D
const creditCardLabel = document.querySelector('label[for=cc-num]');
const creditCardInput = document.getElementById("cc-num");
const registerBtn = document.querySelector('button[type="submit"]');
/////////////////////////////////////////////////////////////////////////////
const form = document.querySelector("form");
let creditCardError = document.createElement("span");
creditCardError.setAttribute("id", "ccError");
let ccErrorSpan = document.getElementById("ccError");
let ccRegex = /^(?:4[0-9]{13}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;

const isValidCreditCard = (e) => {
    // clear the credit card error label and the zipcoee and the ccvs
    if(ccErrorSpan){
        creditCardLabel.removeChild(ccErrorSpan);
    }
    const creditCardValue = document.getElementById("cc-num").value;
    // CREDIT CARD VALUE CAN NOT BE NULL & CAN NOT HAVE LESS THAN 16 CHARACTERS //
    if(creditCardValue.length >= 13  && creditCardValue.length <= 16){
     //   && ccRegex(creditCardValue)){
    
        creditCardInput.style.border = "2px solid green";
        creditCardLabel.innerHTML = "Valid Credit Card!";
        creditCardLabel.style.color = "green"; 
    }else{
        creditCardLabel.style.color = "red";
        creditCardLabel.textContent = "Invalid Credit Card!";
        creditCardLabel.appendChild(creditCardError);
        creditCardInput.style.border = "2px solid red";
        errorFound = true;
    }
}

// VALID ZIP CODE FUNCTION //

// remove invalid if correct
const isValidZipCode = e => {
    const zipRegex = /^\d{5}([-]|\s*)?(\d{4})?$/.test(zip.value)
    const zipCodeValue = document.getElementById("zip").value;
    let zipCodeInput = document.getElementById("zip");
    let zipCodeError = document.createElement("span");
    let zipCodeLabel = document.querySelector('label[for=zip]');
    zipCodeError.setAttribute("id", "zipCodeError");
    let zipCodeErrorSpan = document.getElementById("zipCodeError");

    if(zipCodeErrorSpan){
        zipCodeLabel.removeChild(zipCodeErrorSpan);
    }

    if(zipCodeValue == null || !zipRegex){
        zipCodeLabel.style.color = "red";
        zipCodeLabel.textContent = "Invalid Zip Code!";
        zipCodeInput.style.border = "2px solid red";
        zipCodeLabel.appendChild(zipCodeError);
        errorFound = true;
    } else {
        zipCodeInput.style.border = "2px solid green";
        zipCodeLabel.textContent = "Valid Zip Code";
        zipCodeLabel.style.color = "green";
        zipCodeLabel.appendChild(zipCodeError);
        errorFound = false;
    }
}


// VALID CVV FUNCTION //
// remove invalid if correct
const isValidCvv = e => {
    const cvvRegex = /^[0-9]{3}$/.test(cvv.value)
    const cvvValue = document.getElementById("cvv").value;
    let cvvInput = document.getElementById("cvv");
    let cvvError = document.createElement("span");
    let cvvLabel = document.querySelector('label[for=cvv]');
    cvvError.setAttribute("id", "cvvError");
    let cvvErrorSpan = document.getElementById("cvvError");

    if(cvvErrorSpan){
        cvvLabel.removeChild(cvvErrorSpan);
    }
    if(cvvValue == null || !cvvRegex){
        cvvLabel.style.color = "red";
        cvvLabel.textContent = "Invalid CVV!";
        cvvInput.style.border = "2px solid red";
        cvvLabel.appendChild(cvvError);
        errorFound = true;
    } else {
        cvvLabel.style.color = "green";
        cvvLabel.textContent = "Valid CVV";
        cvvInput.style.border = "2px solid green";
        cvvLabel.appendChild(cvvError);
        errorFound = true;
    }
}

const validateform = (e) => {
    e.preventDefault();
    if(!errorFound){ 
      document.getElementsByName('myForm').submit();
      //return true;
    } 
} 



document.myform.addEventListener("submit", isValidName);

document.myform.addEventListener("submit", activityValidator);

document.myform.addEventListener("submit", isValidName);

document.myform.addEventListener("submit", isValidEmail);

document.myform.addEventListener("submit", isValidCreditCard);

document.myform.addEventListener("submit", isValidZipCode);

document.myform.addEventListener("submit", isValidCvv);

 document.myform.addEventListener("submit", validateform);
