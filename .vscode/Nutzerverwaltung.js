//EinloggenCheckLeiter
Vorlesungplan.getElementById("form").addEventListener('submit', function() {
    var Email = Vorlesungplan.getElementById("itemName").value;
    var Passwort = Vorlesungplan.getElementById("itemName").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    Vorlesungplan.getElementById("itemName").value = "";
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

        if (response.json()==true){
            
        }
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
        //Post statt Get mit boolean
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
});

//DozentLöschen

LoeschenKnopf.addEventListener('click',function deletos()
{
    console.log(item._id)
    console.log(listId)
    var apiUrl2 = "http://localhost:8080/Nutzer/11";
    fetch(apiUrl2, {method: 'DELETE',
      headers:
        {'content-type': 'application/json'}
      })      
        .then(response => response.json())
        .then(DozentenListe)
        .catch(err => console.error(err))
});

//ListeGenerieren

Vorlesungplan.getElementById("form").addEventListener('submit', function() {
    var item = Vorlesungplan.getElementById("itemName").value;
    Vorlesungplan.getElementById("itemName").value = "";
    var apiUrl = "http://localhost:8080/Nutzer-Login";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: item })
    })
        .then(response => response.json())
        .then(Listegenerieren)
        .catch(err => console.error(err))
});

Vorlesungplan.getElementById("").addEventListener('click',function update()
{
    var apiUrl = "arguments";
    fetch(apiUrl, {Method: "GET"})
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(Listegenerieren)
        .catch(err => console.error(err))
});
        
