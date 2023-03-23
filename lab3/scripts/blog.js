/*
Name: Zeedhan Azim
ID: 100790643
Date: 2023-03-23
*/

const MAX_BLOG_POSTS = 20;

const makePosts = () => {
    for (let i = 1; i < MAX_BLOG_POSTS; i++) {

        let id_no = i;

        let card = $('<div class="card blog" style="display: flex; width: 18rem;"></div>').attr('id', 'card-' + id_no).appendTo($('.blog-column'));

        let body = $('<div class="card-body blog"></div>').attr('id', 'card-body-' + id_no).appendTo(card);

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

    PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';
    const placeholder_url = PLACEHOLDER_URL.replace('<KEY>', PLACEHOLDER_KEY);

    //gets pictures from pixabay
    console.log(`URL: ${url}`);
    fetch(url)
        .then((response) => {
            return response.json();
        })
        //get image
        .then((data) => {
            console.log(data)
            for (let j = 0; j < 20; j++) {
                let picSrc = data['hits'][j]['webformatURL'];
                let altText = data['hits'][j]['tags'];
                console.log(`Pic: ${picSrc} Alt: ${altText}`);
                $('#img-' + j).attr('src', picSrc).attr('alt', altText);

                var newRequest = new XMLHttpRequest();
                newRequest.open('GET', placeholder_url);
                newRequest.onload = function () {
                    var data = JSON.parse(newRequest.responseText);
                    userIdString = "<p>User ID: " + data[j].userId + "</p>";
                    idString = "<p>ID: " + data[j].id + "</p>";
                    titleString = "<p>Title: " + data[j].title + "</p>";
                    bodyString = "<p>Body: " + data[j].id + "</p>";
                }
            }
        })
        .catch((error) => console.log(error));



}

});

makePosts();
getPics();