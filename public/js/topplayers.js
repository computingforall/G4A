$(document).ready(
    function() {
    loadTopPlayers();
    }
);

function loadTopPlayers() {
    let playerAmount = $("#leader-details").find("tr").length;
    for (let i = 0; i < playerAmount; i += 1){
        let tablecell = $("#leader-details").find("tr").eq(i).find("td");
        let playerAvitar = tablecell.eq(0).html();
        let playerName = tablecell.eq(1).html();
        let playerScore = tablecell.eq(2).html();
        let topScore = $("#leader-details").find("tr").eq(0).find("td").eq(2).html();
        let topScoreNumber = parseInt(topScore);
        let playerScoreNumber = parseInt(playerScore);
        let scorePercent = Math.floor((playerScoreNumber / topScoreNumber)*100);
        
        let topPlayerTemplate = 
        `
        <div class="top-player-container">
            <div class="top-player-bar">
                <div class="user-pro"> 
                    <div>`+ playerAvitar +`</div>
                    <div><h3>`+ playerName +`</h3></div>
                </div>
                <div class="high-score"><h3>`+ playerScore +`</h3></div>
            </div>
        </div>
        `

        $('#leaderboard').append(topPlayerTemplate);
        $(".top-player-bar").eq(i).css("width",scorePercent +"%");
    }
    
    $("#leader-details").remove();
}