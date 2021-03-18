let gameData;
let gameId = [], hash;

function popContainer() {
    let popUp = $(".pop-up");
    let container =  $(".pop-up-container");
    popUp.hide();
    container.hide();
    $(document).on('click', '.game-cover', function(){
        popUp.fadeIn();
        container.fadeIn();
    });
    popUp.click(function(){
        popUp.fadeOut();
        container.fadeOut();
    });

}

// GAME LIBRARY
function fillGameGrid() {
    let gameGridContainer = $(".game-grid");
    for (let g = 0; g < gameData.length - 1; g += 1) {
    const { key, gameTitle } = gameData[g];
    let gameGridTemplate = 
    `
        <div>
            <div class="hit-area">
                <a href="./gamepage.html?gm=${key}"><i class="far fa-arrow-alt-circle-right"></i></a>
            </div>
            <div> 
                <img src="images/games/${key}-cover.jpg">
            </div>
            <h4>`+gameTitle+`</h4>
        </div>
    `
        gameGridContainer.append(gameGridTemplate);
    }
}

function moreLikeThis() {
    let gameContainerGrid = $("#game-preview-more");
    let loadedGame = gameId['gm'];
    let loadedGameKeywords;

    for (let i = 0; i < gameData.length; i += 1) {
        const current = gameData[i];
        if (current.key === loadedGame) {
            loadedGameKeywords = current.gameKeywords;
        }
    }

    for(let j = 0; j < loadedGameKeywords.length; j += 1) {
        let matchGame = loadedGameKeywords[j]; 
        
            
        for(let k = 0; k < gameData.length; k += 1) {
            let current = gameData[k];
            let { gameTitle, gameKeywords, key } = current;
            let matchGameKeywords = gameKeywords;
            
            for(let l = 0; l < matchGameKeywords.length; l += 1) {
                let detailedGame = matchGameKeywords[l];

                if (loadedGame !== key) {
                    if (detailedGame === matchGame) {
                        let gameGridTemplate = `
                            <div>
                                <div class="hit-area">
                                    <a href="./gamepage.html?gm=${key}"><i class="far fa-arrow-alt-circle-right"></i></a>
                                </div>
            
                                <h4>`+gameTitle+`</h4>
                                <div>
                                    <img src="images/games/${key}-cover.jpg">
                                </div>
                                <div class="star-rating">
                                    <div class="stars">
                                        <div>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        `;
                        gameContainerGrid.append(gameGridTemplate); 
                    }  
                }

            }
        }
    }
}

//RUN THIS FUNCTION ON GAME PAGE
function fillGameDetails(){
    let key, 
    gameEmbed, 
    gameTitle, 
    gameBackground, 
    gameCover,
    gameDescription,
    gamePublishedBy,
    gameProgrammedBy,
    gameAbout; 
    // CREATE GAME DETAILS
    if (gameData) {
        for (let i = 0; i < gameData.length; i += 1) {
            const current = gameData[i];
            key = current.key;
            if (key === gameId['gm']) {
                gameEmbed = current.gameEmbed 
                gameTitle = current.gameTitle
                gameBackground = current.gameBackground
                gameCover = current.gameCover
                gameDescription = current.gameDescription
                gamePublishedBy = current.gamePublishedBy
                gameProgrammedBy = current.gameProgrammedBy
                gameAbout = current.gameAbout
            }
        }        
    }

    $('main').css('background-image','url(' + gameBackground + ')');
    $('#game-embed').html(gameEmbed);
    $('.game-title').html(gameTitle);
    $('.game-cover').html(gameCover);
    $('.game-info').find('p').html(gameDescription);
    $('.game-info').find('h6').first().find('span').html(gamePublishedBy);
    $('#game-about').find('div').first().html(gameAbout);
    $('.game-info').find('h6').eq(1).find('span').html(gameProgrammedBy);
};

$(document).ready(function(){

    let q = document.URL.split('?')[1];

    if(q != undefined){
        q = q.split('&');
        for(var i = 0; i < q.length; i++){
            hash = q[i].split('=');
            gameId.push(hash[1]);
            gameId[hash[0]] = hash[1];
        }
    }

    fetch('/games')
        .then((response) => response.json())
        .then((data) => {
            gameData = data;
        })
        .then(() => {
            // GET URL QUERY
            if (q !== undefined) {
                moreLikeThis();
            }

            fillGameDetails();
            fillGameGrid();
            popContainer(); 
        })
        .catch((err) => console.error(err));
}); 