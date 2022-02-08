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
    if ( color_choice2 = color_choice1){
            console.log("please choose a different color");
            color_choice2 = Number(prompt("Please choose color two. Red = 1, blue = 2, yellow = 3 ")); 
    }
let mixed_color_Number = Number(color_choice1  + color_choice2); 
// console.log(mixed_color_Number)

if (mixed_color_Number === 3){
     console.log("Your mixed color is Purple")
}
if (mixed_color_Number === 4){
        console.log("Your mixed color is Orange")
}
if (mixed_color_Number === 5) {
        console.log("Your mixed color is Green")
}
}   









/* If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.
 */

