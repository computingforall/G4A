$(document).ready(
    function() {

        // Main Navigation Bar
        var nav_html =
        `
        <header>
            <div><div class="nav-logo">Games For All</div></div>
            <nav>
                <a></a>
            </nav>
        </header>
        `

        var footer_html =
        `
        <footer>
            <div id="copyright"><i class="fas fa-copyright"></i> Games For All 2021</div>
            <nav></nav>
        </footer>
        `

        $('body').prepend(nav_html);
        $('body').append(footer_html);

        let nav_items = $('nav').find('a').first();
        nav_items.clone().appendTo('nav').attr('href','#').html('Home');
        nav_items.clone().appendTo('nav').attr('href','#').html('Games');
        nav_items.clone().appendTo('nav').attr('href','#').html('Profile & Settings');
        $('nav').find('a').first().remove();

        //Comments Field 
        $('.comment-submit').click(
            function () {
                let text = $('#comment-text').val();
                var commentTemplate =
                `
                <div class="post">
                     <div class="user-pro"> 
                        <div><img src="./widgets/img/shiggy.jpg"></div>
                        <div><h2>Player 1</h2></div>
                    </div>
                        <div><p class="comment">`+text+`</p></div>
                        <div></div>
                        <div class="likeButton"></div>
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

//Share Button
$('.share-button').click(
    function(){
        let score = Math.ceil(Math.random() * (10000 - 1000) + 1000);
        let shareTemplate = 
        `
        <div class="post">
           <div><h2>Player 1</h2></div>
       </div>
           <div><p class="comment">Player 1 got  `+score+`  points!</p></div>
           <div></div>
           <div class="likeButton"></div>
        </div>
        `
        $('.posts').append(shareTemplate);
        
    }
);