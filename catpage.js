var pointer = 0;

function goRight(){
    console.log("go right has been clicked");
    
    if (pointer < 8){ //checks if image is not at the right-most picture and if so, will advance the image one to the right
        pointer++;
    } else if (pointer == 8) { // if the image is at the last element (5), will loop to the first picture
        pointer = 0;   
    } 
    var w = window.innerWidth;
   
    document.getElementById("slider").style.transform = ("translateX(-" + pointer * 25 + "vw)");

    getCatText();
    console.log(pointer);
}

function goLeft(){
    console.log("go left has been clicked");
    var w = window.innerWidth;

    if (pointer == 0){ //checks if image is at the left-most picture and if so, loops to the last picture
        pointer = 8;
    } else if (pointer > 0) { //if image isn't the left-most, will advance the image one to the left.
        pointer--;  
    } 
    document.getElementById("slider").style.transform = ("translateX(-" + pointer * 25 + "vw)");
    
    getCatText();

    console.log(pointer);
}

function getCatText(){ //This will change the text on the page based on which picture is being shown
    var textID = document.getElementById("catPictureText");
    var text;
    console.log(textID);

    switch(pointer){ //Currently have 9 images
        case pointer = 0:
        text = "Here he is stopping me from working to play with him!";
            break;

        case pointer = 1:
        text = "Here he is wearing his St. Patrick's Day Collar!";
            break;

        case pointer = 2:
        text = "Here he is on the first day with us!";
            break;

        case pointer = 3:
            text = "Here he is on the first day with us!";
            break;

        case pointer = 4:
            text = "Should I go up? Or should I go down?";
            break;

        case pointer = 5:
            text = "Sleepy Kitty";
            break;

        case pointer = 6:
            text = "He loved the collar so much, he kept in on";
            break;

        case pointer = 7:
            text = "Lazy Boy!";
            break;

        case pointer = 8:
            text = "Don't you love Ginger Cats?";
            break;

        default: 
        text = "Don't you love Ginger Cats?"
    }
    console.log(text);

    document.getElementById("catPictureText").innerText = text;
}