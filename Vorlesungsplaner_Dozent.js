var date = new Date();
var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
var yearOfThursday = currentThursday.getFullYear();
var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

Kalenderwoche(weekNumber, yearOfThursday);

function Kalenderwoche(weekNumber, yearOfThursday){
    document.getElementById("KalenderMitmachen").innerHTML="";

    var buttonUno = document.createElement("button");
    buttonUno.setAttribute('class', 'fas fa-arrow-left');
    buttonUno.id = 'NeuerButton1';
   

    var Naaame11 = document.createElement("h4"); 
    Naaame11.textContent = "Kalenderwoche " + weekNumber;
    Naaame11.id = "idWoche";

    var buttonBeta = document.createElement("button");
    buttonBeta.setAttribute('class', 'fas fa-arrow-right');
    buttonBeta.setAttribute('id', 'NeuerButton2');
    

    document.getElementById("KalenderMitmachen").appendChild(buttonUno);
    document.getElementById("KalenderMitmachen").appendChild(Naaame11);
    document.getElementById("KalenderMitmachen").appendChild(buttonBeta);

    document.getElementById("KalenderJahr").innerHTML="";

    var buttonUno1 = document.createElement("button");
    buttonUno1.setAttribute('class', 'fas fa-arrow-left');
    buttonUno1.id = 'NeuerButton3';
    

    var Naaame12 = document.createElement("h3"); 
    Naaame12.textContent = "Jahr " + yearOfThursday;
    Naaame12.id = "idJahr";

    var buttonBeta1 = document.createElement("button");
    buttonBeta1.setAttribute('class', 'fas fa-arrow-right');
    buttonBeta1.setAttribute('id', 'NeuerButton4');
    

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

    console.log(dd);
    console.log(mm);
    console.log(yyyy);

    if (isNaN(dd)&&isNaN(dd)&&isNaN(yyyy)){
        alert("Zahlen inkorrekt")
    }
    else{
        var ZeitGesamt = new Date();
        ZeitGesamt = mm +"."+ dd +"."+ yyyy

        var ZeitEndlich = new Date(ZeitGesamt)
        console.log(ZeitEndlich)
        ZeitEndlich.setDate(ZeitEndlich.getDate()+1);

        if (isNaN(ZeitEndlich.getTime())){
            alert("Zeit nicht gültig")
        }
        else{
            var currentThursday = new Date(ZeitEndlich.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
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

    var h3geile = document.createElement("h5");
    var ausgeschriebenerTag= "";
    h3geile.textContent = ausgeschriebenerTag.concat(tag, "") ;
    var IDh3 = document.createElement("h6");
    IDh3.textContent = datum.toLocaleDateString();
    var vorlesungEintragen = document.createElement("button");
    vorlesungEintragen.setAttribute("class", "btn btn-outline-secondary" )
    vorlesungEintragen.textContent = "+ Neue Vorlesung";
    vorlesungEintragen.setAttribute('id', 'vorlesungEintragen1'+tag);
    tagUndDatum.appendChild(h3geile);
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
                    .then(forTage)
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

            if(vorlesung.nutzer.nutId==window.localStorage.getItem('nutIdEingelesen')){

                divi2.appendChild(drueck);
                divi2.appendChild(bearbeitenKnopf);
                vorlesungLoeschen.appendChild(button1234);
                vorlesungLoeschen.appendChild(divi2);
                block1.appendChild(vorlesungLoeschen);

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
                        
                        loeschen11();
                        neuhinzu();
                        
                        function neuhinzu(){
                            if (fach2=="" && j==null){
                                alert("Bitte Zeit auswählen!")
                            }
                            else{
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
                                                                    nutId: parseInt(window.localStorage.getItem('nutIdEingelesen'))
                                                                }
                                                        })
                                    })
                                    .catch(err => console.error(err))
                                    .then(forTage)
                                
                                document.getElementById("fach2").value = "";
                                document.getElementById("zeitplan2").selectedIndex = 0;
                                window.localStorage.removeItem('vorDatumEingelesen');
                                document.getElementById("dialog3").close();
                            }
                        }

                        function loeschen11(){
                            var apiUrl4 = "http://localhost:8080/Vorlesung/" + vorlesung.vorId ;
                            fetch(apiUrl4, {method: 'DELETE',
                            headers:
                                {'content-type': 'application/json'}
                            })   
                                .catch(err => console.error(err))
                        }   
                    })
                })
            }
            block1.appendChild(block2);
            tagInhalt.appendChild(block1);
            document.getElementById(tag+ "inhalt").appendChild(tagInhalt)
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

document.getElementById("auslogg").addEventListener('click', function Ausgelogge()
{
  window.localStorage.removeItem('nutIdEingelesen')
  window.location.assign("VorlesungsplanLogin.html")
});
