$(document).ready(
    function() {

        var new_name = 'test';
        var new_image = 'test';

        $('.apply-settings').click( 
            function() {
                localStorage.setItem('username', new_name);
                localStorage.setItem('image', new_image);

                //$('.name').replaceWith($('<p class="name">' + localStorage.getItem(username) + '</p>'));
                //$('.avatar').attr('src', $(new_image).attr('src'));
        });



});