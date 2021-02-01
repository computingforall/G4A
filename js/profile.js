$(document).ready(
    function() {

        var test = `<img src="leave" alt="" srcset="">`

        $('.apply-settings').click( 
            function(e) {
                e.preventDefault();
                localStorage.setItem('username', $('#username').val());
                localStorage.setItem('image', $('#image').val());

                //$('.name').replaceWith($('<p class="name">' + localStorage.getItem(username) + '</p>'));
                //$('.avatar').attr('src', $(new_image).attr('src'));

                $('form').append(test);
                $('img').attr('src', '' + localStorage.getItem('image'));
                

        });

        

});