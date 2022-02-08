const prompt = require("prompt-sync")();

/* Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly). */

UserColor_Program = Number(prompt("Would you like to deconstruc a color?, press 1. If you would like to combine colors, press 2. "))

/*
If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.  

| inputs | output |
| --- | --- |
| red + blue | purple |
| red + yellow | orange |
| blue + yellow | green |
| anything else | "error" | */

if (UserColor_Program === 2) {
    let color_choice1 = Number(prompt("Please choose color one. Red = 1, blue = 2, yellow = 3 "));


    // console.log(typeof(color_choice1))

    if (color_choice1 < 1 && color_choice1 >= 4) {
        console.log("Please enter a correct choice: 1, 2, or 3.");
        color_choice1 = Number(prompt("Please choose color one. Red = 1, blue = 2, yellow = 3 "));
    }
    
    let color_choice2 = Number(prompt("Please choose color two. Red = 1, blue = 2, yellow = 3 "));

    if (color_choice2 < 0 && color_choice2 >= 4){
        console.log("Please enter a correct choice: 1, 2, or 3.");
        color_choice2 = Number(prompt("Please choose color one. Red = 1, blue = 2, yellow = 3 "));
    }
    if ( color_choice2 === color_choice1){
            console.log("please choose a different color for choice 2, Thank You! ");
            color_choice2 = Number(prompt("Please choose color two. Red = 1, blue = 2, yellow = 3 ")); 
    }

    let mixed_color_Number = Number(color_choice1  + color_choice2); 
    // console.log(mixed_color_Number)

    if (mixed_color_Number === 3){
        console.log("Your mixed color is Purple.")
    }

    else if (mixed_color_Number === 4){
        console.log("Your mixed color is Orange.")
        }
    else if (mixed_color_Number === 5) {
        console.log("Your mixed color is Green.")
        }
   
};




/* If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.
 */

if (UserColor_Program === 1){
    let color_deconstruction = prompt("please choose a color to deconstruct. Choose 1 for Purple, choose 2 for Orange, or 3 for Green ");

    if (color_deconstruction < 0 && color_deconstruction > 3){
        console.log("Your choice is not within the range. Please choose again")
        color_deconstruction = prompt("please choose a color to deconstruct. Choose 1 for Purple, choose 2 for Orange, or 3 for Green. ");
        console.log("+++++ " + color_deconstruction)
    }
    if (color_deconstruction == 1){
        console.log("The deconstructed colors are: Red and Blue.")
    }

    if (color_deconstruction == 2){
        console.log("The deconstructed colors are: Red and Yellow.")
        }
    
    if (color_deconstruction == 3){
        console.log("The deconstructed colors are: Blue and Yellow")
    } 
    
};




