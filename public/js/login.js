$(document).ready(
    function() {
        var loginTemplate = 
        `
        <form name="login-form" id="login-form">
            <label for="email">email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <input type="submit" value="Submit" id="submit-login">
        </form>
        `;

        $(loginTemplate).appendTo('#page');

        $('#login-form').on('submit', function(e) {
            e.preventDefault();
            const email = $('#email').val();
            const password = $('#password').val();

            axios.post('/login', {
                email,
                password
            })
              .then((response) => {
                  window.location = '/';
              })
              .catch((error) => {
                  console.log(error);
              });
        });

});