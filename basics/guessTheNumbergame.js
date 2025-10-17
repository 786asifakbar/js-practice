

		const randomNum = parseInt(Math.random()*100 + 1);
		const submit = document.querySelector("#subt");
		const userInput = document.querySelector("#guessfield");
		const guessSlot = document.querySelector(".guesses");
		const remaning = document.querySelector(".lastResult");
		const lowOrHi = document.querySelector(".lowOrHi");
		const startOver = document.querySelector(".resultPera");

		const p = document.createElement("p");

		let preGues = [];
     		numGuess = 1; 
			
		let playGame = true;
		
		if(playGame){
		  submit.addEventListener("click",function(e){
				e.preventDefault();
				const guess = parseInt(userInput.value);
				console.log(guess);
				validateGuess(guess);
			})
		}
		
		
		function validateGuess(guess){
			if(isNaN(guess)){
				alert("Please Enter a valid Number");
				
			}else if(guess < 1){
				alert("Please Enter a Greter than 1");
			}else if(guess > 100){
				alert("Please Enter a Number less than 100");
			}else{
				 preGues.push(guess);
				 if(numGuess === 11){
					 displayGuess(quess);
					 displayMassage(`Guess Over Random Number ${randomNum}`); 
                      endGame();				 
				 }else{
					 displayGuess(guess);
					 checkedGuess(guess);
				 }
			}
		}
		
		function checkedGuess(guess){
		   if(guess === randomNum){
			   displayMassage("You are Guessed Number!");
			   endGame();
		   }else if(guess < randomNum){
			   displayMassage("Your Guess number is too low!");
		   }else if(guess > randomNum){
			   displayMassage("Your Guess number is too Hi !");
		   }
		}
		function displayGuess(guess){
			userInput.value = "";
			guessSlot.innerHTML += `${guess} / `;
			numGuess++;
			remaning.innerHTML = `${11 - numGuess}`; 
			
		}
		
		function displayMassage(massage){
			lowOrHi.innerHTML = `<h2>${massage}</h2>`;
		}
		
		function endGame(end){
			userInput.value = '';
			userInput.setAttribute('disabled','');
			p.classList.add('button');
			p.innerHTML = `<h2 id ='newGame'>Start New Game </h2>`;
		    startOver.appendChild(p);
			playGame = false;
			newGame();
		}
		
		function newGame(start){
			const newGameButton = document.querySelector('#newGame');
			newGameButton.addEventListener('click',function(e){
			randomNum = parseInt(Math.random()*100 + 1);
			preGues = [];
     		numGuess = 1;
			guessSlot.innerHTML ='';
			remaning.innerHTML = `${11 - numGuess}`;
	        userInput.removeAttribute('disabled');
            startOver.removeChild(p)
           playGame = true;			
			
			});
		}
		
		
