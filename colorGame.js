var numSquares = 6;
var colors = generateRandomColor(numSquares);
   
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var massageDesplay = document.querySelector('#massage');
var h1 = document.querySelector('h1');
var resetButten = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display= "none";
        }
    }
});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares =6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i< squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display= "block";
        }
})

resetButten.addEventListener('click', function(){
    //generat random color
    colors = generateRandomColor(numSquares);
    //pic a new random clor from the array
    pickedColor = pickColor();
    //change colorDesplay to much picked color
    colorDisplay.textContent = pickedColor;
    //change the color of the square
    massageDesplay.textContent = "";
    this.textContent = "New Colors";
    for(var i= 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add inital color
    squares[i].style.backgroundColor = colors[i];
    //add click events

    squares[i].addEventListener("click", function(){
      // greb color of clicked 
        var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
        if(clickedColor === pickedColor){
            massageDesplay.textContent = 'CORRECT!';
            resetButten.textContent = "Play Again?"
            changeColor(clickedColor);
            h1.style.backgroundColor = pickedColor

        }else{
            this.style.backgroundColor = '#232323';
            massageDesplay.textContent = "TRY AGAIN!"
            h1.style.backgroundColor = 'steelblue';
        }
    });
}
function changeColor(color){
    //loop through all squares
    for (var i = 0; i<squares.length; i++){
        //change each color to mach 
        squares[i].style.backgroundColor = color;
    }
}
 function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
 }

function generateRandomColor(num){// num 3 or 6 
    //make an array
    var arr =[];
    //repet num times
    for(var i =0; i < num; i ++){
        //get random color and push into array
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    //pick a 'red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pic a 'green' from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pic a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}






