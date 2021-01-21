$(document).ready(
    function() {
        
        var loginTemplate =
        `
        <form>
            <label for="username">Username: </label><br>
            <input type="text" name="username" id="username" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <input type="submit" value="Submit" id="submit-login">
        <form>
        `
        $(loginTemplate).prependTo('body');
        $('#submit-login').click(
            function() {
                if(($('#password').val() == localStorage.getItem('password')) && ($('#username').val() == localStorage.getItem('username'))) {
                    alert("Successfully logged in");
                }
            }
        );
});