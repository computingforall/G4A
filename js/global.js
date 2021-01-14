$(document).ready(
    function() {

        // Main Navigation Bar
        var nav_html =
        `
        <header>
            <h1>Site</h1>
            <nav>
                <a></a>
            </nav>
        </header>
        `

        $('body').prepend(nav_html);
        let nav_items = $('nav').find('a').first();
        nav_items.clone().appendTo('nav').attr('href','#').html('Home');
        nav_items.clone().appendTo('nav').attr('href','#').html('Games');
        nav_items.clone().appendTo('nav').attr('href','#').html('Profile & Settings');
        $('nav').find('a').first().remove();

    }
);
