console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */

//error messages and error color
let genErEl = document.getElementById('generalError');
let usernameInputEl = document.getElementById('usernameInput');
let backgroundColor = "#ffffff";

function ValidateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if (atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if (dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function ValidateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

    //return true if the email address is valid - how to use regex
    return !!emailString && typeof emailString === 'string'
        && emailString.match(emailRegex);
}

function validateUsernameRegex(username) {
    let genErEl = document.getElementById('generalError');
    let usernameInputEl = document.getElementById('usernameInput');
    let backgroundColor = "#ffffff";
    let genErMsg = "";
    let usernameErMsg = "";
    let usernameErrorEl = document.getElementById('usernameError');
    let minChar = 5;
    let maxxChar = 20;
    var pattern = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;
    return username.match(pattern);

    //validating username

    //error for less than 5 characters
    if (usernameString.length < minChar) {
        genErMsg = "username must be at least 5 characters";
        usernameErMsg = "username must be at least 5 characters";
        backgroundColor = "#ef989b";
    }
    //error for more than 20 characters
    else if (usernameString.length > maxChar) {
        genErMsg = "username must be at less than 20 characters";
        usernameErMsg = "username must be less than 20 characters";
        backgroundColor = "#ef989b";
    }
    //error if not following regex pattern
    else if (!usernameString.match(pattern)) {
        genErMsg = "username cannot have spaces";
        usernameErMsg = "username cannot have spaces";
        backgroundColor = "#ef989b";
    }
    //display error messages and change color if wrong
    genErEl.innerHTML = genErMsg;
    usernameErEl.innerHTML = usernameErMsg;
    usernameInputEl.style.backgroundColor = backgroundColor;
}

//will display message telling user if username is correct or not
let submitButton = document.getElementById('submit-reg-form');
if (submitButton) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        let username = document.getElementById('usernameInput').value;
        if (validateUsernameRegex(username)) {
            console.log("valid username");
        }
        else {
            console.log("invalid username");
        }
    }, false);
}

//reset button sets everything back to normal when pressed
let resetButton = document.getElementsByTagName("reset");
resetButton.addEventListener('click', function (e) {
    genErEl = document.getElementById("");
    usernameInputEl = document.getElementById("");
    backgroundColor = "#ffffff";
})


//TODO:
// Make all fields required //DONE
// Add a pattern attribute in the telephone element (HTML)//DONE
// Ensure the password is redacted into dots on screen when typed in//DONE
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!) //DONE
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)//DONE
// Validate the username when the form is submitted//DONE
// Clear any additional error message and highlighting when the form is reset//DONE
// COMMENT EVERYTHING :D // I think
