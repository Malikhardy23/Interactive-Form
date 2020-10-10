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

// VALID NAME VALIDATOR FUNCTION //

const isValidName = () => {
    let nameLabel = document.getElementsByTagName("label")[0];
    let nameError = document.createElement("span");
    nameError.setAttribute("id", "nameError");
    let errorSpan = document.getElementById("nameError");

    // if(name.length > 0 || name.length > 4) return true;

    if (!errorSpan){
        nameError.style.color = "red";
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

const isValidEmail = () => {
    let emailLabel = document.getElementsByTagName("label")[1];
    let emailError = document.createElement("span");
    emailError.setAttribute("id", "emailError");
    let emailErrorSpan = document.getElementById("emailError");
    // let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!emailErrorSpan){
        emailError.style.color = "red";
        emailLabel.appendChild(emailError);
        email.style.border = "2px solid red";
        return false;
    } else if (email.length < 0 || email.value.indexOf('@') === 1){
        emailError.style.color = "green";
        emailLabel.appendChild(emailError);
        email.style.border = "2px solid green";
        return true;
    }
}

// CREDIT CARD REGEX //


// CC VALIDATOR FUNCTION //


// EMAIL VALIDATOR FUNCTION //

console.log(email);

name.addEventListener("input", isValidName);

email.addEventListener("input", isValidEmail);

// creditCard.addEventListener("input", isValidCreditCard);
