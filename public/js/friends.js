$(document).ready(function(){
       
    let dragging;
        
    function draggingItem(){
        $('.item').mousedown(function (){
            dragging = $(this).detach();
            dragging.appendTo('#dragging-container');
        });
    }
        
    draggingItem();

    $('.drop-area').mousedown(function(){
        $(this).addClass('redrop');
    });
          
        
         
    $('.drop-area').mouseup(function(){ 
        dragging = $('#dragging-container').children().detach();
        dragging.appendTo($(this));
        dragging = null;
        if($(this).hasClass('friends-list')){
            $(this).find('li').removeClass('item').unbind();
        }
        draggingItem();
    });
                   
    $(document).mouseup(function(){
        dragging = $('#dragging-container').children().detach();
        dragging.appendTo('.redrop');
        dragging = undefined;
        $('.drop-area').removeClass('redrop')
    });
        
    $(document).mousemove(function(e){
        let x = e.clientX,
        y = e.clientY;
                   
        $('#dragging-container').css({
            'left':x,
            'top':y
        });        
    });
     let deleteFriendTemplate = 
     `<div class="delete-confirm">
     <h6>are you sure?</h6>

     <button class="yes">Yes</button>
     <button class="no">No</button>
     </div>
     
     `
    $(document).on('click', '.remove-friend', function() {
        $(this).hide();
        $(this).parent().append(deleteFriendTemplate);
        $('.delete-confirm').find('.yes').unbind();
        $('.delete-confirm').find('.no').unbind();
        $('.delete-confirm').find('.yes').click(function(){
        $(this).parent().parent().parent().parent().remove();
        });
        $(document).on('click', '.no', function(){
        $(this).parent().siblings('.remove-friend').show();
        $(this).parent().remove(); 
 });
       
        //  let removedFriend = $(this).parent().parent().parent();
     //   $(removedFriend).children().first().children().last().remove();
    //  $(removedFriend).detach().appendTo("drop-area online-list");
    //$(removedFriend).addClass('item').addClass('played-with').remove('.item');
         
    });
    $(document).on('mouseover', '.delete-friend', function(){
        $(this).parent().parent().css('pointer-events', 'none');
        $(this).css('pointer-events', 'all');
        });
});
// TO DO
        // detach removed friend and append it to the online list container ul
        // add classes item, and played-with to the removed friend