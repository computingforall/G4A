
// GET URL QUERY
let gameId = [], hash;
let q = document.URL.split('?')[1];
if(q != undefined){
    q = q.split('&');
    for(var i = 0; i < q.length; i++){
        hash = q[i].split('=');
        gameId.push(hash[1]);
        gameId[hash[0]] = hash[1];
    }
}

// CREATE GAME DETAILS
var gameTitle, gameCover, gameThumb1, gameThumb2, gamePlayer, gameDescription, gamePublishedBy, gameAbout;

function gameDetails() {

    if(gameId['gm'] === 'vesta'){
        gameTitle = 'Vesta';
        gameBackground = 'images/games/vesta-bg.jpg';
        gameCover = '<img src="images/games/vesta-cover.jpg">';
        gameThumb1 = '<img src="images/games/vesta-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/vesta-thumb2.jpg">';
        gamePlayer = '<img src="images/games/vesta-cover.jpg">';
        gameDescription = 'Vesta is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        gamePublishedBy = 'Vesta Studios';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/vesta-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    
    if(gameId['gm'] === 'blueoceans'){
        gameTitle = 'Blue Oceans';
        gameBackground = 'images/games/blueoceans-bg.jpg';
        gameCover = '<img src="images/games/blueoceans-cover.jpg">';
        gameThumb1 = '<img src="images/games/blueoceans-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/blueoceans-thumb2.jpg">';
        gamePlayer = '<img src="images/games/blueoceans-cover.jpg">';
        gameDescription = 'Blue Oceans is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        gamePublishedBy = 'The Anonymous';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/blueoceans-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }

}


//RUN THIS FUNCTION ON GAME PAGE
function fillGameDetails(){
    gameDetails();
    $('main').css('background-image','url(' + gameBackground + ')');
    $('.game-title').html(gameTitle);
    $('.game-cover').html(gameCover);
    $('.game-info').find('p').html(gameDescription);
    $('.game-info').find('h6').first().find('span').html(gamePublishedBy);
    $('#game-about').find('div').first().html(gameAbout);
}
