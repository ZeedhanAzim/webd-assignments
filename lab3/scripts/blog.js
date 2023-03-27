/*
Name: Zeedhan Azim
ID: 100890643
Date Completed: 2023-03-23
*/
console.log("js working");


const makePosts = () => {
    //for statement to create 20 divs that hold cards
    for (let i = 1; i < 20; i++) {

        let id_no = i;

        let card = $('<div class="card-blog" ></div>').attr('id', 'card-' + id_no).appendTo($('.blog-column'));

        let body = $('<div class="card-body blog" style="display: flex;"></div>').attr('id', 'card-body-' + id_no).appendTo(card);

        let title = $('<h5 class="card-title blog"></h5>').attr('id', 'card-title-' + id_no).appendTo(body);

        let pic = $('<img>').attr('id', 'img-' + id_no).addClass('blog-pic').css('max-height', '100px').appendTo(body);

        let sub = $('<p class="userId blog"></p>').attr('id', 'sub-' + id_no).appendTo(body);

        let post_Id = $("<span></span>").attr('id', "post-" + id_no).appendTo(sub);

        let user_id = $("<span></span>").attr('id', "user-" + id_no).text('\tUser # ' + id_no).appendTo(sub);

    }
};

const getPics = (() => {

    PIXABAY_KEY = '34274968-f1a968a0d92dd12785b405c6c';
    PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=dramatic+landscape&image_type=photo&per_page=30';


    const url = PIXABAY_URL.replace('<KEY>', PIXABAY_KEY);
    const placeholder_url = "https://jsonplaceholder.typicode.com/posts";

    //use to get pictures for lab 3
    console.log(`URL: ${url}`);
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            for (let j = 1; j < 20; j++) {
                let picSrc = data['hits'][j]['webformatURL'];
                let altText = data['hits'][j]['tags'];
                console.log(`Pic: ${picSrc} Alt: ${altText}`);
                $('#img-' + j).attr('src', picSrc).attr('alt', altText);

            }
        })
        .catch((error) => console.log(error));

    //get card text information with XMLHttpRequest
    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', placeholder_url);
    newRequest.onload = function () {
        var data = JSON.parse(newRequest.responseText);
        userIdString = "<p>User ID: " + data[i].userId + "</p>";
        idString = "<p>ID: " + data[i].id + "</p>";
        titleString = "<p>Title: " + data[i].title + "</p>";
        bodyString = "<p>Body: " + data[i].id + "</p>";
    }


    //get card text information with fetch
    // fetch(placeholder_url)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         for (let j = 1; j < 20; j++) {
    //             let userId = data[userId][j];
    //             let id = data[id][j];
    //             let title = data[title][j];
    //             let body = data[body][j];

    //         }
    //     })
});

//use functions
makePosts();
getPics();
