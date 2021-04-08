$(document).ready(function() {
    let session_data = false;
    
    $('.review-form').hide();
    $('.pleaseLogin').show();
    $('.text-area').hide();

    async function loggedIn() {
        try {
            await axios.post('/')
            .then((response) => {
                session_data = response.data;
                navBar();
            })
            .then(() => {
                if (session_data) {
                    $('.review-form').show();
                    $('.pleaseLogin').hide();
                    $('.text-area').show();
                    $('.reply-button').show();
                }
            })
            .catch((error) => {
                console.log(error);
            });
        } catch (error) {
            
        }
    }
    loggedIn();

        // REGISTER
        var registrationTemplate =
        `
        <div id="register-modal">
        <h2>Registration Form</h2>
            <form name="register-form" id="register-form">
                <label for="displayname">Display Name: </label>
                <input type="text" name="displayname" id="displayname" required>

                <label for="email">Email: </label>
                <input type="email" name="email" id="new-email" required>

                <label for="password">Password: </label>
                <input type="password" name="password" id="new-password" 
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$" 
                title="Must contain at least one number, one special character, and one uppercase and lowercase letter, and at least 6 or more characters" required>

                <!--<label for="tos">Agree to <a href="#">Terms of Service</a>:</label>
                <input type="checkbox" name="tos" id="tos" required>-->

                <input type="submit" id="submit-registration" value="Register">
                
            </form>
        </div>
        `

        $(document).on('click', '.register-here', function(e) {
            $(".modal").empty();
            $(registrationTemplate).appendTo('.modal');

        });

        $(document).on('submit', '#register-form', function(e) {
            e.preventDefault();
            const displayname = $('#displayname').val();
            const email = $('#new-email').val();
            const password = $('#new-password').val();

            if (email_regex.exec(email) === null) {
                alert('bad email');
            } else if (password_regex.exec(password) === null) {
                alert('bad password');
            } else if (displayname_regex.exec(displayname) === null) {
                alert('bad display name');
            } else {
                $('#register-form')[0].reset();
                axios.post('/register', {
                    displayname,
                    email,
                    password
                })
                .then((response) => {
                    location.reload();
                })
                .catch((error) => {
                });
            } 
        });

        //Comments Field 
        $(document).on('click', '.comment-submit', function(){
                let commentText = $('#comment-text').val();
                let data = {
                    "comment": commentText,
                }
        }

    // This is how we get out of modals, user mouse downs on the 'outside' of the modal.
    // General layout of a modal goes as follows: .modal -> #inner-modal (whatever you want to call it) -> content.
    $(document).on('mousedown', function(e) {
        if ($(e.target).hasClass('modal')) {
            $('.modal').remove();
        }
    });

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
            nav_items.clone().appendTo('nav').attr('id', 'login').html('Login');
        }
    }
    $('nav').find('a').first().remove();

    //Comments Field 
    $(document).on('click', '.comment-submit', function(){
            let commentText = $('#comment-text').val();
            let data = {
                "comment": commentText,
            }

            fetch('/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(() => {
                window.location.reload();
            });

            $(this).parent().hide();
            $(this).parent().siblings('.user-buttons').children('.comment-button-container').show();
        });

        $(document).on('click', '.cancel-edit', function() {
            $(this).parent().hide();
            $(this).parent().siblings('.user-buttons').children('.comment-button-container').show();
            console.log($('.edit-comment').text());
            $('.edit-comment').val('');
        });
                location.reload();
            });
    });
    
    //Edit Buttons
    $(document).on('click', '.edit-button', function(){
        let toEdit = $(this).parent().parent().siblings().first().text();
        $(this).parent().parent().siblings('.edit-area').children('.edit-comment').text(toEdit);
        $(this).parent().parent().siblings('.edit-area').show();
        $(this).parent().hide();
    });

    $(document).on('click', '.edit-confirm', function() {
        let edit = $(this).siblings('.edit-comment').val();
        let id = $(this).parent().siblings().first().data('commentId');
        let data = {
            edit,
            id
        }
        fetch('/comments', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(() => {
            // location.reload();
        })

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
            body: JSON.stringify(data),
        });
    });

    // Get request for reviews
    axios.get('/review')
        // .then(response => response.json())
        .then(({ data }) => {
            data.forEach((item) => {
                const { userName, date, comment, avatar, edit, _id } = item;

                let reviewTemplate = 'chicken';

                $('#reviews').append(reviewTemplate);
            });
        })
        .catch(err => {
            console.log('review error', err);
        });

    // Get request for comments
    fetch('/comments')
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                const { userName, date, comment, avatar, edit, _id } = item;

                let commentText = 
                `
                <div class="post">
                <div class="user-pro">
                    <div><img src='${avatar}'></div>
                    <div><h2>${userName}</h2></div>
                </div>
                <div>
                    <p id="${userName}${date}" data-comment-id="${_id}" class="comment">${comment}</p>
                    <div class="edit-area">
                        <textarea class="edit-comment">${comment}</textarea>
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
                            ${edit ? '<button class="edit-button">Edit</button>' : '<div></div>'}
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
            $(`#${userName}${date}`).text(comment);
            $('.posts').append(commentText);
            });
        });
});