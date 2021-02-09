$(document).ready(
    function() {

        // Main Navigation Bar
        var nav_html =
        `
        <header>
            <div><div class="nav-logo"><a href="index.html">Games For All</a></div></div>
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
        nav_items.clone().appendTo('nav').attr('href','#').html('Friends');
        nav_items.clone().appendTo('nav').attr('href','#').html('Profile');
        $('nav').find('a').first().remove();

        var commentId = 0;

        //Comments Field 
        $('.comment-submit').click(
            function () {
                commentId++
                let text = $('#comment-text').val();
                var commentTemplate =
                `

                <div class="post">

                    <div class="user-pro"> 
                        <div><img src='${localStorage.getItem('image')}'></div>
                        <div><h2>`+ localStorage.getItem('username') + ` </h2></div>
                    </div>
                    <div><p class="comment">` + text + `</p></div>
                    <div id=${commentId} class="reply-box"></div>
                    <button class="reply-button">Reply</button>
                    <div class="reply-field">
                        <button class="reply-submit">Submit</button>
                        <textarea class="reply-text"></textarea>
                    </div>
                    <div class="likeButton">
                        <div class="like unliked checkLike">
                            <i class='far fa-heart'></i>
                            <p class="likeCount">0</p>
                        </div>
                        <div class="dislike undisliked checkDislike">
                            <i class="fas fa-heart-broken"></i>
                            <p class="dislikeCount">0</p>
                        </div>
                    </div>
                </div>
                `
                $('.posts').append(commentTemplate);
                $('#comment-text').val('');


                //Reply Button
                $('.reply-field').eq(commentId -1).hide();
                $('.reply-button').eq(commentId -1).click(
                    function () {
                        $('.reply-field').eq(commentId -1).show();
                    }
                );
                
                var reply;

                $('.reply-text').eq(commentId -1).keyup(
                    function() {
                        reply = $(this).val();
                        
                    }
                );

                $('.reply-submit').eq(commentId -1).click(
                    function () {

                        let replyId = $(this).parent().parent().find('.reply-box').attr('id');
                        console.log(replyId);
                      
                        var replyTemplate = 
                        `
                        <div>` + reply + `</div>
                        `

                        $('#' + replyId).append(replyTemplate);

                        $('.reply-text').val('');
                        $('.reply-field').eq(commentId -1).hide();

                    }

                );

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

        //Share Button
        $('.share-button').click(
            function(){
                let score = Math.ceil(Math.random() * (10000 - 1000) + 1000);
                let shareTemplate = 
                ` 
                <div class="post">
                   <div><h2>Player 1</h2></div>
               </div>
                   <div><p class="comment">Player 1 scored  `+score+`  points!</p></div>
                   <div></div>
                   <div class="likeButton"></div>
                </div>
                `
                $('.posts').append(shareTemplate);
                
            }
        );

        $(document).on('click', '.like', function() {
            let currentVal = $(this).children().last().html();
            let siblingVal = $(this).siblings().first().children().last().html();
            if ($(this).siblings().first().hasClass("checked")) {
              currentVal = Number(currentVal) + 1;
              $(this).children().last().html(currentVal);
              siblingVal = Number(siblingVal) - 1;
              $(this).siblings().first().children().last().html(siblingVal);
              $(this).siblings().first().removeClass('checked');
              $(this).addClass('checked');
            } else if ($(this).hasClass('checked')) {
              currentVal = Number(currentVal) - 1;
              $(this).children().last().html(currentVal);
              $(this).removeClass('checked');             
            } else {
              $(this).addClass('checked');
              currentVal = Number(currentVal) + 1;
              $(this).children().last().html(currentVal);        
            }
          });
      
          $(document).on('click', '.dislike', function() {
            let currentVal = $(this).children().last().html();
            let siblingVal = $(this).siblings().first().children().last().html();
            if ($(this).siblings().first().hasClass("checked")) {
              currentVal = Number(currentVal) + 1;
              $(this).children().last().html(currentVal);
              siblingVal = Number(siblingVal) - 1;
              $(this).siblings().first().children().last().html(siblingVal);
              $(this).siblings().first().removeClass('checked');
              $(this).addClass('checked');
            } else if ($(this).hasClass('checked')) {
              currentVal = Number(currentVal) - 1;
              $(this).children().last().html(currentVal);
              $(this).removeClass('checked');             
            } else {
              $(this).addClass('checked');
              currentVal = Number(currentVal) + 1;
              $(this).children().last().html(currentVal);        
            }
          });
});


