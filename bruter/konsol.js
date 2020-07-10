const CFonts = require('cfonts');
const colors = require('colors')


function doThings()
{
    CFonts.say('BRKBRUTER-INSTA', {
        font: 'block',              // define the font face
        align: 'center',              // define text alignment
        colors: ['#FF0000', "#FFFFFF"],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line // define if this is a transition between colors directly
        env: 'node'                 // define the environment CFonts is being executed in
      });
      CFonts.say('INSTAGRAM BRUTTER WRITTEN BY EXPIRTY', {
        font: 'chrome',              // define the font face
        align: 'center',     
        height: 1,         // define text alignment
        colors: ['#FF0000', "#FF0000", "#FF0000"],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line // define if this is a transition between colors directly
        env: 'node'                 // define the environment CFonts is being executed in
      });
      console.log("##Starting bruter...".bgBlack.bold)
      
}

module.exports = doThings