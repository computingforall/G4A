$(document).ready(
    function() {

        const displayname_regex = /^(?=.*[\w!@#$%^&*()_-]).{4,16}$/;
        const email_regex = /^(("[\w\d-.!%+ ]{1,64}")|^([\w\d-.!%+]{1,64}))(@[a-zA-Z0-9-.]+)(.[\w\d]+)?$/;
        const password_regex = /^(?=.*[\w])(?=.*[!@#$%^&*()_-]).{6,16}$/; // word, must have some special character, 6 chars min for length, 16 max.


        // LOGIN
        var loginTemplate = 
        `
        <form name="login-form" id="login-form">
            <label for="email">Email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <input type="submit" value="Login" id="submit-login">
        </form>
        `;

        $(loginTemplate).appendTo('#login');

        $('#login-form').on('submit', function(e) {
            e.preventDefault();
            const email = $('#email').val();
            const password = $('#password').val();

            if (email_regex.exec(email) === null) {
                alert('bad email');
            } else if (password_regex.exec(password) === null) {
                alert('bad password');
            } else {
                $('#login-form')[0].reset();
                axios.post('/login', {
                    email,
                    password
                })
                .then((response) => {
                    window.location = '/';
                })
                .catch((error) => {
                });
            }
        });

        // REGISTER
        var registrationTemplate =
        `
        <form name="form" id="register-form">
            <label for="displayname">Display Name: </label><br>
            <input type="text" name="displayname" id="displayname" required><br>

            <label for="email">Email: </label><br>
            <input type="text" name="email" id="new-email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="new-password" required><br>
            <ul>
                <li>1 special character</li>
                <li>1 uppercase chracter</li>
                <li>1 number</li>
                <li>Minimum of 6 characters</li>
            </ul
            <div>
            <label for="tos">Agree to <a href="#">Terms of Service</a>:</label>
            <input type="checkbox" name="tos" id="tos" required><br>
            </div>
            <input type="submit" id="submit-registration" value="Register">
        </form>
        `
        $(registrationTemplate).appendTo('#register');


        $('#register-form').on('submit', function(e) {
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
                    window.location = '/';
                })
                .catch((error) => {
                });
            } 
        });

});