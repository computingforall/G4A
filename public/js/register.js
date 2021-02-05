$(document).ready(
    function() {
        
        class user {
            constructor(username, password, loggedIn, avatar) {
                this.username = username;
                this.password = password;
                this.loggedIn = loggedIn;
                this.avatar = avatar;
            }
        }
        
        


        var registrationTemplate =
        `
        <form name="registration-form">
            <label for="username">Username: </label><br>
            <input type="text" name="username" id="username" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <label for="confirm-password">Confirm Password: </label><br>
            <input type="password" name="confirm-password" id="confirm-password" required><br>

            <label for="tos">Agree to Terms of Service: </label><br>
            <input type="checkbox" name="tos" id="tos" required>

            <input type="submit" value="Submit" id="submit-registration">
        <form>
        `
        $(registrationTemplate).prependTo('body');
        $('#submit-registration').click(
            function(e) {

                e.preventDefault();
                if($('#password').val() == $('#confirm-password').val() ) {
                    let new_user = new user($('#username').val(), $('#password').val(), false, 'c://users/');
                    localStorage.setItem(new_user.username, JSON.stringify(new_user));
                    
                    document.forms['registration-form'].reset();
                    alert("Success in creating account");
                }
            }
        );



});