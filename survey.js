const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer0) => {
  console.log(`Nice to meet you ${answer0}`);

  //rl.close();
  rl.question("What's an activity you like doing?", (answer1) => {
    console.log(`I like ${answer1} too`);
  
    //rl.close();
 
    rl.question("What do you listen to while doing that?", (answer2) => {
      console.log(`${answer2} is a good choice`);
      
      //rl.close();
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer3) => {
        console.log(`I like ${answer3} too `);
          
        //rl.close();
         
        rl.question("What's your favourite thing to eat for that meal?", (answer4) => {
          console.log(`${answer4} sounds delicous`);
              
          //rl.close();
              
          rl.question("Which sport is your absolute favourite?", (answer5) => {
            console.log(`${answer5} is a fun sport`);
                  
            //rl.close();
                 
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer6) => {
              console.log(`${answer6} is an awesome superpower!`);
                      

              console.log(`Nice to meet you ${answer0}! Your favorite activity is ${answer1} and you listen to ${answer2}. You enjoy ${answer3} time the most and your favorite meal is ${answer4}. Your favorite sport is ${answer5} and your superpower is ${answer6}.`);
              rl.close();
            });
                
          });
                
            
            
        });
        
        
      });
    
    
    });

  });
  

});










