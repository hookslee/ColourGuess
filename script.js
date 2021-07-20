let heading = document.getElementById('colourValue'); 
let buttons = document.getElementsByClassName('colourButton'); 


function setButtonColour(button, red, green, blue) {
    button.setAttribute('style','background-color: rgb('+ red +','+ green +','+ blue +');');
}

function makeColourValue(){
    return Math.round(Math.random()*255);
}

let answerMessage =document.getElementById('answer');

function startGame() {
    document.body.setAttribute('style','background-color: rgb('+ 255 +','+ 255 +','+ 255 +');'); 
    answerMessage.innerHTML = ''; 
    let answerButton = Math.round(Math.random()*buttons.length-1); 
  
    for(let i = 0; i < buttons.length; i++){
        
        let red = makeColourValue(); 
        let green = makeColourValue(); 
        let blue = makeColourValue(); 

        setButtonColour(buttons[i], red, green, blue);
        buttons[i].addEventListener('click', function() {
            if(this === buttons[answerButton]){
                answerMessage.innerHTML = 'Yas!';
                document.body.setAttribute('style','background-color: rgb('+ red +','+ green +','+ blue +');'); 
            } else {
                answerMessage.innerHTML = 'Nope :(';
                document.body.setAttribute('style','background-color: rgb('+ 255 +','+ 255 +','+ 255 +');'); 
            }
        }
        )
        
        if(i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`;
        }

    }
}

startGame(); 

document.getElementById('resetButton').addEventListener('click', startGame); 