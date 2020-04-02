//EinloggenCheckLeiter
AdminEinloggen.getElementById("form").addEventListener('click', function() {
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
        //.then(response => response.json())
        .catch(err => console.error(err))
        .then((response)=>{
            if(response==false){
                alert("Anmeldung Fehlgeschlagen");
            }
            else{
                window.document.location.href = "VorlesungsplanAdmin.html";
            }
        })    
});

//VonAdminZuDozent
AdminEinloggen.getElementById("wechseln").addEventListener('click', function(){
    window.document.location.href = "DozentEinloggen.html";
});

