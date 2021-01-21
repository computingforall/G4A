$(document).ready(
    function() {
        var registrationTemplate =
        `
        <form>
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
            function() {
                if(($('#password').val() == $('#confirm-password').val()) && $('password').length > 0) {
                    localStorage.setItem('username', $('#username').val());
                    localStorage.setItem('password', $('#password').val());
                    alert("Success in creating account");
                }
            }
        );



});