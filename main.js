const posts = [];
let idNum = 1;

$('.btn').on('click', function () {
    let post = {};
    post.text = $('#post-name').val();
    post.id = idNum++;
    // post.comments = [];
    posts.push(post);
    renderPosts();
    clear();
})

const clear = function () {
    $(".wall")[0].reset();
}
const clearComment = function () {
    $(".fullPost")[0].reset();
}

const renderPosts = function () {
    $('.posts').empty();
    for (let i in posts) {
        $('.posts').append('<form class="fullPost"><p class = "post" data-id=' + posts[i].id + '>' + posts[i].text + '<button type="button" class="remove">REMOVE</button></p><br><button type="button" class="comment">Add A Comment</button><br></form>');
    }
    // $('.posts').find('.fullPost').find('.post').append('<ul class="commentList"></ul>');
    // renderComments();
}

// const renderComments = function() {
//     $('.posts').find('.post').find('.commentList').empty();
//     for (let i in posts.comments) {
//         $('.posts').find('.post').find('.commentList').append('<li>' +posts[i].comments[i] + '</li>');

//     }
// }

// $('.posts').on('click', '.comment', function () {
//     $(this).closest('.fullPost').append('<input type="text" class="user" placeholder="Username"><br>');
//     $(this).closest('.fullPost').append('<input type="text" class="commentText" placeholder="Your Comment..."><br>');
//     $(this).closest('.fullPost').append('<button type="button" class="postComment">Post</button><br>');
//     $('.posts').on('click', '.postComment', function () {
//         let userName = $(this).closest('form').find('.user').val();
//         console.log(userName);
//         let text = $(this).closest('form').find('.commentText').val();
//         console.log(text);
//         let commentToAdd = $(this).closest('.fullPost').find('.post').data().id;
//         for (let i = 0; i < posts.length; i++) {
//             if(posts[i].id == commentToAdd){
//                 posts[i].comments.push(userName + " : " + text);
//             }
//         }
//         renderComments();
//         //    $(this).closest('.fullPost').append('<p>'+ userName + ': '+ text +'</p>');
//         // $('.comment').closest('.post').comments.push(userName + " : " + text);
//         clearComment(); //
//     })
// })





$('.posts').on('click', '.remove', function () {
    let postToBeRemoved = $(this).closest('.post').data().id;
    for (let i in posts) {
        if (posts[i].id == postToBeRemoved) {
            posts.splice(i, 1);
        }
    }
    renderPosts()
});

