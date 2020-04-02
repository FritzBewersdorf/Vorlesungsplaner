//EinloggenCheckLeiter
document.getElementById("form").addEventListener('click', function() {
    var Email = document.getElementById("itemName").value;
    var Passwort = document.getElementById("itemName2").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    document.getElementById("itemName").value = "";
    document.getElementById("itemName2").value = "";
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
        .then(console.log(response))
        .then((response)=>{
            if(response==false){
                alert("Anmeldung Fehlgeschlagen");
            }
            else{
                window.location.assign("VorlesungsplanAdmin.html")
            }
        })    
});

