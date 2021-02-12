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

        var logoutTemplate =
        `
            <form name="logout-form" id="logout-form">
                <label>Logout: </label>
                <input type="submit" value="submit" id="submit-logout">
            </form>
        `;

        $(logoutTemplate).prependTo('body');
        $(loginTemplate).prependTo('body');

        $('#logout-form').on('submit', function(e) {
            e.preventDefault();
            axios.get('/logout', {})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        });


        $('#login-form').on('submit', function(e) {
            e.preventDefault();
            const email = $('#email').val();
            const password = $('#password').val();

            axios.post('/login', {
                email,
                password
            })
              .then((response) => {
                  
              })
              .catch((error) => {
                  console.log(error);
              });
        });

});