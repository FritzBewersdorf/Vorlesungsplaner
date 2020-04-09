var date = new Date();
var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
var yearOfThursday = currentThursday.getFullYear();
var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

Kalenderwoche(weekNumber);
JahrAnzeigen(yearOfThursday);

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

    if(weekNumber!=1){
        document.getElementById("NeuerButton1").addEventListener('click', function() {
            weekNumber = weekNumber-1;
            Kalenderwoche(weekNumber);
        });
    }
    else{
        document.getElementById("NeuerButton1").addEventListener('click', function() {
            weekNumber = 52;
            yearOfThursday = yearOfThursday -1;
            Kalenderwoche(weekNumber);
            JahrAnzeigen(yearOfThursday)
        })
    }

    if(weekNumber!=52){
        document.getElementById("NeuerButton2").addEventListener('click', function() {
            weekNumber = weekNumber+1;
            Kalenderwoche(weekNumber);
        })
    }
    else{
        document.getElementById("NeuerButton2").addEventListener('click', function() {
            weekNumber = 1;
            yearOfThursday = yearOfThursday +1;
            Kalenderwoche(weekNumber);
            JahrAnzeigen(yearOfThursday)
        })
    }
}

function clearContent()
{
   document.getElementById("KalenderMitmachen").innerHTML="";
}

function JahrAnzeigen(yearOfThursday){
    clearContent1()

    console.log(yearOfThursday);

    var buttonUno1 = document.createElement("button");
    buttonUno1.setAttribute('type', 'fas fa-arrow-lef');
    buttonUno1.id = 'NeuerButton3';
    buttonUno1.innerHTML = "Jahr zurück"; 

    var Naaame12 = document.createElement("h3"); 
    Naaame12.textContent = "Jahr " + yearOfThursday;

    var buttonBeta1 = document.createElement("button");
    buttonBeta1.setAttribute('type', 'fas fa-arrow-right');
    buttonBeta1.setAttribute('id', 'NeuerButton4');
    buttonBeta1.innerHTML = "Jahr weiter"; 

    document.getElementById("KalenderJahr").appendChild(buttonUno1);
    document.getElementById("KalenderJahr").appendChild(Naaame12);
    document.getElementById("KalenderJahr").appendChild(buttonBeta1);

    if(yearOfThursday!=0){
        document.getElementById("NeuerButton3").addEventListener('click', function() {
            yearOfThursday = yearOfThursday-1;
            weekNumber =1;
            JahrAnzeigen(yearOfThursday);
            Kalenderwoche(weekNumber);
        });
    }

    document.getElementById("NeuerButton4").addEventListener('click', function() {
        yearOfThursday = yearOfThursday+1;
        weekNumber =1;
        JahrAnzeigen(yearOfThursday);
        Kalenderwoche(weekNumber);
    });
}

function clearContent1()
{
   document.getElementById("KalenderJahr").innerHTML="";
}