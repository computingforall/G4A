$(document).ready(
    function(){
       
        let dragging;
          function draggingItem(){
         $('.item').mousedown(
             function (){
                     dragging = $(this).detach();
                     dragging.appendTo('#dragging-container');
               }
            );
         }
        
        draggingItem();
        $('.drop-area').mousedown(
           function(){
                $(this).addClass('redrop');
            }
        );
          
        
         
         $('.drop-area').mouseup(
                function(){ 
                    
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
            }
        )
        
        $(document).mousemove(
                function(e){
                     let x = e.clientX,
                         y = e.clientY;
                   
                    $('#dragging-container').css({
                        'left':x,
                         'top':y
                    });
                   
                   
                }
         
         );
       
     }
   
 );