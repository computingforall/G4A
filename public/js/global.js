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
        const userName = 'shiggy';
        const postDate = new Date().valueOf();

        //Comments Field 
        $(document).on('click', '.comment-submit', function(){
                let commentText = $('#comment-text').val();

                var commentTemplate =
                `
                <div class="post">
                    <div class="user-pro">
                        <div><img src='./images/avatars/${userName}.jpg'></div>
                        <div><h2>${userName}</h2></div>
                    </div>
                    <div>
                        <p id="${userName}${postDate}" class="comment"></p>
                        <div class="edit-area">
                            <textarea class="edit-comment"></textarea>
                            <button class="edit-confirm">Confirm</button>
                            <button class="cancel-edit ghost">Cancel</button>
                        </div>
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
                        <div class="user-buttons">
                            <div class="comment-button-container">
                                <button class="reply-button">Reply</button>
                                <button class="edit-button">Edit</button>
                            </div>
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

                if (commentText.length !== 0) {
                    $('.posts').append(commentTemplate);
                    $(`#${userName}${postDate}`).text(commentText);
                    $('#comment-text').val('');
                }
                // fix the connection between the comment submit and the main submit button
                $('.reply-field').hide();
                $('.edit-area').hide();
                $('.reply-button').show();
                $('.reply-text').val('');

                $('.reply-cancel').click(function () {
                    $(this).parent().hide();
                    $('.reply-text').val('');
                    $(this).parent().siblings('.reply-button-container').find('.reply-button').show();
                });
                 

        });

        //Edit Buttons
        $(document).on('click', '.edit-button', function(){
            let toEdit = $(this).parent().parent().siblings().first().text();
            console.log(toEdit);
            $(this).parent().parent().siblings('.edit-area').children('.edit-comment').text(toEdit);
            console.log(toEdit);
            $(this).parent().parent().siblings('.edit-area').show();
            $(this).parent().hide();
        });

        $(document).on('click', '.edit-confirm', function() {
            let editVal = $(this).siblings('.edit-comment').val();
            $(`#${userName}${postDate}`).text(editVal);
            $(this).parent().hide();
            $(this).parent().siblings('.user-buttons').children('.comment-button-container').show();
        });

        $(document).on('click', '.cancel-edit', function() {
            $(this).parent().hide();
            $(this).parent().siblings('.user-buttons').children('.comment-button-container').show();
            console.log($('.edit-comment').text());
            $('.edit-comment').val('');
        });

        //Reply Buttons

        $(document).on('click', '.reply-button', function(){
            $(this).parent().hide();
            $(this).parent().siblings().last().children().show();
        });

        $(document).on('click', '.cancel-submit', function(){
            $(this).parent().hide();
            $('.reply-text').val('');
            $(this).parent().parent().siblings('.comment-button-container').show();
        });

        
        let num = 0;

        $(document).on('click', '.reply-submit', function(){
            let replyVal = $(this).siblings('.reply-text').val();
            num++;
            const postDate = new Date().valueOf();
            const playNum = `Player ${num}`;

            var replyTemplate =
            `
            <div>
            <div class="user-pro">
                <div><img src='./images/avatars/default.jpg'></div>
                <div><h2>${playNum}</h2></div>
            </div>
            <div>
                <p id="${playNum.split(' ').join('')}${postDate}" class="reply-post"></p>
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
            let replyText = function() {
                $(this).parent().siblings('.replied-comment').append(replyTemplate);
                $(`#${playNum.split(' ').join('')}${postDate}`).text(replyVal);
                $('.reply-text').val('');
                $('.reply-field').hide();
                $(this).parent().parent().siblings().first().show();
                $(this).parent().hide();
            }.bind(this);

            if (replyVal.length !== 0) {
                replyText();
            }
            
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
                    <button class="edit-button">Edit</button>
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
        

          //Star rating
          $('.star-grade').addClass('star-rating-1');

          let starRating;

          $(document).on('click', '.star-grade', function(){
            $('.star-rate-group').children().removeClass('star-rating-checked-1');
            for (let i = 0; i < $(this).attr('value'); i++) {
                $('.star-rate-group').children().eq(i).addClass('star-rating-checked-1');
            };
            starRating = $(this).attr('value');
          });

          //Submit review
          $('.review-form').on('submit', function(e){
              e.preventDefault();
              let game_title = $(".game-title").text();
              let rating = starRating;
              let comment = $('#review').val();
              let data = {
                  "game_title": game_title,
                  "rating": rating,
                  "comment": comment,
              };
              fetch('/review', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
              });
          });
});