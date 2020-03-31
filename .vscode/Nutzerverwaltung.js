
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
            if(response.json()!=true){
                alert("Anmeldung Fehlgeschlagen");
            }
            else{
                
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
                
            }
        })
});


//NeuenDozentAnlegen
Vorlesungplan.getElementById("form").addEventListener('submit', function() {
    var Email = Vorlesungplan.getElementById("itemName").value;
    var Passwort = Vorlesungplan.getElementById("itemName").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    Vorlesungplan.getElementById("itemName").value = "";
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

Vorlesungplan.getElementById("SeiteDozenten").addEventListener('submit', function DozentenListe(){
    clearContent();

    var heading = document.createElement("h1");
    heading = "Dozenten";

    var ul = document.createElement("ul");
    
    nutEmail.forEach(item => 
        {

          var listItem = document.createElement("li");
          listItem.textContent = item.name;
          listItem.className = "listeneinträge";
          var Knopf = document.createElement("button");
          Knopf.textContent = "Löschen";

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
              console.log(item._id)
              console.log(listId)
              var apiUrl2 = "https://shopping-lists-api.herokuapp.com/api/v1/lists/" + listId + "/items/"+ item._id;
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
    document.getElementById("inhaltDerSeite").appendChild(ul);
});
    