
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
// GAME LIBRARY
let gameLibrary = ["adventure", "seaturtles"];



// CREATE GAME DETAILS
var gameTitle, gameCover, gameThumb1, gameThumb2, gamePlayer, gameDescription, gamePublishedBy, gameAbout, gameProgrammedBy;

function gameDetails(gameCode) {

    if(gameId['gm'] === 'vesta'|| gameCode === "vesta" ){
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
    
    if(gameId['gm'] === 'blueoceans'|| gameCode === "blueoceans" ){
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
    if(gameId['gm'] === 'galaxy' || gameCode === 'galaxy'){
        gameTitle = 'Galaxy';
        gameBackground = 'images/games/galaxy-bg.jpg';
        gameCover = '<img src="images/games/galaxy-cover.jpg">';
        gameThumb1 = '<img src="images/games/galaxy-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/galaxy-thumb2.jpg">';
        gamePlayer = '<img src="images/games/galaxy-cover.jpg">';
        gameDescription = 'Galaxy is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        gamePublishedBy = 'Galaxy Studios';
        gameProgrammedBy = ''
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/galaxy-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'dressup' || gameCode === 'dressup'){
        gameTitle = 'Dressup';
        gameBackground = 'images/games/dressup-bg.jpg';
        gameCover = '<img src="images/games/dressup-cover.jpg">';
        gameThumb1 = '<img src="images/games/dressup-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/dressup-thumb2.jpg">';
        gamePlayer = '<img src="images/games/dressup-cover.jpg">';
        gameDescription = 'Dressup is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        gamePublishedBy = 'Dressup Studios';
        gameprogrammedby = ''
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/dressup-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'trivia' || gameCode === 'trivia'){
        gameTitle = 'Trivia';
        gameBackground = 'images/games/trivia-bg.jpg';
        gameCover = '<img src="images/games/trivia-cover.jpg">';
        gameThumb1 = '<img src="images/games/trivia-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/trivia-thumb2.jpg">';
        gamePlayer = '<img src="images/games/trivia-cover.jpg">';
        gameDescription = 'Trivia is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        gamePublishedBy = 'Trivia Studios';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/trivia-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'mixmatch' || gameCode === 'mixmatch'){
        gameTitle = 'MixMatch';
        gameBackground = 'images/games/mixmatch-bg.jpg';
        gameCover = '<img src="images/games/mixmatch-cover.jpg">';
        gameThumb1 = '<img src="images/games/mixmatch-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/mixmatch-thumb2.jpg">';
        gamePlayer = '<img src="images/games/mixmatch-cover.jpg">';
        gameDescription = 'MixMatch is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        gamePublishedBy = 'MixMatch Studios';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/mixmatch-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }

    if(gameId['gm'] === 'adventure' || gameCode === 'adventure'){
        gameTitle = 'The Educated Gamer';
        gameBackground = 'images/games/adventure-bg.jpg';
        gameCover = '<img src="images/games/adventure-cover.jpg">';
        gameThumb1 = '<img src="images/games/adventure-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/adventure-thumb2.jpg">';
        gamePlayer = '<img src="images/games/adventure-cover.jpg">';
        gameDescription = 'The Educated Gamer Game that sheds light about the microaggressions and institutionalized racism that our country has been influenced by over the years.'
        gamePublishedBy = 'Victoria Ulm & Rebecca Paez';
        gameProgrammedBy = 'Makecode';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/adventure-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }

    if(gameId['gm'] === 'seaturtles' || gameCode === 'seaturtles'){
        gameTitle = 'Sea Turtles';
        gameBackground = 'images/games/seaturtles-bg.jpg';
        gameCover = '<img src="images/games/seaturtles-cover.jpg">';
        gameThumb1 = '<img src="images/games/seaturtles-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/seaturtles-thumb2.jpg">';
        gamePlayer = '<img src="images/games/seaturtles-cover.jpg">';
        gameDescription = 'Trash in the ocean is having lasting effects on sea turtles and is a real big world problem going on today. Pick up the trash before any sea turtles get to it.'
        gamePublishedBy = 'Yusuf Adem & Jasmine Navarro';
        gameProgrammedBy = 'Makecode';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/seaturtles-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `

    }
    if(gameId['gm'] === 'watergame' || gameCode === 'watergame'){
        gameTitle = 'Water Game';
        gameBackground = 'images/games/watergame-bg.jpg';
        gameCover = '<img src="images/games/watergame-cover.jpg">';
        gameThumb1 = '<img src="images/games/watergame-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/watergame-thumb2.jpg">';
        gamePlayer = '<img src="images/games/watergame-cover.jpg">';
        gameDescription = 'Keep our water clean and your player alive.'
        gamePublishedBy = 'Jesse Rivas';
        gameProgrammedBy ='Makecode'
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/watergame-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'trees' || gameCode === 'trees'){
        gameTitle = 'Trees';
        gameBackground = 'images/games/trees-bg.jpg';
        gameCover = '<img src="images/games/trees-cover.jpg">';
        gameThumb1 = '<img src="images/games/trees-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/trees-thumb2.jpg">';
        gamePlayer = '<img src="images/games/trees-cover.jpg">';
        gameDescription = 'Plant as many trees as you can before time runs out and the tree chopping villain cuts them all down.'
        gamePublishedBy = 'Mohamed Muse & Sham Tsegay';
        gameProgrammedBy = 'Makecode';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/trees-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'treestory' || gameCode === 'treestory'){
        gameTitle = 'Tree Story';
        gameBackground = 'images/games/treestory-bg.jpg';
        gameCover = '<img src="images/games/treestory-cover.jpg">';
        gameThumb1 = '<img src="images/games/treestory-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/treestory-thumb2.jpg">';
        gamePlayer = '<img src="images/games/treestory-cover.jpg">';
        gameDescription = 'Tap enemies repeatedly to kill them and protect the forest.'
        gamePublishedBy = 'Nolan Barham, William Henke, Henry Nguyen & Jhisberlly Pineda.  ';
        gameProgrammedBy = 'Scratch'
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/treestory-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'monsanto' || gameCode === 'monsanto'){
        gameTitle = 'Monsanto';
        gameBackground = 'images/games/monsanto-bg.jpg';
        gameCover = '<img src="images/games/monsanto-cover.jpg">';
        gameThumb1 = '<img src="images/games/monsanto-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/monsanto-thumb2.jpg">';
        gamePlayer = '<img src="images/games/monsanto-cover.jpg">';
        gameDescription = 'Take over the world in totally legal ways as the pharmaceutical giant Monsanto.'
        gamePublishedBy = 'Nolan Barham, William Henke, Nuh Mukhtar & Nhat Phan ';
        gameProgrammedBy = 'Javascript';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/monsanto-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'thwi' || gameCode === 'thwi'){
        gameTitle = 'The Hate We Ignore';
        gameBackground = 'images/games/thwi-bg.jpg';
        gameCover = '<img src="images/games/thwi-cover.jpg">';
        gameThumb1 = '<img src="images/games/thwi-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/thwi-thumb2.jpg">';
        gamePlayer = '<img src="images/games/thwi-cover.jpg">';
        gameDescription = 'A game about Islamophobia.'
        gamePublishedBy = 'William Hanke, Lukas Chapmen & Nasro Yusuf. ';
        gameProgrammedBy = 'Scratch';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/thwi-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'trashdash' || gameCode === 'trashdash'){
        gameTitle = 'Trash Dash';
        gameBackground = 'images/games/trashdash-bg.jpg';
        gameCover = '<img src="images/games/trashdash-cover.jpg">';
        gameThumb1 = '<img src="images/games/trashdash-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/trashdash-thumb2.jpg">';
        gamePlayer = '<img src="images/games/trashdash-cover.jpg">';
        gameDescription = 'Take the garbage to the bin and learn to make the world a cleaner place!'
        gamePublishedBy = 'Anthony Bechara & Jhisberlly Pineda ';
        gameProgrammedBy = 'Scratch';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/trashdash-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'tjhm' || gameCode === 'tjhm'){
        gameTitle = 'The Journey of the Homeless Man';
        gameBackground = 'images/games/tjhm-bg.jpg';
        gameCover = '<img src="images/games/tjhm-cover.jpg">';
        gameThumb1 = '<img src="images/games/tjhm-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/tjhm-thumb2.jpg">';
        gamePlayer = '<img src="images/games/tjhm-cover.jpg">';
        gameDescription = 'This is a game about the daily life of a homeless man. '
        gamePublishedBy = 'Mohammed Hilfi & Albiona Uka';
        gameProgrammedBy = 'Scratch';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/tjhm-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'boxexplorer' || gameCode === 'boxexplorer'){
        gameTitle = 'Box Explorer';
        gameBackground = 'images/games/boxexplorer-bg.jpg';
        gameCover = '<img src="images/games/boxexplorer-cover.jpg">';
        gameThumb1 = '<img src="images/games/boxexplorer-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/boxexplorer-thumb2.jpg">';
        gamePlayer = '<img src="images/games/boxexplorer-cover.jpg">';
        gameDescription = 'Hardcore parkore as a box.'
        gamePublishedBy = 'Anthony Bechara';
        gameProgrammedBy = 'Unity';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/boxexplorer-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'divein' || gameCode === 'divein'){
        gameTitle = 'DiveIn';
        gameBackground = 'images/games/divein-bg.jpg';
        gameCover = '<img src="images/games/divein-cover.jpg">';
        gameThumb1 = '<img src="images/games/divein-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/divein-thumb2.jpg">';
        gamePlayer = '<img src="images/games/divein-cover.jpg">';
        gameDescription = 'Adventures of a reincarnated Muslim.'
        gamePublishedBy = 'Nafiso Mukhtar';
        gameProgrammedBy = 'HTML';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/divein-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }
    if(gameId['gm'] === 'carbonmonsters' || gameCode === 'carbonmonsters'){
        gameTitle = 'Carbon Monsters';
        gameBackground = 'images/games/carbonmonsters-bg.jpg';
        gameCover = '<img src="images/games/carbonmonsters-cover.jpg">';
        gameThumb1 = '<img src="images/games/carbonmonsters-thumb1.jpg">';
        gameThumb2 = '<img src="images/games/carbonmonsters-thumb2.jpg">';
        gamePlayer = '<img src="images/games/carbonmonsters-cover.jpg">';
        gameDescription = 'Plant trees to protect yourself from monsters.'
        gamePublishedBy = 'Nhat Phan';
        gameProgrammedBy = 'Scratch';
        gameAbout = 
        `
        <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
        <div><img src="images/games/carbonmonsters-thumb1.jpg"></div>
        <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
        `
    }

};


//RUN THIS FUNCTION ON GAME PAGE
function fillGameDetails(){
    gameDetails();
    $('main').css('background-image','url(' + gameBackground + ')');
    $('.game-title').html(gameTitle);
    $('.game-cover').html(gameCover);
    $('.game-info').find('p').html(gameDescription);
    $('.game-info').find('h6').first().find('span').html(gamePublishedBy);
    $('#game-about').find('div').first().html(gameAbout);
    $('.game-info').find('h6').eq(1).find('span').html(gameProgrammedBy);
};
 