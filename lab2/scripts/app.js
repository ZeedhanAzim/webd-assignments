/*
Name: Zeedhan Azim
ID: 100790643
Date Completed: 2023-03-03
*/


//create User class for when user registers
class User {
    constructor(fName, lName, uName, email, passw) {
        this.firstName = fName;
        this.lastName = lName;
        this.userName = uName;
        this.email = email;
        this.password = passw;
    }
}

//when contact email is submitted, this function will bring user back to index 
function timedRedirect(e) {
    e.preventDefault();
    e.stopPropagation();
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;

    //print to console
    console.log("Email: " + contactEmail + " Password: " + contactPassword);

    //redirect user to index
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000)
}

//make variable for email address
let submitButton = document.getElementsByClassName('btn-primary')[0];

//when user submits information...
if (submitButton) {
    submitButton.addEventListener('click', timedRedirect, false);
}
//text for product page
function serviceText() {
    document.write("<p>My key skills and traits include:<li>");
    document.write("<ul>Programming in multiple languages</ul>");
    document.write("<ul>Database design, management and manipulation</ul>");
    document.write("<ul>Eager to learn new tech and approaches to programming</ul>");
    document.write("<ul>Ability to work independently and in a team</ul>");
    document.write("</li></p>");
}
//text for About me page
function productText() {

}
//text for About me page
function aboutText() {
    document.write(
        "<p>" +
        "Welcome to my website! I'm Zeedhan Azim, an I currently attend Durham College, working towards getting my Computer Programming diploma. " +
        "In my free time, I typically play video games, listening to podcasts and videos related to learning about Japan and it's culture, and watching media analysis videos." +
        "</p>"
    );
}



//change the products page link text to be called Interest
function changeLinkText() {

}

//function to create bottom navbar
function createBottomNav() {
    let bottomNav = document.createElement('nav');
    bottomNav.className = 'footer-nav';

    let bottomNavP = document.createElement('p');
    let thisYear = new Date().getFullYear();
    bottomNavP.innerHTML = `&copy; ${thisYear}`;
    bottomNav.appendChild(bottomNavP);

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(bottomNav);
}

//function to create div
function newDiv() {
    const divider = document.createElement('div');
    divider.setAttribute('id', 'ErrorMessage');
}


//register validation
function validateRegister(e) {

    e.preventDefault();

    //constants used for validating user input
    const MIN_NAME_LENGTH = 2;
    //regex found from: https://masteringjs.io/tutorials/fundamentals/email-regex
    const EMAIL_REGEX = "/[^\s@]+@[^\s@]+\.[^\s@]+/";
    const MIN_EMAIL_LENGTH = 8;
    const MIN_PASSWORD_LENGTH = 6;

    //value for potential error messages
    let errorMessage = "";

    //values to get user input
    let firstName = $("#firstNameInput").val().trim();
    let lastName = $("#lastNameInput").val().trim();
    let email = $("#emailInput").val().trim();
    let password = $("#passwordInput").val().trim();
    let confirmPassword = $("#confirmPasswordInput").val().trim();
    let buttonPress = $("#btnSubmit").val.trim();

    //variables that will be used when making user object
    let fNameVar = "";
    let lNameVar = "";
    let emailVar = "";
    let passwVar = "";
    let confirmPasswVar = "";

    //check if fields are all filled
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("please fill out all fields")
    }
    else {

        //first name validation
        if (firstName.length < MIN_NAME_LENGTH) {

            errorMessage = "First name must be at least " + MIN_NAME_LENGTH
                + " characters";
            //output error message
            $("#ErrorMessage")[0].append(errorMessage);
        }
        //last name validation
        if (lastName.length < MIN_NAME_LENGTH) {
            errorMessage = "Last name must be at least " + MIN_NAME_LENGTH
                + " characters";
            $("#ErrorMessage")[1].append(errorMessage);
        }

        //email validation
        //regex check
        if (!email.match(EMAIL_REGEX)) {
            errorMessage = "Email address entered was invalid";
            $("#ErrorMessage")[3].append(errorMessage);
        }

        //email length check
        if (email.length < MIN_EMAIL_LENGTH) {
            errorMessage = "Email address must be 8 characters length";
            $("#ErrorMessage")[3].append(errorMessage);
        }

        //password check
        if (password.length != MIN_PASSWORD_LENGTH) {
            errorMessage = "Password must be at least " + MIN_PASSWORD_LENGTH + " characters in length";
            $("#ErrorMessage")[4].append(errorMessage);
        }

        //confirm password validation
        if (confirmPassword != password) {
            errorMessage = "Password must be at least " + MIN_PASSWORD_LENGTH + " characters in length";
            $("#ErrorMessage")[5].append(errorMessage);
        }

        //if everything is valid
        if (fNameVar.length != 0 && lNameVar != 0 && emailVar != 0 &&
            passwVar != 0 && passwVar === confirmPasswVar) {

            //create user object and display in console
            const newUser = new User(fNameVar, lNameVar, emailVar, passwordVar)
            console.log(`User: ${newUser.firstName} ${newUser.lastName}\nEmail: ${newUser.email}\nPassword: ${newUser.password}`);

            //clear all error messages    
            $("#ErrorMessage")[0].append("");
            $("#ErrorMessage")[1].append("");
            $("#ErrorMessage")[2].append("");
            $("#ErrorMessage")[3].append("");
            $("#ErrorMessage")[4].append("");
            $("#ErrorMessage")[5].append("");
        }
    }
}

//validation for login form
function validateLogin(e) {

    e.preventDefault();

    //constants for validation
    const MIN_NAME_LENGTH = 2;

    //values to get user input
    let userName = $("#usernameInput").val().trim();
    let password = $("#passwordInput").val().trim();

    if (!userName || !password) {
        const errorMessage = document.createTextNode("please fill out all fields");
        $("#ErrorMessage")[0].append(errorMessage);
        return false;
    }
    else {

        //notify user of success
        const userNameText = document.createTextNode(newUser.userName);
        $("#userNameDisplay").append(userNameText);
    }
}