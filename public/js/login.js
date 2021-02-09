$(document).ready(
    function() {
        
        var loginTemplate =
        `
        <form name="login-form" action="/login" method="get" novalidate>
            <label for="email">email: </label><br>
            <input type="text" name="email" id="email" required><br>

            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" required><br>

            <input type="submit" value="Submit" id="submit-login">
        <form>
        `
        $(loginTemplate).prependTo('body');
});