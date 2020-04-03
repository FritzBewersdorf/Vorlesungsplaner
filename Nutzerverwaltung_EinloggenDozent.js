//EinloggenCheckDozent
document.getElementById("buttonlos2").addEventListener('click', function() {
    var Email = document.getElementById("exampleInputEmail2").value;
    var Passwort = document.getElementById("exampleInputPassword2").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    var apiUrl = "http://localhost:8080/Nutzer-Login";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })
    })
        //.then(response => response.json())
        .catch(err => console.error(err))
        //.then(console.log(response))
        .then(response => response.text())
        .then((response)=>{
            console.log(response);
                if(response=="true"){
                    window.location.assign("VorlesungsplanDozent.html")
                }
                else{
                    alert("Anmeldung Fehlgeschlagen");
                }
        })
    document.getElementById("exampleInputEmail2").value = "";
    document.getElementById("exampleInputPassword2").value = "";
});
