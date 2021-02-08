$(document).ready(
    function() {
        var registrationTemplate =
        `
        <form name="form" id="form" action="/register" method="post">
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

        
        $('form').on('submit', function() {

            bcrypt.genSalt(saltNumber, function(err, salt) {
                bcrypt.hash($('#password').val(), salt, function(err, hash) {
                  console.log(hash);
                });
              });






            /*
            console.log(document.querySelector('form'));
            let bodyFormData = new FormData(document.querySelector('form'));
            console.log(bodyFormData.keys.displayname);
            for (var val of bodyFormData.keys()) {
                console.log(val);
            }
            axios.post('/register', {data: bodyFormData})
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });*/
        });
});