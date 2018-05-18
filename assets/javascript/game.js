 // create a variable that holds all 26 letters of English in upper case.
    var computer_choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Creating variables to hold the number of wins, losses, 
    //initial counter for number of guesses and an empty array for the guess thus far .
    var wins = 0;
    var losses = 0;
    var guess_initial = 9;
    var user_guess_thus_far = [];

    // This function is run whenever the user presses a key and releases it (when key is "up").
    document.onkeyup = function(event) {
      
        // The below line determines which key was pressed.
      var userGuess = event.key.toUpperCase();
      
      // Randomly chooses a letter from the computer_choices array. This is the Computer's guess.
      var comp_sel_letter = computer_choices.charAt(Math.floor(Math.random() * computer_choices.length));

      console.log(comp_sel_letter);
      //below if stmt checks if the user guessed/pressed letter is same as the computer selected letter, 
      //if so 
      //wins is incremented by 1 & its updated value is displayed on the page & then the game restarts 
      //else 
      //remaining guess counter is decremented by 1 
      //and the incorrect guess is pushed to the "Guessed thus far" array
      if (userGuess === comp_sel_letter ){
            wins++;
            document.getElementById("id_win").innerHTML = wins;
            reset();
      }
      else {
          guess_initial--;
          user_guess_thus_far.push(userGuess.toLowerCase());
      }
      console.log(user_guess_thus_far.length);
    
      //Updated values of guess counter and "Guesses thus far" array is displayed to page
      display_scr();
    
      //Below if stmt checks if the max number of user guesses have reached 9 or not .
      //if so, then I increment the losses counter by 1 and display that value to page.
      //Also, the game then restarts with initial guesses counter reset to 9 and guesses thus far array set to empty
      if (user_guess_thus_far.length == 9) {
          console.log("You have reached max");
          losses++;
          document.getElementById("id_loss").innerHTML = losses;
         reset();
         display_scr();
      }
      
     //function to reset the guessed letters array and the guess counter   
      function reset(){
        user_guess_thus_far = [];
            guess_initial = 9;
      }

     //Function to dynamically change the values of the guess counter and the guesses thus far array
      function display_scr(){
        document.getElementById("id_guess_left").innerHTML = guess_initial;
        document.getElementById("id_guess_stated").innerHTML = user_guess_thus_far;
      }
    }