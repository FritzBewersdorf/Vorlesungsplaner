//EinloggenCheckLeiter
document.getElementById("buttonlos1").addEventListener('click', function(){
    var Email = document.getElementById("exampleInputEmail1").value;
    var Passwort = document.getElementById("exampleInputPassword1").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON

    var apiUrl = "http://localhost:8080/Admin-Login";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })    
    })
        .catch(err => console.error(err))
        .then(response => response.text())
        .then((response)=>{
                if(response=="true"){
                    var apiUrl2 = "http://localhost:8080/Nutzer-Id";
                    fetch(apiUrl2, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ nutEmail: Email, nutPasswort: Passwort })    
                    })
                        .catch(err => console.error(err)) 
                        .then(response => response.text())
                        .then(response => {
                            console.log(response);
                            window.localStorage.setItem('nutIdEingelesen', response);
                            window.location.assign("VorlesungsplanAdmin.html")
                        })
                }
                else{
                    alert("Anmeldung Fehlgeschlagen");
                }
        })  
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputPassword1").value = ""; 
});
