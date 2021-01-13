$(document).ready(
    function () {

        $('.comment-submit').click(
            function () {
                //assigns post to clone the first post
                let post = $('.post').first().clone();
                //assigns text to current value (whatever text you input) in comment box
                let text = $('#comment-text').val();
                //finds the comment class, sets html to the text
                post.find('.comment').html(text);
                //appends comment to the rest of the posts
                post.appendTo('.posts');
                //clears the text box after you submit a comment
                $('#comment-text').val('');

            });

        });