document.addEventListener("DOMContentLoaded", function() {
    let noAttemptsEasy=25;
    let noAttemptsHard=50;
    let attemptsLeft=noAttemptsEasy;
    let difficulty='easy';
    let inputId=[];
    let inputName=[];
    let itemsFound=0;
    let gameInProgress=false;
    let scores={' ':' ',' ':' ',' ':' ' };
    const homePage=document.getElementById('home-page');
    const gamePage=document.getElementById('game-page');
    const leaderboardRows=document.getElementById('leaderboard').getElementsByTagName('tr');
    const medalOrder = {1:"gold" ,2:"silver",3:"bronze"};
    const diffMultiplier={'easy':1,'hard':1.5};
    let cards = document.getElementsByClassName('card');
    //Define object of items to map number to card id
    const keysHard=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const itemsHard= {
            1:"pizza-slice-0",
            2:"pizza-slice-1",
            3:"mug-hot-0",
            4:"mug-hot-1",
            5:"burger-0",
            6:"burger-1",
            7:"cat-0",
            8:"cat-1",
            9:"motorcycle-0",
            10:"motorcycle-1",
            11:"cake-candles-0",
            12:"cake-candles-1",
            13:"ice-cream-0",
            14:"ice-cream-1",
            15:"snowman-0",
            16:"snowman-1",
            17:"shuttle-space-0",
            18:"shuttle-space-1",
            19:"carrot-0",
            20:"carrot-1"
            };  
    //When easy mode is chosen
    const keysEasy=[1,2,3,4,5,6,7,8,9,10,11,12];
    const itemsEasy={
            1:"pizza-slice-0",
            2:"pizza-slice-1",
            3:"mug-hot-0",
            4:"mug-hot-1",
            5:"burger-0",
            6:"burger-1",
            7:"cat-0",
            8:"cat-1",
            9:"motorcycle-0",
            10:"motorcycle-1",
            11:"cake-candles-0",
            12:"cake-candles-1"
            };  
    
    //Add event listener to difficulty switch
    const diffSwitch=document.getElementById('switch');
    diffSwitch.addEventListener('change', function(){
        if (this.checked){
            difficulty='hard';
            if (difficulty==='hard'){
                let items=itemsHard;
                let keys=keysHard;
                let noAttempts=noAttemptsHard;
                document.getElementById('attempts-left').innerHTML = noAttempts;
                //If hard mode is chosen change card layout
                let gameTable=document.getElementById('game-table');
                gameTable.innerHTML=
                `
                <tr>
                <td id="pizza-slice-0 class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="pizza-slice-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="mug-hot-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="mug-hot-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="burger-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
            <tr>
                <td id="cat-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="cat-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="motorcycle-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="motorcycle-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="cake-candles-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
            <tr>
                <td id="cake-candles-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="ice-cream-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="ice-cream-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="snowman-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="snowman-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
                <tr>
                <td id="shuttle-space-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="shuttle-space-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="carrot-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="carrot-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="burger-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
                `
            let foundTable=document.getElementById('found-table');
            foundTable.innerHTML=
            `
            <tr>
            <td id="found-pizza-slice"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-mug-hot"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-burger"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-shuttle-space"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-ice-cream"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
            <tr>
            <td id="found-cat"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-motorcycle"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-cake-candles"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-carrot"><i class="fa-2xl fa-solid fa-question"></i></td>
            <td id="found-snowman"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
            `;
            cards = document.getElementsByClassName('card'); 
            let noItems=cards.length*0.5;
            } 
        } else {difficulty='easy';
          let gameTable=document.getElementById('game-table');
          gameTable.innerHTML=
          `
          <tr>
                <td id="mug-hot-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="burger-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="motorcycle-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="cake-candles-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
            <tr>
                <td id="cake-candles-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="cat-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="pizza-slice-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="motorcycle-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
            <tr>
                <td id="mug-hot-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="cat-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="burger-1" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
                <td id="pizza-slice-0" class="card"><i class="fa-2xl fa-solid fa-question"></i></td>
            </tr>
          `;
        items=itemsEasy;
        keys=keysEasy;
        noAttempts=noAttemptsEasy;
        document.getElementById('attempts-left').innerHTML = noAttempts;
        let foundTable=document.getElementById('found-table');
        foundTable.innerHTML=
        `
        <tr>
        <td id="found-pizza-slice"><i class="fa-2xl fa-solid fa-question"></i></td>
        <td id="found-mug-hot"><i class="fa-2xl fa-solid fa-question"></i></td>
        <td id="found-burger"><i class="fa-2xl fa-solid fa-question"></i></td>
        </tr>
        <tr>
        <td id="found-cat"><i class="fa-2xl fa-solid fa-question"></i></td>
        <td id="found-motorcycle"><i class="fa-2xl fa-solid fa-question"></i></td>
        <td id="found-cake-candles"><i class="fa-2xl fa-solid fa-question"></i></td>
        </tr>
        `;
        cards = document.getElementsByClassName('card'); 
        
    }
    });
    
   


    const promptArea=document.getElementById('prompt-area');
  
    

  

    const playButton = document.getElementById("new-game");
    playButton.addEventListener("click", function(){
    if (difficulty==='easy'){
        items=itemsEasy;
        keys=[1,2,3,4,5,6,7,8,9,10,11,12];
        noAttempts=noAttemptsEasy;
    } else {
        items=itemsHard;
        keys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        noAttempts=noAttemptsHard;
    }
    gamePage.style.display='block';
    homePage.style.display='none';
    //Shuffle keys into new array//
    let shuffledKeys=[];
    let noKeys=keys.length;
    let noKeysRemaining=noKeys;
    let randIndex;
    for (let i=0;i<noKeys;i++){
        randIndex = Math.floor(Math.random()*noKeysRemaining);
        shuffledKeys.push(keys[randIndex]);
        keys.splice(randIndex,1);
        noKeysRemaining--;
    }
    //Overwrite keys with new order//
    keys=shuffledKeys;
    let cardNo=0;
    let oldId;
    cards = document.getElementsByClassName('card'); 
    let noItems=keys.length*0.5;
    for (let card of cards){
        //Turn all cards over
        card.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
        //Save old Id
        oldId=card.id;
        //Shuffle cards using shuffled key values//
        card.id=items[keys[cardNo]];
        cardNo++;
        //Reset found items
        let foundItem = document.getElementById(`found-${(card.id).slice(0,(card.id).length-2)}`);
        foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
        }     
        itemsFound=0;
        //Reset attempts left
        attemptsLeft=noAttempts;
        document.getElementById('attempts-left').innerHTML = attemptsLeft;
        inputId=[];
        inputName=[];
        itemsFound=0;
        promptArea.innerHTML=`<p>Pick a Card!</p>`;
        gameInProgress=true;
        let username=document.getElementById('username').value;
        //Add event listeners to cards//
    for (let card of cards){
        card.addEventListener('click', function(){
            //Only let the user click if New game button has been clicked//
            if (gameInProgress){
            //Only let the user click if attempts are left
            if (attemptsLeft>0){
            //Only let the user click on a card if it hasn't been turned over//
            if (card.innerHTML==='<i class="fa-2xl fa-solid fa-question"></i>'){
            //If less than two cards are currently chosen//
            if (inputId.length<2){
               //store id//
               let item=this.id;
               //store item name without unique number on end//
               let itemName=item.slice(0,item.length-2);
               //Turn card over to show item//
               card.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
               inputId.push(item);
               inputName.push(itemName);
               //If cards selected match
               if (inputId.length===2){
                  attemptsLeft -=1;
                  document.getElementById('attempts-left').innerHTML =attemptsLeft;
                  if (inputName[0]===inputName[1]){
                  //Add item to found items//
                  document.getElementById('attempts-left').innerHTML =attemptsLeft;
                  let foundItem = document.getElementById(`found-${itemName}`);
                  foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
                  //Increase score
                  itemsFound++;
                  //Show well done message//
                  if (noItems-itemsFound>1){
                    promptArea.innerHTML=`<p>Well done! ${noItems-itemsFound} items left to find.</p>`;
                  } else if (noItems-itemsFound==1){
                    promptArea.innerHTML=`<p>Well done! 1 item left to find.</p>`;
                  } else {
                    promptArea.innerHTML=`<p>Well done! All items found.</p>`;
                    gameInProgress=false;
                    
                    //Update users score if new high score is achieved and username was entered
                    if (username){
                        if (scores[username]){
                            if (attemptsLeft>scores[username]){
                                scores[username]=attemptsLeft*diffMultiplier(difficulty);
                            }
                        } else {
                            scores[username]=attemptsLeft*diffMultiplier[difficulty];
                        }
                    }
                    //Add new top 3 scores to leaderboard
                    let sortedNames= Object.entries(scores).sort((a,b)=>b[1]-a[1]).map(el=>el[0]);
                    for (let i=0;i<3;i++){
                        if (sortedNames[i]){
                            leaderboardRows[i+1].innerHTML=`
                            <td><i id="${medalOrder[i+1]}" class="fa-2xl fa-solid fa-medal"></i></td>
                            <td>${sortedNames[i]}</td>
                            <td>${scores[sortedNames[i]]}</td>
                               ` ;
                        }
                       
                    }
                }
                  
                  inputId=[];
                  inputName=[];
                  } else if (attemptsLeft<noItems-itemsFound){
                    gameInProgress=false;
                    promptArea.innerHTML='<p>Sorry, not enough guesses remaining.</p>';
                  } else if (attemptsLeft>0){
                    //Let button appear to guess again//
                    promptArea.innerHTML='<button id="guess-again">Guess Again</button>';
                    let guessAgain=document.getElementById('guess-again');
                    guessAgain.addEventListener('click',function(){
                        //Check if two cards have been selected//
                        if (inputId.length ===2){
                            //Check if cards dont match//
                            if (inputName[0]!==inputName[1]){
                                //Turn cards back over//
                                document.getElementById(inputId[0]).innerHTML=
                                `<i class="fa-2xl fa-solid fa-question"></i>`;
                                document.getElementById(inputId[1]).innerHTML=
                                `<i class="fa-2xl fa-solid fa-question"></i>`;
                            }
                        } 
                        
                        inputId=[];
                        inputName=[];
                        //Make button dissapear after it is clicked//
                        promptArea.innerHTML='<p></p>';
                       
                    });
                  } else {promptArea.innerHTML='<p>Sorry, you ran out of guesses.</p>';
                          gameInProgress=false;
                }
                }
            }
        }
        }
        }
        });
    }
    });

    
    
    const exitButton = document.getElementById("exit-game");
    exitButton.addEventListener("click", function(){
    gamePage.style.display='none';
    homePage.style.display='block';
    });

   
    
});

