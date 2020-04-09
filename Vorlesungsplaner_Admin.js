var date = new Date();
var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
var yearOfThursday = currentThursday.getFullYear();
var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

Kalenderwoche(weekNumber);

function Kalenderwoche(weekNumber){
    clearContent();
    console.log(weekNumber);

    var buttonUno = document.createElement("button");
    buttonUno.setAttribute('type', 'fas fa-arrow-lef');
    buttonUno.id = 'NeuerButton1';
    buttonUno.innerHTML = "Woche zurück"; 

    var Naaame11 = document.createElement("h4"); 
    Naaame11.textContent = "Kalenderwoche " + weekNumber;

    var buttonBeta = document.createElement("button");
    buttonBeta.setAttribute('type', 'fas fa-arrow-right');
    buttonBeta.setAttribute('id', 'NeuerButton2');
    buttonBeta.innerHTML = "Woche weiter"; 

    document.getElementById("KalenderMitmachen").appendChild(buttonUno);
    document.getElementById("KalenderMitmachen").appendChild(Naaame11);
    document.getElementById("KalenderMitmachen").appendChild(buttonBeta);

    document.getElementById("NeuerButton1").addEventListener('click', function() {
        weekNumber = weekNumber-1;
        Kalenderwoche(weekNumber);
    });
    
    document.getElementById("NeuerButton2").addEventListener('click', function() {
        weekNumber = weekNumber+1;
        Kalenderwoche(weekNumber);
    });
}

function clearContent()
{
   document.getElementById("KalenderMitmachen").innerHTML="";
}

