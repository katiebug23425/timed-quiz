let HighScoreButton = document.querySelector("#high-score-viewer");

//get high scores from local storage and rank previous scores

HighScoreButton.addEventListener('click', function(){
    
})

function showHighScores() {
    let highScores= JSON.parse(
        window.localStorage.getItem(
        "highScores")
    )
}






//reset scores when user clicks reset button

function resetHighScores() {

}