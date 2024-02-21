const lightbulb = document.getElementById('lightbulb')
const lightswitch = document.getElementById('lightswitch')
const status = document.getElementById('statusofswitch')

let islighton = false;
lightswitch.addEventListener('click' ,function()  {

        if(islighton){

     lightbulb.src= "offl.png";
     lightswitch.src= "offs.png";
     status.textContent = "turn on the light.";
    }
     else{
        lightbulb.src= "onl.png";
        lightswitch.src= "ons.png";
        status.textContent = "you did it now turn off the light"

    }
      islighton =!islighton
    }


)