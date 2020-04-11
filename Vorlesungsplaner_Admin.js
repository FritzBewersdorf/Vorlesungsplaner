var date = new Date();
var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
var yearOfThursday = currentThursday.getFullYear();
var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

Kalenderwoche(weekNumber, yearOfThursday);

function Kalenderwoche(weekNumber, yearOfThursday){
    document.getElementById("KalenderMitmachen").innerHTML="";

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

    document.getElementById("KalenderJahr").innerHTML="";

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

    if(weekNumber!=1){
        document.getElementById("NeuerButton1").addEventListener('click', function() {
            weekNumber = weekNumber-1;
            Kalenderwoche(weekNumber, yearOfThursday);
            AufrufenTage(weekNumber, yearOfThursday);
        });
    }
    else{
        document.getElementById("NeuerButton1").addEventListener('click', function() {
            weekNumber = 52;
            yearOfThursday = yearOfThursday -1;
            Kalenderwoche(weekNumber, yearOfThursday);
            AufrufenTage(weekNumber, yearOfThursday);
        })
    }

    if(weekNumber!=52){
        document.getElementById("NeuerButton2").addEventListener('click', function() {
            weekNumber = weekNumber+1;
            Kalenderwoche(weekNumber, yearOfThursday);
            AufrufenTage(weekNumber, yearOfThursday);
        })
    }
    else{
        document.getElementById("NeuerButton2").addEventListener('click', function() {
            weekNumber = 1;
            yearOfThursday = yearOfThursday +1;
            Kalenderwoche(weekNumber, yearOfThursday);
            AufrufenTage(weekNumber, yearOfThursday);
        })
    }
    if(yearOfThursday!=0){
        document.getElementById("NeuerButton3").addEventListener('click', function() {
            yearOfThursday = yearOfThursday-1;
            weekNumber =1;
            Kalenderwoche(weekNumber, yearOfThursday);
            AufrufenTage(weekNumber, yearOfThursday);
        });
    }

    document.getElementById("NeuerButton4").addEventListener('click', function() {
        yearOfThursday = yearOfThursday+1;
        weekNumber =1;
        Kalenderwoche(weekNumber, yearOfThursday);
        AufrufenTage(weekNumber, yearOfThursday);
    });
}

var a = new Array(52);
var Bei = 1
for (var i = 0; i < 52; i++) {
    a[i] = Bei;
    Bei++;
  }

console.log(a);

var b = new Array(5000);
var Bei1 = 1
for (var i = 0; i < 5000; i++) {
    a[i] = Bei1;
    Bei1++;
  }

console.log(b);


AufrufenTage(weekNumber, yearOfThursday);

function AufrufenTage(weekNumber, yearOfThursday){
    a.forEach(item =>{
        if(item=weekNumber){
            console.log(item);
            montag(item);
            dienstag(item);
            mittwoch(item);
            donnerstag(item);
            freitag(item);
            samstag(item);
            sonntag(item);
        }
    })
}

function montag(item){
    document.getElementById("ansichtmontag").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Montag" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichtmontag").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi7.textContent= "Mathe" + item;
            divi6.appendChild(divi7);

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichtmontag").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichtmontag").appendChild(divi9);
}

function dienstag(item){
    document.getElementById("ansichtdienstag").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Dienstag" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichtdienstag").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi6.appendChild(divi7);
            divi7.textContent= "Mathe" + item;

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichtdienstag").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichtdienstag").appendChild(divi9);
}

function mittwoch(item){
    document.getElementById("ansichmittwoch").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Mittwoch" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichmittwoch").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi6.appendChild(divi7);
            divi7.textContent= "Mathe" + item;

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichmittwoch").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichmittwoch").appendChild(divi9);
}

function donnerstag(item){
    document.getElementById("ansichtdonnerstag").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Donnerstag" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichtdonnerstag").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi6.appendChild(divi7);
            divi7.textContent= "Mathe" + item;

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichtdonnerstag").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichtdonnerstag").appendChild(divi9);
}

function freitag(item){
    document.getElementById("ansichtfreitag").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Freitag" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichtfreitag").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi6.appendChild(divi7);
            divi7.textContent= "Mathe" + item;

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichtfreitag").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichtfreitag").appendChild(divi9);
}

function samstag(item){
    document.getElementById("ansichtsamstag").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Samstag" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichtsamstag").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi6.appendChild(divi7);
            divi7.textContent= "Mathe" + item;

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichtsamstag").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichtsamstag").appendChild(divi9);
}

function sonntag(item){
    document.getElementById("ansichtsonntag").innerHTML="";

            var divi5 = document.createElement("div");
            divi5.setAttribute('id', 'tagheader');

            var h3geile = document.createElement("h3");
            h3geile.textContent = "Sonntag" + item;
            divi5.appendChild(h3geile);

            document.getElementById("ansichtsonntag").appendChild(divi5);

            var divi6 = document.createElement("div");
            divi6.setAttribute('id', 'taginhalt');

            var divi7 = document.createElement("div");
            divi7.setAttribute('id', 'einzelnevorlesung');
            divi6.appendChild(divi7);
            divi7.textContent= "Mathe" + item;

            var h6geile = document.createElement("h6");
            h6geile.textContent = "9:00 bis 12:15";
            divi7.appendChild(h6geile);

            document.getElementById("ansichtsonntag").appendChild(divi6);

            var divi9 = document.createElement("div");
            divi9.setAttribute('id', 'taginhalt');

            var divi10 = document.createElement("div");
            divi10.setAttribute('id', 'einzelnevorlesung');
            divi9.appendChild(divi10);
            divi10.textContent= "Sport" + item;

            var h6geile1 = document.createElement("h6");
            h6geile1.textContent = "9:00 bis 12:15";
            divi10.appendChild(h6geile1);

            document.getElementById("ansichtsonntag").appendChild(divi9);
}
////////////// Sidebar ein und ausfahren mit Abfrage nach Bildschirmbreite

function openNav() {
    if (screen.availWidth > 600)
    {
        document.getElementById("sideBar").style.width = "250px";
    }
    else
    {
        document.getElementById("sideBar").style.width = "100%";
    }
    
    document.getElementById("ansichtdozent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("ansichtdozent").style.marginLeft= "0";
}