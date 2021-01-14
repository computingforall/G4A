$(document).ready(
    function() {

        // Main Navigation Bar
        var nav_html =
        `
        <header>
            <h1>Site</h1>
            <nav>
                <a></a>
            </nav>
        </header>
        `

        $('body').prepend(nav_html);
        let nav_items = $('nav').find('a').first();
        nav_items.clone().appendTo('nav').attr('href','#').html('Home');
        nav_items.clone().appendTo('nav').attr('href','#').html('Games');
        nav_items.clone().appendTo('nav').attr('href','#').html('Profile & Settings');
        $('nav').find('a').first().remove();

    };

    //Comments Field 
    function() {
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
      };
);