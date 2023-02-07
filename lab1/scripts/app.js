/*
Name: Zeedhan Azim
ID: 100790643
Date Completed: 2023-02-08

*/



console.log("js success")


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
let submitButton = document.getElementById('submit-button');

//when user submits information...
if (submitButton) {
    submitButton.addEventListener('click', timedRedirect, false);
}



