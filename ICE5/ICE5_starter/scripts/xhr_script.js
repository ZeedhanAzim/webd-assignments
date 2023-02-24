console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
const xhr = new XMLHttpRequest();



// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = () => {
    console.log(`the state: ${xhr.readyState}`);
    // check that the state is done
    // if (xhr.readyState === XMLHttpRequest.DONE)
    if (xhr.readyState === 4) {

        if (xhr.readyState === 200) {

            // turn into json
            let jsonRes = JSON.parse(xhr.responseText);

            // console log to see what we have
            console.log(`the response: ${jsonRes[0]['url']}`);

            // update the 1st image
            $("#photo1").attr("src", jsonRes[0]['url']);
            // update the 1st figcaption
            $("#photo1 ~ figCaption").text("first image returned from ajax call")
            // update the 2nd image
            $("#photo2").attr("src", jsonRes[1]['url']);
            // update the 2nd figcaption
            $("#photo2 ~ figCaption").text("second image returned from ajax call")
            // send error message
        }
        else {
            alert(`error with call: ${xhr.status}`)
        }

    }

}


// use the .open() method to configure the object
xhr.open("GET", url_photos);
// add datatype to header
//xhr.setRequestHeader{"Content-type", "application/json"};

// use the .send() method to send the request
xhr.send();