$(document).ready(
    function() {

        let profile_settings = 
        `
        <form name="apply-settings-form"" id="apply-settings-form">
            <label for="displayname">Display Name: </label><br>
            <input type="text" name="displayname" id="displayname" required><br>

            <label for="password">Password: </label><br>
            <input type="text" name="password" id="password" required><br>

            <label for="image">Image: </label><br>
            <input type="text" name="image" id="image"><br>


            <button type="submit" class="apply-settings">Test</button> 
        </form>
        `;
        $(profile_settings).appendTo('#page');

        $('#apply-settings-form').on('submit', function(e) {
                e.preventDefault();
                const displayname = $('#displayname').val();
                const password = $('#password').val();
                axios.post('/profile', {
                    displayname,
                    password,
                    image
                })
                  .then((response) => {
                      console.log(response);
                  })
                  .catch((error) => {
                      console.log(error);
                  });
            });

        

});