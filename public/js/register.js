$(document).ready(
    function() {
        var registrationTemplate =
        `
        <form name="registration-form">
            <label for="displayname">Display Name: </label><br>
            <input type="text" name="displayname" id="displayname" required><br>

            <label for="email">Email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <label for="confirm-password">Confirm Password: </label><br>
            <input type="password" name="confirm-password" id="confirm-password" required><br>

            <label for="tos">Agree to Terms of Service: </label><br>
            <input type="checkbox" name="tos" id="tos" required>

            <input type="submit" value="submit" id="submit-registration">
        <form>
        `
        $(registrationTemplate).prependTo('body');
        $('#submit-registration').on('submit', function() {
            axios.post('/register', {
                displayname: 'displayname', email: 'email', password: 'password'
            })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        });
});