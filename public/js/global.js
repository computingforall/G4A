$(document).ready(
    function() {

        let session_data = undefined;
        
        async function loggedIn() {
            try {
                await axios.post('/')
                .then((response) => {
                    session_data = response.data;
                    navBar();
                })
            } catch (error) {
                
            }
        }
        loggedIn();
        
        

        // Main Navigation Bar
        var nav_html =
        `
        <header>
            <div><div class="nav-logo"><a href="/index.html">Games For All</a></div></div>
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
        nav_items.clone().appendTo('nav').attr('href','/index.html').html('Home');
        function navBar() {
            if (session_data) {
                nav_items.clone().appendTo('nav').attr('href','/friends.html').html('Friends');
                nav_items.clone().appendTo('nav').attr('href','/profile.html').html('Profile');
                nav_items.clone().appendTo('nav').attr('href','').attr('id', 'logout').html('Logout');
            } else {
                nav_items.clone().appendTo('nav').attr('href','/login.html').html('Login');
            }
        }

        $(document).on('click', '#logout', function(e) {
            axios.get('/logout', {})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        });
        
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
                        <div><h2>` + session_data + ` </h2></div>
                    </div>
                    <div>
                        <p class="comment">` + text + `</p>
                        <div class="pointButton likeButton">
                            <div class="pointButtonG like unliked checkLike">
                                <i class="fas fa-thumbs-up"></i>
                                <p class="likeCount">0</p>
                            </div>
                            <div class="pointButtonG dislike undisliked checkDislike">
                                <i class="fas fa-thumbs-down"></i>
                                <p class="dislikeCount">0</p>
                            </div>
                        </div>
                        <button class="reply-button">Reply</button>
                        <div id=${commentId} class="reply-box"></div>
                        <div class="reply-field">
                            <button class="reply-submit">Submit</button>
                            <textarea class="reply-text txtarea" placeholder="Leave a comment..."></textarea>
                        </div>
                    </div>
                    <div id=${commentId} class="reply-box"></div>
                    <div class="reply-button-container"><button class="reply-button">Reply</button></div>
                    <div class="reply-field">
                        <textarea class="reply-text" placeholder="Leave a reply..."></textarea>
                        <button class="reply-submit">Submit</button>
                    </div>
                </div>
                `
                // fix the submit/reply button so it's even with the comment bar

                $('.posts').append(commentTemplate);
                $('#comment-text').val('');


                //Reply Button
                $('.reply-field').eq(commentId -1).hide();
                $('.reply-button').click(
                    function () {
                        $(this).parent().siblings('.reply-field').show();
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
                        <div class="reply-post">
                            <div class="user-pro"> 
                                <div><img src='${localStorage.getItem('image')}'></div>
                                <div><h2>` + session_data + ` </h2></div>
                            </div>
                            <div><p>` + reply + `</p></div>
                            <div class="pointButton likeButton">
                                <div class="pointButtonG like unliked checkLike">
                                    <i class="fas fa-thumbs-up"></i>
                                    <p class="likeCount">0</p>
                                </div>
                                <div class="pointButtonG dislike undisliked checkDislike">
                                    <i class="fas fa-thumbs-down"></i>
                                    <p class="dislikeCount">0</p>
                                </div>
                            </div>
                        </div>
                        `

                        $('#' + replyId).append(replyTemplate);
                        
                        $('.reply-text').val('');
                        $(this).parent().hide();
                        
                    }
                );

        });

        /*
          
        */

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
                    <div class="user-pro"> 
                        <div><img src='${localStorage.getItem('image')}'></div>
                        <div><h2>` + session_data + ` </h2></div>
                    </div>
                   <div><p class="comment">Player 1 scored  `+score+`  points!</p></div>
                   <div class="pointButton likeButton">
                        <div class="pointButtonG like unliked checkLike">
                            <i class="fas fa-thumbs-up"></i>
                            <p class="likeCount">0</p>
                        </div>
                        <div class="pointButtonG dislike undisliked checkDislike">
                            <i class="fas fa-thumbs-down"></i>
                            <p class="dislikeCount">0</p>
                        </div>
                    </div>
                </div>
                `
                $('.posts').append(shareTemplate);
                
            }
        );

        //Game Preview Slider
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = $(".slider-preview");
            var dots = $(".dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides.eq(i).hide();
            }
            for (i = 0; i < dots.length; i++) {
                dots.eq(i).removeClass('active');
            }
            slides.eq(slideIndex-1).fadeIn(1000);
            dots.eq(slideIndex-1).addClass('active');
          }

        $('.slide-left').click(
            function(){
              plusSlides(-1);
            }
        
        );
        $('.slide-right').click(
            function(){
                plusSlides(1);
            }
        );

        //Like and dislike buttons
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


