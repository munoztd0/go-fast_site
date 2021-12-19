/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 //Set up an associative array
 var type_course = new Array();
 type_course["simple"]=15;
 type_course["cargo"]=30;



 var urg_prices= new Array();
 urg_prices["rapide"]=1;
 urg_prices["urgent"]=2;
 

 var poids_prices= new Array();
 poids_prices["None"]=0;
 poids_prices["0"]=0;
 poids_prices["1"]=5;
 poids_prices["2"]=10;
 poids_prices["3"]=15;
 poids_prices["4"]=20;
 poids_prices["5"]=25;
 poids_prices["6"]=30;
 poids_prices["7"]=35;
 poids_prices["8"]=40;


 
	 
	 
// getTypePrice() finds the price based on infos
// Here, we need to take user's the selection from radio button selection
function getTypePrice()
{  
    var typePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["courseform"];
    //Get a reference to the course the user Chooses name=selectedcourse":
    var selectedType = theForm.elements["selectedtype"];
    // var selectedType theForm.elements["selectedtype"];
    //Here since there are 4 radio buttons selectedcourse.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedType.length; i++)
    {
        //if the radio button is checked
        if(selectedType[i].checked)
        {
            //we set TypePrice to the value of the selected radio button
            //i.e. if the user choose the 8" course we set it to 25
            //by using the type_course array
            //We get the selected Items value
            //For example type_course["Round8".value]"
            typePrice = type_course[selectedType[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the TypePrice
    return typePrice;
}


	 
	 
// getTypePrice() finds the price based on infos
// Here, we need to take user's the selection from radio button selection
function getUrgPrice()
{  
    var UrgPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["courseform"];
    //Get a reference to the course the user Chooses name=selectedcourse":
    var selectedUrg = theForm.elements["selectedurg"];
    // var selectedUrg theForm.elements["selectedurg"];
    //Here since there are 4 radio buttons selectedcourse.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedUrg.length; i++)
    {
        //if the radio button is checked
        if(selectedUrg[i].checked)
        {
            //we set UrgPrice to the value of the selected radio button
            //i.e. if the user choose the 8" course we set it to 25
            //by using the type_course array
            //We get the selected Items value
            //For example type_course["Round8".value]"
            UrgPrice = urg_prices[selectedUrg[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the UrgPrice
    return UrgPrice;
}




//This function finds the poids price based on the 
//drop down selection
function getPoidsPrice()
{
    var PoidsPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["courseform"];
    //Get a reference to the select id="poids"
     var selectedPoids = theForm.elements["poids"];
     
    //set Poids Price equal to value user chose
    //For example poids_prices["Lemon".value] would be equal to 5
    PoidsPrice = poids_prices[selectedPoids.value];

    //finally we return PoidsPrice
    return PoidsPrice;
}

// //candlesPrice() finds the candles price based on a check box selection
// function candlesPrice()
// {
//     var candlePrice=0;
//     //Get a reference to the form id="cakeform"
//     var theForm = document.forms["cakeform"];
//     //Get a reference to the checkbox id="includecandles"
//     var includeCandles = theForm.elements["includecandles"];

//     //If they checked the box set candlePrice to 5
//     if(includeCandles.checked==true)
//     {
//         candlePrice=5;
//     }
//     //finally we return the candlePrice
//     return candlePrice;
// }

// function insciptionPrice()
// {
//     //This local variable will be used to decide whether or not to charge for the inscription
//     //If the user checked the box this value will be 20
//     //otherwise it will remain at 0
//     var inscriptionPrice=0;
//     //Get a refernce to the form id="cakeform"
//     var theForm = document.forms["cakeform"];
//     //Get a reference to the checkbox id="includeinscription"
//     var includeInscription = theForm.elements["includeinscription"];
//     //If they checked the box set inscriptionPrice to 20
//     if(includeInscription.checked==true){
//         inscriptionPrice=20;
//     }
//     //finally we return the inscriptionPrice
//     return inscriptionPrice;
// }
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var TotPrice = (getTypePrice() * getUrgPrice()) + getPoidsPrice() //+ candlesPrice() + insciptionPrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Prix  "+TotPrice+"  CHF";

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}