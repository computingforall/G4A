$(document).ready(
    function() {
        var registrationTemplate =
        `
        <form name="form" id="form">
            <label for="displayname">Display Name: </label><br>
            <input type="text" name="displayname" id="displayname" required><br>

            <label for="email">Email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <label for="tos">Agree to Terms of Service: </label><br>
            <input type="checkbox" name="tos" id="tos" required>

            <input type="submit" id="submit-registration">
        <form>
        `
        $(registrationTemplate).prependTo('body');

        
        $('form').on('submit', function(e) {
            e.preventDefault();
            const displayname = $('#displayname').val();
            const email = $('#email').val();
            const password = $('#password').val();
            
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
        });
});