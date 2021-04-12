$(document).ready(
    function() {

    // LOGIN 
    const displayname_regex = /^(?=.*[\w!@#$%^&*()_-]).{4,16}$/;
    const email_regex = /^(("[\w\d-.!%+ ]{1,64}")|^([\w\d-.!%+]{1,64}))(@[a-zA-Z0-9-.]+)(.[\w\d]+)?$/;
    const password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/; // word, must have some special character, 6 chars min for length, 16 max.

    var loginTemplate = 
    `
    <div class="modal">
        <div id="login-modal">
            <h2>Login Form</h2>
            <form name="login-form" id="login-form">
                <label for="email">Email:</label>
                <input type="text" name="email" id="email" required>

                <label for="password">Password:</label>
                <input type="password" name="password" id="password" autocomplete="current-password" required>
                <p>Don't have an account? <a href="#" class="register-here">Register Here</a></p>

                <input type="submit" value="Login" id="submit-login">
            </form>
        </div>
    </div>
    `;

    $(document).on('submit', '#login-form', function(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();

        $('#login-form')[0].reset();
        axios.post('/login', {
            email,
            password
        })
        .then((response) => {
            location.reload();
        })
        .catch((error) => {
        });
    });

    $(document).on('click', '#login', function(e) {
        e.preventDefault();
        $(loginTemplate).appendTo('#page');
    });

    $(document).on('click', '#logout', function(e) {
        axios.get('/logout', {})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    });

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

            <p>Already have an account? <a href="#" class="login-here">Login instead</a></p>
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

    $(document).on('click', '.login-here', function(e) {
        $(".modal").empty();
        $(loginTemplate).appendTo('.modal');

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

});