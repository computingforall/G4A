$(document).ready(function(){
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

    let gameTitle = $('.game-title'),
    gamePlayer = $('.game-player'),
    gameDescription = $('.game-info').find('p'),
    gamePublishedBy = $('.game-info').find('h6').first().find('span');
    gameAbout = $('#game-about').find('div').first();

    gameDetails();

    function gameDetails() {
        if(gameId['gm'] === 'vesta'){
            gameTitle.html('Vesta');
            gamePlayer.html('<img src="images/games/vesta-cover.jpg">');
            gameDescription.html('Vesta is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
            gamePublishedBy.html('Vesta Studios');
            gameAbout.html(
                `
                <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
                <div><img src="images/games/vesta-desc1.jpg"></div>
                <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
                `
            )
        }
        
        if(gameId['gm'] === 'blueoceans'){
            gameTitle.html('Blue Oceans');
            gamePlayer.html('<img src="images/games/blueoceans-cover.jpg">');
            gameDescription.html('Blue Oceans is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
            gamePublishedBy.html('The Anonymous');
            gameAbout.html(
                `
                <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
                <div><img src="images/games/blueoceans-cover.jpg"></div>
                <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
                `
            )
        }
    }

});
