$(document).ready(
    function() {
        var registrationTemplate =
        `
        <form name="form" id="register-form">
            <label for="displayname">Display Name: </label><br>
            <input type="text" name="displayname" id="displayname" required><br>

            <label for="email">Email: </label><br>
            <input type="text" name="email" id="new-email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="new-password" required><br>

            <label for="tos">Agree to Terms of Service: </label><br>
            <input type="checkbox" name="tos" id="tos" required>

            <input type="submit" id="submit-registration">
        </form>
        `
        $(registrationTemplate).prependTo('#page');


        $('#register-form').on('submit', function(e) {
            e.preventDefault();
            const displayname = $('#displayname').val();
            const email = $('#new-email').val();
            const password = $('#new-password').val();

            const displayname_regex = /^(?=.*[\w!@#$%^&*()_-]).{4,16}$/;
            const email_regex = /^(("[\w\d-.!%+ ]{1,64}")|^([\w\d-.!%+]{1,64}))(@[a-zA-Z0-9-.]+)(.[\w\d]+)?$/;
            const password_regex = /^(?=.*[\w])(?=.*[!@#$%^&*()_-]).{6,16}$/; // word, must have some special character, 6 chars min for length, 16 max.

            if (email_regex.exec(email) === null) {
                alert('bad email');
            } else if (password_regex.exec(password) === null) {
                alert('bad password');
            } else if (displayname_regex.exec(displayname) === null) {
                alert('bad display name');
            } else {
                axios.post('/register', {
                    displayname,
                    email,
                    password
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            } 
        });
});