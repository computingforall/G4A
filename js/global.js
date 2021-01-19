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

        //Comments Field 
        var commentTemplate =
        `
        <div class="post">
             <div class="user-pro"> 
                <div><img src="./img/shiggy.jpg"></div>
                <div><h2>Player 1</h2></div>
            </div>
                <div><p class="comment">This is a comment.</p></div>
                <div class="likeButton"></div>
        </div>
        `
        
        // $('.posts').append(commentTemplate);
        $('.comment-submit').click(
            function () {
                let text = $('#comment-text').val();
                var commentTemplate =
                `
                <div class="post">
                     <div class="user-pro"> 
                        <div><img src="./img/shiggy.jpg"></div>
                        <div><h2>Player 1</h2></div>
                    </div>
                        <div><p class="comment">`+text+`</p></div>
                        <div></div>
                </div>
                `
                $('.posts').append(commentTemplate);
                $('#comment-text').val('');

        });

        //Like Dislike Buttons
        // Create value and add to element, function updates value, updates element
        $('.like').click(
            function() {
            // console.log(typeof $('.like').html())
                let likes = $('.like').text();
                let likeCount = parseInt(likes);
                likeCount++;
                $('.like').html(likeCount);
            }
        )
});