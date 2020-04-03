//EinloggenCheckLeiter
document.getElementById("buttonlos1").addEventListener('click', function() {
    var Email = document.getElementById("exampleInputEmail1").value;
    var Passwort = document.getElementById("exampleInputPassword1").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("bexampleInputPassword1").value = "";
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

