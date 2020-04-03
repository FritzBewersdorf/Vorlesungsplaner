//EinloggenCheckLeiter
document.getElementById("buttonlos1").addEventListener('click', function(){
    var Email = document.getElementById("exampleInputEmail1").value;
    var Passwort = document.getElementById("exampleInputPassword1").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    var apiUrl = "http://localhost:8080/Admin-Login";
    console.log(JSON.stringify({ nutEmail: Email, nutPasswort: Passwort }) );
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })    
    })
        .catch(err => console.error(err))
        //.then(console.log(response))
        .then(response => response.text())
        .then((response)=>{
            console.log(response);
                if(response=="true"){
                    window.location.assign("VorlesungsplanAdmin.html")
                }
                else{
                    alert("Anmeldung Fehlgeschlagen");
                }
        })  
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputPassword1").value = ""; 
});

