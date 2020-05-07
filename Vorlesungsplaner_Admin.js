var date = new Date();
var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
var yearOfThursday = currentThursday.getFullYear();
var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

Kalenderwoche(weekNumber, yearOfThursday);

function Kalenderwoche(weekNumber, yearOfThursday){
    document.getElementById("KalenderMitmachen").innerHTML="";

    var buttonWocheLinks = document.createElement("button");
    buttonWocheLinks.setAttribute('class', 'fas fa-arrow-left');
    buttonWocheLinks.id = 'wocheZurueck';
   

    var WochenName = document.createElement("h4"); 
    WochenName.textContent = "Kalenderwoche " + weekNumber;
    WochenName.id = "idWoche";

    var buttonWocheRechts = document.createElement("button");
    buttonWocheRechts.setAttribute('class', 'fas fa-arrow-right');
    buttonWocheRechts.setAttribute('id', 'wocheVorne');
    

    document.getElementById("KalenderMitmachen").appendChild(buttonWocheLinks);
    document.getElementById("KalenderMitmachen").appendChild(WochenName);
    document.getElementById("KalenderMitmachen").appendChild(buttonWocheRechts);

    document.getElementById("KalenderJahr").innerHTML="";

    var buttonJahrLinks = document.createElement("button");
    buttonJahrLinks.setAttribute('class', 'fas fa-arrow-left');
    buttonJahrLinks.id = 'JahrZurueck';
    

    var JahrName = document.createElement("h3"); 
    JahrName.textContent = "Jahr " + yearOfThursday;
    JahrName.id = "idJahr";

    var buttonJahrRechts = document.createElement("button");
    buttonJahrRechts.setAttribute('class', 'fas fa-arrow-right');
    buttonJahrRechts.setAttribute('id', 'JahrVorne');
    

    document.getElementById("KalenderJahr").appendChild(buttonJahrLinks);
    document.getElementById("KalenderJahr").appendChild(JahrName);
    document.getElementById("KalenderJahr").appendChild(buttonJahrRechts);

    // Woche nach Hinten

    if(weekNumber!=1){
        document.getElementById("wocheZurueck").addEventListener('click', function() {
            weekNumber = weekNumber-1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        });
    }
    else if ((yearOfThursday != 2005 &&yearOfThursday != 2010 &&yearOfThursday != 2016 && yearOfThursday != 2021 && yearOfThursday != 2027 && yearOfThursday != 2033) && weekNumber == 1){
        document.getElementById("wocheZurueck").addEventListener('click', function() {
            weekNumber = 52;
            yearOfThursday = yearOfThursday -1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }
    else if ((yearOfThursday == 2005 ||yearOfThursday == 2010 ||yearOfThursday == 2016 ||yearOfThursday == 2021 || yearOfThursday == 2027 || yearOfThursday == 2033) && weekNumber ==1 ){
        document.getElementById("wocheZurueck").addEventListener('click', function() {
            weekNumber = 53;
            yearOfThursday = yearOfThursday -1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }

    // Woche nach Vorne

    if(weekNumber!=52){
            document.getElementById("wocheVorne").addEventListener('click', function() {
                weekNumber = weekNumber+1;
                Kalenderwoche(weekNumber, yearOfThursday);
                forTage();
            })
    }
    else if ((yearOfThursday!=2004 && yearOfThursday!=2009 && yearOfThursday!=2015 && yearOfThursday!=2020 && yearOfThursday !=2026 && yearOfThursday !=2032) && weekNumber == 52){
        document.getElementById("wocheVorne").addEventListener('click', function() {
            weekNumber = 1;
            yearOfThursday = yearOfThursday +1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }
    else if((yearOfThursday == 2004 || yearOfThursday == 2009 ||yearOfThursday == 2015 || yearOfThursday == 2020 || yearOfThursday == 2026 || yearOfThursday == 2032) && weekNumber ==52){
        document.getElementById("wocheVorne").addEventListener('click', function() {
            weekNumber = weekNumber +1;
            
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        })
    }
    if(weekNumber==54){
        weekNumber = 1;
        yearOfThursday = yearOfThursday +1;
        Kalenderwoche(weekNumber, yearOfThursday);
        forTage();
    }

    // Jahre nach Vorne und Hinten

    if(yearOfThursday!=0){
        document.getElementById("JahrZurueck").addEventListener('click', function() {
            yearOfThursday = yearOfThursday-1;
            weekNumber =1;
            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();
        });
    }

    document.getElementById("JahrVorne").addEventListener('click', function() {
        yearOfThursday = yearOfThursday+1;
        weekNumber =1;
        Kalenderwoche(weekNumber, yearOfThursday);
        forTage();
    });
}


document.getElementById("testButton2").addEventListener('click', function()
{
    weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);
    Kalenderwoche(weekNumber, yearOfThursday);
    forTage();
});

document.getElementById("testButton3").addEventListener('click', function dialogNeueListe2()
{
    document.getElementById("DialogDatum").showModal();
});

document.getElementById("ButtonAbbrechen").addEventListener('click', function() {
    document.getElementById("exampleFormControlInput12").value = "";
    document.getElementById("DialogDatum").close();
})

document.getElementById("ButtonAuswaehlen").addEventListener('click', function() {
    var feldElement = document.getElementById("exampleFormControlInput12").value;

    var dd = feldElement.substr(0,2);
    var mm = feldElement.substr(3,2);
    var yyyy = feldElement.substr(6,4);

    if (isNaN(dd)||isNaN(dd)||isNaN(yyyy)){
        alert("Zahlen inkorrekt")
    }
    else{
        var ZeitGesamt = new Date();
        ZeitGesamt = mm +"."+ dd +"."+ yyyy

        var ZeitEndlich = new Date(ZeitGesamt)
        console.log(ZeitEndlich)

        if (isNaN(ZeitEndlich.getTime())){
            alert("Zeit nicht gültig")
        }
        else{
            var currentThursday = new Date(ZeitEndlich.getTime() +(3-((ZeitEndlich.getDay()+6) % 7)) * 86400000);
            var yearOfThursday = currentThursday.getFullYear();
            var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
            var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

            Kalenderwoche(weekNumber, yearOfThursday);
            forTage();

            document.getElementById("exampleFormControlInput12").value = "";
            document.getElementById("DialogDatum").close();
        }
    }
})

document.getElementById("testButton4").addEventListener('click', function dialogNeueListe2()
{
    document.getElementById("DialogUhrzeit").showModal();
});

document.getElementById("ButtonAbbrechen2").addEventListener('click', function() {
    document.getElementById("exampleFormControlInput13").value = "";
    document.getElementById("exampleFormControlInput14").value = "";
    document.getElementById("DialogUhrzeit").close();
})

document.getElementById("ButtonAuswaehlen2").addEventListener('click', function() {
    var uhrzeitEins = document.getElementById("exampleFormControlInput13").value;
    var uhrzeitZwei = document.getElementById("exampleFormControlInput14").value;

    var apiUrl5 = "http://localhost:8080/Zeitraum";
            fetch(apiUrl5, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({    zeiBeginn: uhrzeitEins,
                                            zeiEnde: uhrzeitZwei
                                    })
                })
                .catch(err => console.error(err))
                .then(forTage);

    document.getElementById("exampleFormControlInput13").value = "";
    document.getElementById("exampleFormControlInput14").value = "";
    document.getElementById("DialogUhrzeit").close();
})

vorlesungsListeNeu()
async function vorlesungsListeNeu(){
    const response = await fetch('http://localhost:8080/Zeitraum/0');
    const data = await response.json();
    for (let item of data){
        var optionenButton = document.createElement("option")
        optionenButton.setAttribute("id", item.zeiId);
        optionenButton.textContent = item.zeiBeginn +" bis " + item.zeiEnde;
        document.getElementById("zeitplan").appendChild(optionenButton);
    }
}


vorlesungsListeNeu2()
async function vorlesungsListeNeu2(){
    const response = await fetch('http://localhost:8080/Zeitraum/0');
    const data = await response.json();
    for (let item of data){
        var optionenButton = document.createElement("option")
        optionenButton.setAttribute("id", item.zeiId);
        optionenButton.textContent = item.zeiBeginn +" bis " + item.zeiEnde;
        document.getElementById("zeitplan2").appendChild(optionenButton);
    }
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

    var tagAusschreiben = document.createElement("h5");
    var ausgeschriebenerTag= "";
    tagAusschreiben.textContent = ausgeschriebenerTag.concat(tag, "") ;
    var IDh3 = document.createElement("h6");
    IDh3.textContent = datum.toLocaleDateString();
    var vorlesungEintragen = document.createElement("button");
    vorlesungEintragen.setAttribute("class", "btn btn-outline-secondary" )
    vorlesungEintragen.textContent = "+ Neue Vorlesung";
    vorlesungEintragen.setAttribute('id', 'vorlesungEintragen1'+tag);
    tagUndDatum.appendChild(tagAusschreiben);
    tagUndDatum.appendChild(IDh3);
    tagUndDatum.appendChild(vorlesungEintragen);

    document.getElementById(ansicht.concat("ansicht", tag.toLowerCase())).appendChild(tagUndDatum);

     document.getElementById("vorlesungEintragen1"+tag).addEventListener('click', function dialogNeueListe1(){
        document.getElementById("dialog2").showModal();
        datum.setDate(datum.getDate()+1);
        window.localStorage.setItem('vorDatumEingelesen', datum.toISOString());

        document.getElementById("speichern").addEventListener('click', function() {
            var i = document.getElementById("zeitplan")[document.getElementById("zeitplan").selectedIndex].getAttribute("id")
            var fach = document.getElementById("fach").value;
        
            if  (fach=="" || i==null){
                alert("Bitte Zeit oder Fach auswählen!")
            }
            else{
                var apiUrl3 = "http://localhost:8080/Vorlesung";
                fetch(apiUrl3, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({    vorTitel: fach,
                                                vorDatum: window.localStorage.getItem('vorDatumEingelesen'),
                                                zeitraum: {
                                                    zeiId: i
                                                },
                                                nutzer: {
                                                    nutId: parseInt(window.localStorage.getItem('nutIdEingelesen'))
                                                }
                                        })
                    })
                    .catch(err => console.error(err))
                    .then (forTage)
                document.getElementById("fach").value = "";
                document.getElementById("zeitplan").selectedIndex = 0;
                window.localStorage.removeItem('vorDatumEingelesen');
                document.getElementById("dialog2").close();
                }
        })
            
        document.getElementById("abbrechen").addEventListener('click', function() {
            window.localStorage.removeItem('vorDatumEingelesen');
            document.getElementById("fach").value = "";
            document.getElementById("zeitplan").selectedIndex = 0;
            document.getElementById("dialog2").close();
        })
    });

    var vorlesungsBlock = document.createElement("div");
    vorlesungsBlock.setAttribute('id', tag + 'inhalt');

    document.getElementById(ansicht.concat("ansicht", tag.toLowerCase())).appendChild(vorlesungsBlock);

    vorlesungsListe();

    async function vorlesungsListe(){
    
        const response = await fetch('http://localhost:8080/Vorlesung/0');
        const data = await response.json();

        var abgefragteVorlesungen = [];
        for(let item of data){
            var abfrageVorlesung = new Date(item.vorDatum.substring(0,10).split("-").join(","));
            if(abfrageVorlesung.toLocaleDateString()==datum.toLocaleDateString()){
                var neueVorlesung = abgefragteVorlesungen.push(item);
            }
        }
        abgefragteVorlesungen.forEach(vorlesung =>{
            var tagInhalt = document.createElement("div");
            tagInhalt.setAttribute('class', 'taginhalt');

            var block1 = document.createElement("div");
            block1.setAttribute('class', 'einzelnevorlesung');
            block1.textContent = vorlesung.vorTitel + " bei " + vorlesung.nutzer.nutNachname;

            var block2 = document.createElement("div");
            block2.textContent = vorlesung.zeitraum.zeiBeginn + " bis " + vorlesung.zeitraum.zeiEnde;

            var vorlesungLoeschen = document.createElement("div");
            vorlesungLoeschen.setAttribute('class', 'btn-group');

            var button1234 = document.createElement("button");
            button1234.setAttribute('type', 'button');
            button1234.setAttribute('class', 'btn dropdown-toggle');
            button1234.setAttribute( 'data-toggle', 'dropdown');
            button1234.setAttribute('aria-expanded', 'false');

            var divi2 = document.createElement("div");
            divi2.setAttribute('class', 'dropdown-menu');

            var drueck = document.createElement("a");
            drueck.textContent = "Vorlesung löschen";
            drueck.setAttribute('class', 'dropdown-item');
            drueck.setAttribute('href', '#');

            var bearbeitenKnopf = document.createElement("a");
            bearbeitenKnopf.textContent = "Vorlesung bearbeiten";
            bearbeitenKnopf.setAttribute('class', 'dropdown-item');
            bearbeitenKnopf.setAttribute('href', '#');
        
            divi2.appendChild(drueck);
            divi2.appendChild(bearbeitenKnopf);
            vorlesungLoeschen.appendChild(button1234);
            vorlesungLoeschen.appendChild(divi2);
            block1.appendChild(vorlesungLoeschen);
            block1.appendChild(block2);
            tagInhalt.appendChild(block1);
            document.getElementById(tag+ "inhalt").appendChild(tagInhalt)

            drueck.addEventListener('click',function deletos()
                {
                var apiUrl2 = "http://localhost:8080/Vorlesung/" + vorlesung.vorId ;
                fetch(apiUrl2, {method: 'DELETE',
                  headers:
                    {'content-type': 'application/json'}
                  })   
                    .catch(err => console.error(err))
                    .then(forTage) 
                })
            
            bearbeitenKnopf.addEventListener('click', function bearbeitos(){
                window.localStorage.setItem('nutIdAlteEingelesen', vorlesung.nutzer.nutId);
                document.getElementById("dialog3").showModal();
                datum.setDate(datum.getDate()+1);
                window.localStorage.setItem('vorDatumEingelesen', datum.toISOString());
                document.getElementById("fach2").value = vorlesung.vorTitel;
                document.getElementById("zeitplan2").selectedIndex = vorlesung.zeitraum.zeiId;
    
                document.getElementById("abbrechen2").addEventListener('click', function() {
                    window.localStorage.removeItem('vorDatumEingelesen');
                    document.getElementById("fach2").value = "";
                    document.getElementById("zeitplan2").selectedIndex = 0;
                    document.getElementById("dialog3").close();
                })
                
                document.getElementById("speichern2").addEventListener('click', function() {

                    var j = document.getElementById("zeitplan2")[document.getElementById("zeitplan2").selectedIndex].getAttribute("id")
                    var fach2 = document.getElementById("fach2").value;
                    
                    var apiUrl4 = "http://localhost:8080/Vorlesung/" + vorlesung.vorId ;
                        fetch(apiUrl4, {method: 'DELETE',
                        headers:
                            {'content-type': 'application/json'}
                        })   
                            .catch(err => console.error(err))
                            .then(forTage)
                            .then(console.log("Hallo"))
                    
                        var apiUrl3 = "http://localhost:8080/Vorlesung";
                        fetch(apiUrl3, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({    vorTitel: fach2,
                                                        vorDatum: window.localStorage.getItem('vorDatumEingelesen'),
                                                        zeitraum: {
                                                            zeiId: j
                                                        },
                                                        nutzer: {
                                                            nutId: parseInt(window.localStorage.getItem('nutIdAlteEingelesen'))
                                                        }
                                                })
                            })
                            .catch(err => console.error(err))
                            .then(forTage)
                        document.getElementById("fach2").value = "";
                        document.getElementById("zeitplan2").selectedIndex = 0;
                        window.localStorage.removeItem('vorDatumEingelesen');
                        document.getElementById("dialog3").close();                       
                })
            })
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
    if(yearOfThursday==2010 ||yearOfThursday==2016 || yearOfThursday==2021 || yearOfThursday==2027){
        ISOweekStart.setDate(ISOweekStart.getDate()+7);
    }
    return ISOweekStart; 
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
    document.getElementsById("zurückTaste").style.display = 'none';
}



function closeNav() {
    
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("ansichtdozent").style.marginLeft= "0";
}

<<<<<<< HEAD
function closeNav2() {
    if (screen.availWidth < 600)
    {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("ansichtdozent").style.marginLeft= "0";
    }
}
=======

>>>>>>> 7ce68284ee84e6ded0be3c3d6d315485edb71c6b
