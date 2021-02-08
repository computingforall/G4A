$(document).ready(function () {
  // Main Navigation Bar
  var nav_html = `
        <header>
            <div><div class="nav-logo">Games For All</div></div>
            <nav>
                <a></a>
            </nav>
        </header>
        `;

  var footer_html = `
        <footer>
            <div id="copyright"><i class="fas fa-copyright"></i> Games For All 2021</div>
            <nav></nav>
        </footer>
        `;

  $("body").prepend(nav_html);
  $("body").append(footer_html);

  let nav_items = $("nav").find("a").first();
  nav_items.clone().appendTo("nav").attr("href", "#").html("Home");
  nav_items.clone().appendTo("nav").attr("href", "#").html("Games");
  nav_items
    .clone()
    .appendTo("nav")
    .attr("href", "#")
    .html("Profile & Settings");
  $("nav").find("a").first().remove();

  //Comments Field
  var commentTemplate = `
        <div class="post">
             <div class="user-pro"> 
                <div><img src="./img/shiggy.jpg"></div>
                <div><h2>Player 1</h2></div>
            </div>
                <div><p class="comment">This is a comment.</p></div>
                <div class="likeButton"></div>
        </div>
        `;

  // $('.posts').append(commentTemplate);
  $(".comment-submit").click(function () {
    let text = $("#comment-text").val();
    var commentTemplate =
      `
                <div class="post">
                     <div class="user-pro"> 
                        <div><img src="./widgets/img/shiggy.jpg"></div>
                        <div><h2>Player 1</h2></div>
                    </div>
                        <div><p class="comment">` +
      text +
      `</p></div>
                        <div></div>
                        <div class=''><p class="likeCount">0</p><i class='like unliked far fa-heart'></i></div>
                </div>
        `;
    $(".posts").append(commentTemplate);
    $("#comment-text").val("");
  });

  //Like Dislike Buttons
  $(document).on('click', '.like', function() {
    let currentVal = $(this).children().last().html();
    let siblingVal = $(this).siblings().first().children().last().html();
    if ($(this).siblings().first().hasClass("checked")) {
      currentVal = Number(currentVal) + 1;
      $(this).children().last().html(currentVal);
      siblingVal = Number(siblingVal) - 1;
      $(this).siblings().first().children().last().html(siblingVal);
      $(this).siblings().first().removeClass('checked');
      $(this).addClass('checked');
    } else if ($(this).hasClass('checked')) {
      currentVal = Number(currentVal) - 1;
      $(this).children().last().html(currentVal);
      $(this).removeClass('checked');             
    } else {
      $(this).addClass('checked');
      currentVal = Number(currentVal) + 1;
      $(this).children().last().html(currentVal);        
    }
  });

  $(document).on('click', '.dislike', function() {
    let currentVal = $(this).children().last().html();
    let siblingVal = $(this).siblings().first().children().last().html();
    if ($(this).siblings().first().hasClass("checked")) {
      currentVal = Number(currentVal) + 1;
      $(this).children().last().html(currentVal);
      siblingVal = Number(siblingVal) - 1;
      $(this).siblings().first().children().last().html(siblingVal);
      $(this).siblings().first().removeClass('checked');
      $(this).addClass('checked');
    } else if ($(this).hasClass('checked')) {
      currentVal = Number(currentVal) - 1;
      $(this).children().last().html(currentVal);
      $(this).removeClass('checked');             
    } else {
      $(this).addClass('checked');
      currentVal = Number(currentVal) + 1;
      $(this).children().last().html(currentVal);        
    }
  });
});
