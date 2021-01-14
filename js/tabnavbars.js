$(document).ready(
    function () {
            var tabs = $('.tab');
            context = $('.content');
            //tabs (class used to define the head tab)
            //context (class used to define the content for the specified tab)
            tabs.addClass('inactive');
            tabs.first().removeClass('inactive');
            context.hide();
            context.first().fadeIn();
            tabs.click(
                    function () {
                            var t = $(this).attr("id")
                            if ($(this).hasClass('inactive')) {
                                    tbs.addClass('inactive');
                                    $(this).removeClass('inactive');
                                    context.hide();
                                    $('#' + t + 'container').fadeIn(500);
                            }
                    }
            )
    }
);