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
 

 var dist_prices1= new Array();
 dist_prices1["None"]=0;
 dist_prices1["1201"]=0;
 dist_prices1["1"]=5;
 dist_prices1["2"]=10;
 dist_prices1["3"]=15;
 dist_prices1["4"]=20;
 dist_prices1["5"]=25;
 dist_prices1["6"]=30;
 dist_prices1["7"]=35;
 dist_prices1["8"]=40;

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
    //Get a reference to the course the user Chooses name=selectedtype":
    var selectedType = theForm.elements["selectedtype"];
    // var selectedType theForm.elements["selectedtype"];
    //We loop through each radio buttons
    for(var i = 0; i < selectedType.length; i++)
    {
        //if the radio button is checked
        if(selectedType[i].checked)
        {
            //we set TypePrice to the value of the selected radio button
            //by using the type_course array
            //We get the selected Items value
            //For example type_course["simple".value]"
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
    //Get a reference to the form id="courseform"
    var theForm = document.forms["courseform"];
    //Get a reference to the course the user Chooses name=selectedurg":
    var selectedUrg = theForm.elements["selectedurg"];
    //We loop through each radio buttons
    for(var i = 0; i < selectedUrg.length; i++)
    {
        //if the radio button is checked
        if(selectedUrg[i].checked)
        {
            //we set UrgPrice to the value of the selected radio button
            //by using the type_course array
            //We get the selected Items value
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
function getDistPrice()
{
    var DistPrice1=0;
    var DistPrice2=0;
    //Get a reference to the form id="courseform"
    var theForm = document.forms["courseform"];
    //Get a reference to the select id="distance"
    var selectedDist1 = theForm.elements["distance1"];
    var selectedDist2 = theForm.elements["distance3"];
     
    //set Poids Price equal to value user chose
    DistPrice1 = dist_prices1[selectedDist1.value];
    DistPrice2 = dist_prices2[selectedDist2.value];

    //finally we return DistPrice
    return DistPrice1 + DistPrice2;
}


//This function finds the poids price based on the 
//drop down selection
function getPoidsPrice()
{
    var PoidsPrice=0;
    //Get a reference to the form id="courseform"
    var theForm = document.forms["courseform"];
    //Get a reference to the select id="poids"
     var selectedPoids = theForm.elements["poids"];
     
    //set Poids Price equal to value user chose
    PoidsPrice = poids_prices[selectedPoids.value];

    //finally we return PoidsPrice
    return PoidsPrice;
}

        
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


function highlight_map_states() {

    if ($(".states_section").size() > 0) {

        $(".states_section .list_states .item .link").hover(function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state hover");
        }, function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state")
        })
    }
};

$(function() {
    var $tooltip = $('.tooltip');

    $('path, circle').click(function(e){
        e.preventDefault();
        var t = this.getBoundingClientRect().top,
            l = this.getBoundingClientRect().left;
        $tooltip.css({"top": t + "px", "left": l + "px"}).show();
    });

    $('desc, text').click(function(e){
        e.preventDefault();
    });
});
