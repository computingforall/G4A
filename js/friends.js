$(document).ready(
    function() {

        // Drag & Drop (This is taken from the Blue Oceans project.)

        var friendsTemplate = // Do not use this atm, very borked.
        `
        <li class="item">
            <div class="user-pro"> 
                <div><img src=""></div>
    
                <div><h2></h2></div>
            </div>
        </li>
        `


        $("html").on("drop", function(event) { event.preventDefault(); event.stopPropagation(); });

        let dragging;
        $('.item').mousedown(
            function(event) {
                dragging = $(this).detach();
                dragging.appendTo('.dragging-area');
            }
        );

        $(document).mousemove(
            function(e) {
              let x = e.pageX - window.pageXOffset; // Makes it so scrolling left/right effects position of element.
              let y = e.pageY - window.pageYOffset; // Makes it so scrolling up/down effects position of element.

              $('.dragging-area').css({
              'left':x,
              'top':y
              });

            }
        );


        $('.f-grid').mouseup(
            function() {
                dragging.appendTo($(this));
                dragging = null;
            }
        );

        $('.f-grid').mousedown(
            function() {
                $(this).addClass('redrop');
        });

        $(document).mouseup(
            function() {
                dragging = $('.dragging-area').children().detach();
                dragging.appendTo('.redrop');
                dragging = null;
                $('.f-grid').removeClass('redrop');
            }
        );

});