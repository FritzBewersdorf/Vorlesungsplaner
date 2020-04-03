
//NeueDozentAufrugEinage
/*
document.getElementById("neuerdozent").addEventListener('click', function(){
            
    var EingabeEmail = document.createElement("INPUT");
    document.getElementById("demo").appendChild(EingabeEmail);
    
    var PasswortEinagbe = document.createElement("INPUT");
    document.getElementById("demo1").appendChild(PasswortEinagbe);

    var ReinDa = document.createElement("button");
    ReinDa.innerText = "Eingabe";
    document.getElementById("demo2").appendChild(ReinDa)
    ReinDa.onclick = function(){
        
    };
});
*/

//ObenNameAnzeigen

//var NameAdmin = item.Email;
//document.getElementById("NameNehmen").appendChild(NameAdmin);

//NeuenDozentAnlegen

document.getElementById("Button1").addEventListener('click', function() {
    var Vorname = document.getElementById("inputEmail4").value;
    var Nachname = document.getElementById("inputPassword4").value;
    var Email = document.getElementById("exampleFormControlInput1").value;
    var Passwort = document.getElementById("inputPassword5").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    var apiUrl = "http://localhost:8080/Nutzern";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nutVorname: Vorname, 
                              nutNachname: Nachname,
                              nutEmail: Email,
                              nutPasswort: Passwort })
    })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then(DozentenListe)
    document.getElementById("inputEmail4").value = "";
    document.getElementById("inputPassword4").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("inputPassword5").value = "";
}); 


//DozentenGenerieren

document.getElementById("SeiteDozenten").addEventListener('click', function DozentenListe(){
    clearContent();

    var heading = document.createElement("h1");
    heading = "Dozenten";
    
    var apiUrl = "http://localhost:8080/Nutzer/0";
    fetch(apiUrl, {Method: "GET"})
        .then(response => response.json())
        .catch(err => console.error(err))
    
    var data = response.json();

    var ul = document.createElement("ul");
    data.forEach(item => 
        {
          var listitem = document.createElement("li"); 
          listitem.textContent = item.Email;
          //document.getElementById("dozenteinzeln").appendChild(listitem);
          var Knopf = document.createElement("button");
          var imageButtoncheck = new Image(15, 15);
            imageButtoncheck.src = "Trash.jpg";
            Knopf.appendChild(imageButtoncheck);

         Knopf.addEventListener('click',function deletos()
         {
             var apiUrl2 = "http://localhost:8080/Nutzer/12" ;
             fetch(apiUrl2, {method: 'DELETE',
               headers:
                 {'content-type': 'application/json'}
               })      
                 .then(response => response.json())
                 .then(DozentenListe)
                 .catch(err => console.error(err))
         });
         listitem.appendChild(Knopf);
         ul.appendChild(listitem);
       })
   document.getElementById("ungeordneteListe").appendChild(ul);
});

function clearContent()
{
   document.getElementById("ungeordneteListe").innerHTML="";
}



