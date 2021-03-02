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
            $('.displayname').html("Display Name: " + name);
            $('.email').html("Email: " + email);
            console.log(image);
            $('.user-image').attr('src', `${image}`);
        })
        .catch((error) => {
            console.log(error);
        });

        let profile_settings = 
        `
        <form name="apply-settings-form"" id="apply-settings-form">
            <label for="displayname">Display Name: </label><br>
            <input type="text" name="displayname" id="displayname" required><br>

            <label for="email">Email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="text" name="password" id="password" required><br>

            <label for="image">Image: </label><br>
            <input type="text" name="image" id="image"><br>


            <button type="submit" class="apply-settings">Test</button> 
        </form>
        `;
        $(profile_settings).appendTo('#page');

        $('#apply-settings-form').on('submit', function(e) {
                e.preventDefault();
                const displayname = $('#displayname').val();
                const password = $('#password').val();
                const email = $('#email').val();
                const image = $('#image').val();
                axios.post('/settings', {
                    displayname,
                    email,
                    password,
                    image
                })
                  .then((response) => {
                      location.reload();
                      console.log(response);
                  })
                  .catch((error) => {
                      console.log(error);
                  });
            });

        

});