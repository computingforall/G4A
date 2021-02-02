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
            function(e) {
                e.preventDefault();

                
                if ($('#username').val() == (JSON.parse(localStorage.getItem($('#username').val())).username)) {
                    if ($('#password').val() == JSON.parse(localStorage.getItem($('#username').val())).password) {
                        let temp_user = JSON.parse(localStorage.getItem($('#username').val()));
                        temp_user.loggedIn = true;
                        
                        localStorage.setItem(temp_user.username, JSON.stringify(temp_user));
                        alert("Successfully logged in");
                    } else {
                        alert("wrong Username/Password");
                    }
                } else {
                    alert("wrong Username/Password");
                }
                
            }
        );
});