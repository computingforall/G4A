$(document).ready(
    function() {

        // Main Navigation Bar
        $('body').prepend
        ('\
        <header>\
            <h1>Site</h1>\
            <nav>\
                <a></a>\
            </nav>\
        </header>\
        ');

        let nav_items = $('nav').find('a').first();
        nav_items.clone().appendTo('nav').attr('href','#').html('Home');
        nav_items.clone().appendTo('nav').attr('href','#').html('Games');
        nav_items.clone().appendTo('nav').attr('href','#').html('Profile & Settings');
        $('nav').find('a').first().remove();

    }
);