var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var HardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function()
{
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    } 
    h1.style.background = "steelblue";
})


hardBtn.addEventListener("click", function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    } 
    h1.style.background = "steelblue";
})

resetButton.addEventListener("click", function()
{
    //generate all new colors
    colors  = generateRandomColors(numSquares);
    //pick a new color from array
    pickedColor = pickColor();
    //change colordisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    this.textContent = "NEW COLORS";

    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
    //Add initial colors to squares
    squares[i].style.background = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function()
    {
        //Grab color of clicked square
        var clickedColor = this.style.background;
        //Compare color to pickedColor
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "PLAY AGAIN"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
function changeColors(color)
{
    //Loop through all squares
    for(var  i = 0; i < squares.length; i++)
    {
        //Change each color to match given color
        squares[i].style.background = color;
    }
}
function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num)
{
    //Make array
    var arr = []
    //Repeat num times
    for(var  i = 0; i < num; i++)
    {
        //Get random colors and push into array
        arr.push(randomColor());

    }
    //Return the array
    return arr;
}
function randomColor()
{
    //Pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}