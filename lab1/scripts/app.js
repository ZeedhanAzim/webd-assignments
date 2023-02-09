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
let aboutText = document.write(<p>
    Welcome to my website! I'm Zeedhan Azim, an I currently attend Durham College, working towards getting my
    Computer Programming diploma. In my free time, I typically play video games Like Pokemon and Yugioh Master Duel,
    listening to podcasts and videos related to learning about Japan and it's culture,
</p>)

//change the products page link text to be called Interest
function changeLinkText() {

}