$(document).ready(function(){
    const friendsData = {
        friends: ['shiggy', 'vannary', 'maristel', 'gage', 'raymond'],
        invited: ['default', 'default1'],
        playedWith: ['default2', 'default3'],
    };

    for (const key in friendsData) {
        const friendsArray = friendsData[key];
        for (let i = 0; i < friendsArray.length; i += 1) {
            let current = friendsArray[i];

            const button = `                        
                <div>
                    <a class="remove-friend" href="#">
                        <i class="fas fa-user-minus"></i>
                    </a>
                </div>
            `;

            let friendsListTemplate = `
                <li class="item">
                    <div class="added-friend">
                        <div class="user-pro">
                            <div>
                                <img src="images/avatars/${key === 'friends' ? 'pic-' + current : current}.jpg">
                            </div>
                            <div>
                                <h2>${current.charAt(0).toUpperCase().concat(current.slice(1))}</h2>
                            </div>
                        </div>
                        ${key === 'friends' ? button : ''}
                    </div>
                </li>
            `

            if (key === 'friends') {
                $('.friends-list').append(friendsListTemplate);
            } else if (key === 'invited') {
                $('.invited-list').append(friendsListTemplate)
            } else if (key === 'playedWith') {
                $('.online-list').append(friendsListTemplate) 
            }
        } 
    }
        
    
       
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
            if($(this).find('li').hasClass('item')){  
                $(this).children().last().children().first().append(
                    `<div>
                        <a class="remove-friend" href="#">
                            <i class="fas fa-user-minus"></i>
                        </a>
                    </div>`
                );
                $(this).find('li').removeClass('item').unbind();
            }
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
    });
    //$(document).on('mouseover', '.delete-friend', function(){
      //  $(this).parent().parent().css('pointer-events', 'none');
       // $(this).css('pointer-events', 'all');
       // });
});
// TO DO
        // detach removed friend and append it to the online list container ul
        // add classes item, and played-with to the removed friend

