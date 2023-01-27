const playerOne = document.querySelector('#button1');
const playerTwo = document.querySelector('#button2');
const reset = document.querySelector('#reset');


let result1 = parseInt(document.querySelector('#p1Display').innerText);
let result2 = parseInt(document.querySelector('#p2Display').innerText);

let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

const playTo = document.querySelector('#playto');
let winningScore = 3;
let isGameKeeping = true;

playerOne.addEventListener("click", () => 
{
    if(isGameKeeping) 
    {
        if(result1 !== winningScore) 
        {
            result1 = result1 + 1;
            document.querySelector('#p1Display').innerText = result1;
        }
        
        if(result1 === winningScore) 
        {
            isGameKeeping = false;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            playerOne.disabled = true;
            playerTwo.disabled = true;
        }
    }
})


playerTwo.addEventListener("click", () => {
    if(isGameKeeping) 
    {
        if(result2 !== winningScore) 
        {
            result2 = result2 + 1;
            document.querySelector('#p2Display').innerText = result2;    
        }   
        if(result2 === winningScore)
        {
            isGameKeeping = false;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            playerOne.disabled = true;
            playerTwo.disabled = true;
        }
    }
})

playTo.addEventListener("change", function () 
{
    winningScore = parseInt(this.value);
})

reset.addEventListener("click", () => 
{
    result1 = 0;
    result2 = 0;
    isGameKeeping = true;

    document.querySelector('#p1Display').innerText = result1;
    document.querySelector('#p2Display').innerText = result2;

    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');

    playerOne.disabled = false;
    playerTwo.disabled = false;
})





