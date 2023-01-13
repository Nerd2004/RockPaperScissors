let currscore = document.getElementById('player-score');
let score = 0;
let options = ['Rock','Paper','Scissors'];
let result = document.getElementById('result');
let hands = document.getElementById('hands');
let choices = document.querySelectorAll('.rpsButton');
//This will make choices get access of all the buttons by returning a nodelist
//choices[0].innerText = 'hello';// if want to change the first button
Play = (userInput) => {
    let comp = options[Math.floor(Math.random() * 3)];
    //Assume 0 is Rock
    // 1 is Paper
    // 2 is Scissors
    if(userInput == comp){
        result.innerText = 'Draw';
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
    else if(userInput == 'Rock' && comp == 'Paper'){
        result.innerText = 'You Lost';
        score-=1;
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
    else if(userInput == 'Rock' && comp == 'Scissors'){
        result.innerText = 'You Win';
        score+=1;
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
    else if(userInput == 'Scissors' && comp == 'Paper'){
        result.innerText = 'You Win';
        score+=1;
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
    else if(userInput == 'Scissors' && comp == 'Rock'){
        result.innerText = 'You Lost';
        score-=1;
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
    else if(userInput == 'Paper' && comp == 'Rock'){
        result.innerText = 'You Win';
        score+=1;
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
    else if(userInput == 'Paper' && comp == 'Scissors'){
        result.innerText = 'You Lost';
        score-=1;
        currscore.innerText = `Current Score : ${score}`;
        hands.innerText = `👱 ${userInput} vs 🤖 ${comp}`;
    }
}
//To get the UserInput by onclick
choices.forEach(x => {
    x.onclick = () => {
    let userInput= (x.value);
    Play(userInput);
    }
})

//To FInish the game
let end = document.getElementById('endGameButton');
end.onclick = () => {
    result.innerText='';
    score.innerText='';
    currscore.innerText='';
    hands.innerText = '';
    score = 0;
}

