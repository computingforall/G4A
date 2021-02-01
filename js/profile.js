$(document).ready(
    function() {

        $('.apply-settings').click( 
            function(e) {
                e.preventDefault();

                localStorage.setItem('username', $('#username').val());
                localStorage.setItem('image', $('#image').val());

        });

        

});