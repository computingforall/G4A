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
            <div><div class="nav-logo"><a href="./index.html">Games For All</a></div></div>
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
        nav_items.clone().appendTo('nav').attr('href','./index.html').html('Home');
        nav_items.clone().appendTo('nav').attr('href','./friends.html').html('Friends');
        function navBar() {
            if (session_data) {
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

        $(document).on('mouseover', '.comment-submit', function(){
            let text = $('#comment-text').val();
            console.log(text.length)
            if (text.length == 0){
                $('.comment-submit').addClass('error-button');
            }
        });

        $(document).on('mouseout', '.comment-submit', function(){
            let text = $('#comment-text').val();
            console.log(text.length)
            if (text.length !== 0){
                $('.comment-submit').removeClass('error-button');
            }
        });

        //Comments Field 
        $(document).on('click', '.comment-submit', function(){
                let text = $('#comment-text').val();

                var commentTemplate =
                `
                <div class="post">
                    <div class="user-pro"> 
                        <div><img src='./images/avatars/shiggy.jpg'></div>
                        <div><h2>shiggy</h2></div>
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
                        <div>
                          <div class="reply-button-container"><button class="reply-button">Reply</button></div>
                          <div>
                              <div class="reply-field">
                                  <textarea class="reply-text" placeholder="Leave a reply..."></textarea>
                                  <button class="reply-submit">Submit</button>
                                  <button class="cancel-submit ghost">Cancel</button>
                              </div>
                              <div class="replied-comment"></div>
                          </div>
                        </div>
                    </div>
                </div>
                `
                $('.posts').append(commentTemplate);
                $('#comment-text').val('');

                /*
                Hide reply field when document is ready
                Hide reply button on click
                Show text field submit and cancel button on reply click
                Create reply template used for replied comment
                Append as child replied comment when submit is clicked
                Show reply button again
                Create a cancel button
                */


                // $('.reply-field').eq(commentId -1).hide();
                // $('.reply-button').click(
                //     function () {
                //         $(this).parent().siblings('.reply-field').show();
                //     }
                // );
                
                // var reply;

                // $('.reply-text').eq(commentId -1).keyup(
                //     function() {
                //         reply = $(this).val();
                        
                //     }
                // );

                // $('.reply-submit').eq(commentId -1).click(
                //     function () {

                //         let replyId = $(this).parent().parent().find('.reply-box').attr('id');
                //         console.log(replyId);
                      

                //         var replyTemplate = 
                //         `
                //         <div class="reply-post">
                            // <div class="user-pro"> 
                            //     <div><img src='${localStorage.getItem('image')}'></div>
                            //     <div><h2>` + session_data + ` </h2></div>
                            // </div>
                            // <div><p>` + reply + `</p></div>
                            // <div class="pointButton likeButton">
                            //     <div class="pointButtonG like unliked checkLike">
                            //         <i class="fas fa-thumbs-up"></i>
                            //         <p class="likeCount">0</p>
                            //     </div>
                            //     <div class="pointButtonG dislike undisliked checkDislike">
                            //         <i class="fas fa-thumbs-down"></i>
                            //         <p class="dislikeCount">0</p>
                            //     </div>
                            // </div>
                //         </div>
                //         `

                //         $('#' + replyId).append(replyTemplate);


                //         $('.reply-text').val('');
                //         $(this).parent().hide();


                //     }

                // );
                $('.reply-field').hide();
                $('.reply-button').show();
                $('.reply-text').val('');

                $('.reply-cancel').click(function () {
                    $(this).parent().hide();
                    $('.reply-text').val('');
                    $(this).parent().siblings('.reply-button-container').find('.reply-button').show();
                });
                 

        });

        //Reply Button
                
        $(document).on('click', '.reply-button', function(){
            $(this).hide();
            $(this).parent().siblings().last().children().show();
        });

        $(document).on('click', '.cancel-submit', function(){
            $(this).parent().hide();
            $('.reply-text').val('');
            $(this).parent().parent().siblings('.reply-button-container').children().show();
        });

        
        let num = 0;

        $(document).on('click', '.reply-submit', function(){
            let replyVal = $(this).siblings('.reply-text').val();
            num++;
            var replyTemplate =
            `
            <div>
            <div class="user-pro">
                <div><img src='./images/avatars/default.jpg'></div>
                <div><h2>Player ` + num + `</h2></div>
            </div>
            <div>
                <p class="reply-post">` + replyVal + `</p>
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
            </div>
            `
            $(this).parent().siblings('.replied-comment').append(replyTemplate);
            $(this).parent().hide();
            $(this).parent().parent().siblings('.reply-button-container').children().show();
            $('.reply-text').val('');
            $('.reply-field').hide();
        });

        //Share Button
        $('.share-button').click(
            function(){
                let score = Math.ceil(Math.random() * (10000 - 1000) + 1000);
                let shareTemplate = 
                `
                <div class="post">
                    <div class="user-pro"> 
                        <div><img src='./images/avatars/shiggy.jpg'></div>
                        <div><h2>shiggy</h2></div>
                    </div>
                   <div><p class="comment">shiggy scored  `+score+`  points!</p></div>
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


