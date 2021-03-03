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
            $('.displayname').html("<b>Display Name:</b> " + name);
            $('.email').html("<b>Email:</b> " + email);
            $('.user-image').attr('src', `${image}`);
            $('#bio-text').html(biography);
        })
        .catch((error) => {
            console.log(error);
        });

        let profile_settings = 
        `
        <div id="settings">
            <h1>Change Profile Settings</h1>
            <form name="apply-settings-form" id="apply-settings-form">
                <label for="displayname">Display Name: </label><br>
                <input type="text" name="displayname" id="displayname" required><br>

                <label for="email">Email: </label><br>
                <input type="text" name="email" id="email" required><br>

                <label for="password">Password: </label><br>
                <input type="text" name="password" id="password" required><br>

                <label for="image">Image: </label><br>
                <input type="text" name="image" id="image"><br>


                <label for="password">Verify Password: </label><br>
                <input type="text" name="verify-password" id="verify-password" required><br><br>

                <button type="submit" class="apply-settings">Apply Changes</button> 
            </form>
        </div>
        `;
        $('#change-settings').on('click', function() {
            let change_settings_btn = $(this);
            $(this).clone().attr('id', 'cancel').html('Cancel').prependTo('#page');
            $(this).detach();
            $(profile_settings).appendTo('#page');


            let current_bio = $('#bio-text').html();
            $('#bio-text').html(`<textarea rows="5" cols="100">${current_bio}</textarea>`);

            $('#cancel').on('click', function() {
                change_settings_btn.prependTo('#page');
                $('#bio-text').html(`${current_bio}`);
                $(this).remove();
                $('#settings').remove();
            });

            $('#apply-settings-form').on('submit', function(e) {
                e.preventDefault();
                const displayname = $('#displayname').val();
                const password = $('#password').val();
                const email = $('#email').val();
                const image = $('#image').val();

                let biography = $('#bio-text').find('textarea').val();


                axios.post('/settings', {
                    displayname,
                    email,
                    password,
                    image,
                    biography
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