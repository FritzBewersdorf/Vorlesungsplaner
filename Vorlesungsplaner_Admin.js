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
    Naaame11.id = "idWoche";

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
    Naaame12.id = "idJahr";

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
            forTage();
        });
    }
    else{
        document.getElementById("NeuerButton1").addEventListener('click', function() {
            weekNumber = 52;
            yearOfThursday = yearOfThursday -1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }

    if(weekNumber!=52){
        document.getElementById("NeuerButton2").addEventListener('click', function() {
            weekNumber = weekNumber+1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }
    else{
        document.getElementById("NeuerButton2").addEventListener('click', function() {
            weekNumber = 1;
            yearOfThursday = yearOfThursday +1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }
    if(yearOfThursday!=0){
        document.getElementById("NeuerButton3").addEventListener('click', function() {
            yearOfThursday = yearOfThursday-1;
            weekNumber =1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        });
    }

    document.getElementById("NeuerButton4").addEventListener('click', function() {
        yearOfThursday = yearOfThursday+1;
        weekNumber =1;
        Kalenderwoche(weekNumber, yearOfThursday);
        forTage();
    });
}

var tage = [{number: 1, tag: "Montag"},{number: 2, tag: "Dienstag"},{number: 3, tag: "Mittwoch"},{number: 4, tag: "Donnerstag"},{number: 5, tag: "Freitag"},{number: 6, tag: "Samstag"},{number: 7, tag: "Sonntag"}]

function forTage(){
    tage.forEach(tag=>{
        tagMalen(tag.number, tag.tag);
    }) 
}

function tagMalen(number, tag){
    var ansicht = "";
    document.getElementById(ansicht.concat("ansicht", tag.toLowerCase())).innerHTML="";

    var tagUndDatum = document.createElement("div");
    tagUndDatum.setAttribute('id', 'tagheader');

    var datum = getDateOfISOWeek(document.getElementById("idWoche").textContent.substring(14), document.getElementById("idJahr").textContent.substring(5),number);

    var h3geile = document.createElement("h3");
    var ausgeschriebenerTag= "";
    h3geile.textContent = ausgeschriebenerTag.concat(tag, ", der ");
    var IDh3 = document.createElement("h3");
    IDh3.textContent = datum;
    tagUndDatum.appendChild(h3geile);
    tagUndDatum.appendChild(IDh3);

    document.getElementById(ansicht.concat("ansicht", tag.toLowerCase())).appendChild(tagUndDatum);

    var vorlesungsBlock = document.createElement("div");
    vorlesungsBlock.setAttribute('id', tag + 'inhalt');

    var h6geile = document.createElement("h6");
    h6geile.textContent = "9:00 bis 12:15";
    vorlesungsBlock.appendChild(h6geile);

    document.getElementById(ansicht.concat("ansicht", tag.toLowerCase())).appendChild(vorlesungsBlock);

    document.getElementById(ansicht.concat("ansicht", tag.toLowerCase())).addEventListener('click', function dialogNeueListe1()
    {
        document.getElementById("dialog2").showModal();
        window.localStorage.setItem('vorDatumEingelesen', datum);
    });

    document.getElementById("speichern").addEventListener('click', function() {

        window.localStorage.removeItem('vorDatumEingelesen');
        document.getElementById("fach").value = "";
        document.getElementById("zeitplan").value = "";
        document.getElementById("dialog2").close();

        var fach = document.getElementById("fach").value;
        var x = document.getElementById("zeitplan");
        var i = x.selectedIndex;
        console.log(i);
    
        var apiUrl3 = "http://localhost:8080/Vorlesung";
        fetch(apiUrl3, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({    vorTitel: fach,
                                        vorDatum: "2020-04-15", /*window.localStorage.getItem('vorDatumEingelesen')*/
                                        zeitraum: {
                                            zeiId: 1
                                        },
                                        nutzer: {
                                            nutId: parseInt(window.localStorage.getItem('nutIdEingelesen'))
                                        }
                                })
            })
            .catch(err => console.error(err))
    
    })
        
    document.getElementById("abbrechen").addEventListener('click', function() {
        window.localStorage.removeItem('vorDatumEingelesen');
        document.getElementById("fach").value = "";
        document.getElementById("zeitplan").value = "";
        document.getElementById("dialog2").close();
    })

    vorlesungsListe();

    async function vorlesungsListe(){
    
        const response = await fetch('http://localhost:8080/Vorlesung/0');
        const data = await response.json();

        var abgefragteVorlesungen = [];
        for(let item of data){
            var abfrageVorlesung = new Date(item.vorDatum.substring(0,10).split("-").join(","));
            if(abfrageVorlesung.toLocaleDateString()==datum){
                var neueVorlesung = abgefragteVorlesungen.push(item);
            }
        }
        abgefragteVorlesungen.forEach(vorlesung =>{
            var block1 = document.createElement("div");
            block1.textContent = vorlesung.vorTitel + " bei " + vorlesung.nutzer.nutNachname;
            document.getElementById(tag+ "inhalt").appendChild(block1)
        })
    }
}

function getDateOfISOWeek(item,yearOfThursday,number) {
    var simple = new Date(yearOfThursday, 0, 0 + (item - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
       ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
       ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
 
    ISOweekStart.setDate(ISOweekStart.getDate()+(number-1));
    return ISOweekStart.toLocaleDateString(); 
}

forTage();
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
