$(document).ready(
    function() {

        const displayname_regex = /^(?=.*[\w!@#$%^&*()_-]).{4,16}$/;
        const email_regex = /^(("[\w\d-.!%+ ]{1,64}")|^([\w\d-.!%+]{1,64}))(@[a-zA-Z0-9-.]+)(.[\w\d]+)?$/;
        const password_regex = /^(?=.*[\w])(?=.*[!@#$%^&*()_-]).{6,16}$/; // word, must have some special character, 6 chars min for length, 16 max.

        axios.get('/profile', {})
        .then((response) => {
            let name = response.data[0];
            let email = response.data[1];
            let image = response.data[2];
            let biography = response.data[3];
            $('.displayname').html(name);
            $('.email').html(email);
            $('.user-image').attr('src', `${image}`);
            $('#bio-text').text(biography);
        })
        .catch((error) => {
            alert('Not logged in.');
            location.href="/";
        });  
        
        let profile_settings = 
        `
        <div class="modal">
            <div id="settings">
                <h1>Change Profile Settings</h1>
                <form name="apply-settings-form" id="apply-settings-form">
                    <label for="displayname">Display Name: </label><br>
                    <input type="text" name="displayname" id="displayname" required><br>

                    <label for="email">Email: </label><br>
                    <input type="email" name="email" id="email" required><br>

                    <label for="password">New Password: </label><br>
                    <input type="password" name="password" id="password"><br>

                    <label for="image">Image: </label><br>
                    <input type="text" name="image" id="image"><br>

                    
                    <label for="biography">Biography: </label><br>
                    <textarea id="bio" rows="5" cols="100"></textarea><br>

                    <label for="verify-password">Verify Password: </label><br>
                    <input type="password" name="verify-password" id="verify-password" required><br><br>

                    <button type="submit" class="apply-settings">Apply Changes</button> 
                </form>
            </div>
        </div>
        `;
        

        
        $('#change-settings').on('click', function() {
            let change_settings_btn = $(this);
            $(this).detach();
            $(profile_settings).appendTo('#page');
            $(this).clone().attr('id', 'cancel').html('Cancel').appendTo('#apply-settings-form');


            $('#displayname').val($('.displayname').html());
            $('#email').val($('.email').html());
            $('#bio').val($('#bio-text').html());
            $('#image').val($('.user-image').attr('src'))


            $('#cancel').on('click', function() {
                change_settings_btn.prependTo('#page');
                $(this).remove();
                $('.modal').remove();
            });

            $('#apply-settings-form').on('submit', function(e) {
                e.preventDefault();
                const displayname = $('#displayname').val();
                const password = $('#password').val();
                const email = $('#email').val();
                const image = $('#image').val();
                const biography = $('#bio').val();
                const verify_password = $('#verify-password').val();

                axios.post('/settings', {
                    displayname,
                    email,
                    password,
                    image,
                    biography,
                    verify_password
                })
                  .then((response) => {
                      location.reload();
                  })
                  .catch((error) => {
                      console.log(error);
                  });
            });

        });

        

        

});