var pointer = 0;

function goRight(){
    console.log("go right has been clicked");
    
    if (pointer < 5){ //checks if image is not at the right-most picture and if so, will advance the image one to the right
        pointer++;
    } else if (pointer == 5) { // if the image is at the last element (5), will loop to the first picture
        pointer = 0;   
    } 
    var w = window.innerWidth;

    // if (w > "1500px"){
    //     document.getElementById("slider").style.transform = ("translateX(-" + pointer * 400 + "px)");
    // } else {
    //     document.getElementById("slider").style.transform = ("translateX(-" + pointer * 25 + "vw)");
    // }   
    document.getElementById("slider").style.transform = ("translateX(-" + pointer * 25 + "vw)");

    console.log(pointer);
}

function goLeft(){
    console.log("go left has been clicked");
    var w = window.innerWidth;

    if (pointer == 0){ //checks if image is at the left-most picture and if so, loops to the last picture
        pointer = 5;
    } else if (pointer > 0) { //if image isn't the left-most, will advance the image one to the left.
        pointer--;  
    } 
    document.getElementById("slider").style.transform = ("translateX(-" + pointer * 25 + "vw)");
    
    console.log(pointer);
}