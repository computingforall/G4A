$(document).ready(
    function() {
        // action="/login" method="get"
        var loginTemplate =
        `
        <form name="login-form">
            <label for="email">email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <input type="submit" value="Submit" id="submit-login">
        <form>
        `
        $(loginTemplate).prependTo('body');
        $('form').on('submit', function(e) {
            e.preventDefault();
            const email = $('#email').val();
            const password = $('#password').val();
            // console.log(email, password);
            axios.post('/login', {
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