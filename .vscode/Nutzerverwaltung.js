
//EinloggenCheckLeiter
Vorlesungplan.getElementById("form").addEventListener('submit', function() {
    var Email = Vorlesungplan.getElementById("itemName").value;
    var Passwort = Vorlesungplan.getElementById("itemName2").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    Vorlesungplan.getElementById("itemName").value = "";
    Vorlesungplan.getElementById("itemName2").value = "";
    var apiUrl = "http://localhost:8080/Admin-Login";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })
    })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then((response)=>{
            if(response.json()==false){
                alert("Anmeldung Fehlgeschlagen");
            }
            else{
                DozentenListe();
            }
        })
            
});

//EinloggenCheckDozent
Vorlesungplan.getElementById("form").addEventListener('submit', function() {
    var Email = Vorlesungplan.getElementById("itemName").value;
    var Passwort = Vorlesungplan.getElementById("itemName").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    Vorlesungplan.getElementById("itemName").value = "";
    var apiUrl = "http://localhost:8080/Nutzer-Login";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })
    })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then((response)=>{
            if(response.json()!=true){
                alert("Anmeldung Fehlgeschlagen");
            }
            else{
                DozentenListe();
            }
        })
});

//NeueDozentAufrugEinage

VorlesungplanAdmin.getElementById("dozenthinzufügen").addEventListener('click', function(){
    var EmailEinagbe = VorlesungplanAdmin.createElement("INPUT");
    EmailEinagbe.setAttribute("type", "text");
    EmailEinagbe.setAttribute("id", "EingabeEmail");
    document.body.appendChild(EmailEinagbe);
    var PasswortEingabe = VorlesungplanAdmin.createElement("INPUT");
    PasswortEingabe.setAttribute("type", "text");
    PasswortEinagbe.setAttribute("id", "EingabePasswort");
    document.body.appendChild(PasswortEingabe);
    var ReinDa = VorlesungplanAdmin.createElement("button");
    ReinDa.textContent = "Einagabe";
    ReinDa.setAttribute("id", "ReinDa1");
    document.body.appendChild(ReinDa);
});

//NeuenDozentAnlegen
Document.getElementById("ReinDa1").addEventListener('submit', function() {
    var Email = Document.getElementById("EingabeEmail").value;
    var Passwort = Document.getElementById("EingabePasswort").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    Document.getElementById("EingabeEmail").value = "";
    Document.getElementById("EingabePasswort").value = "";
    var apiUrl = "http://localhost:8080/Nutzern";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })
    })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then(DozentenListe)
}); 

//DozentenGenerieren

Vorlesungplan.getElementById("SeiteDozenten").addEventListener('click', function DozentenListe(){
    clearContent();

    var heading = document.createElement("h1");
    heading = "Dozenten";

    var ul = document.createElement("ul");
    
    var apiUrl = "http://localhost:8080/Nutzer/0";
    fetch(apiUrl, {Method: "GET"})
        .then(response => response.json())
        .catch(err => console.error(err))

    response.json().forEach(id => 
        {

          var listItem = document.createElement("li");  
          listItem.textContent = response.json(nutEmail);
          listItem.className = "listeneinträge";
          var Knopf = document.createElement("button");
          var imageButtoncheck = new Image(15, 15);
            imageButtoncheck.src = "Trash.jpg";
            Knopf.appendChild(imageButtoncheck);

          //var Bearb = document.createElement("button");
          //Bearb.textContent = "Dozent Bearbeiten";

          /*
          var Buttoncheck = document.createElement("button");
          Buttoncheck.id = item._id;
          //Buttoncheck.textContent = "Unerledigt"
          Buttoncheck.className = "actionButtons";
          Buttoncheck.name = "Buttoncheck";
          var imageButtoncheck = new Image(15, 15);
          imageButtoncheck.src = "Ohne.png";
          Buttoncheck.appendChild(imageButtoncheck);

          var Buttonchecked = document.createElement("button");
          Buttonchecked.id = item._id;
          //Buttonchecked.textContent = "Erledigt"
          Buttonchecked.className = "actionButtons";
          Buttonchecked.name = "Buttonchecked";
          var imageButtonchecked = new Image(15, 15);
          imageButtonchecked.src = "Check.png";
          Buttonchecked.appendChild(imageButtonchecked);
          */
          
          Knopf.addEventListener('click',function deletos()
          {
              var apiUrl2 = "http://localhost:8080/Nutzer/12";
              fetch(apiUrl2, {method: 'DELETE',
                headers:
                  {'content-type': 'application/json'}
                })      
                  .then(response => response.json())
                  .then(DozentenListe)
                  .catch(err => console.error(err))
          });
          listItem.appendChild(Knopf);
          ul.appendChild(listItem);
        })
    document.getElementById("ungeordneteListe").appendChild(ul);
});

function clearContent()
{
    document.getElementById("ungeordneteListe").innerHTML="";
}



