
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

var NameAdmin = 
document.getElementById("NameNehmen").appendChild(NameAdmin)

//NeuenDozentAnlegen

document.getElementById("demo2").addEventListener('click', function() {
    var Email = document.getElementById("demo").value;
    var Passwort = document.getElementById("demo1").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    document.getElementById("demo").value = "";
    document.getElementById("demo1").value = "";
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

document.getElementById("SeiteDozenten").addEventListener('click', function DozentenListe(){
    clearContent();

    var heading = document.createElement("h1");
    heading = "Dozenten";
    
    var apiUrl = "http://localhost:8080/Nutzer/0";
    fetch(apiUrl, {Method: "GET"})
        .then(response => response.json())
        .catch(err => console.error(err))
    
    var data = response.json();

    var li = document.createElement("li");
    data.forEach(item => 
        {
          // var listItem = VorlesungplanAdmin.createElement("li");  
          var listitem = item.nutEmail;
          document.getElementById("dozenteinzeln").appendChild(listitem);
          //listItem.className = "listeneinträge";
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
         li.appendChild(listitem);
       })
   document.getElementById("ungeordneteListe").appendChild(li);
});

function clearContent()
{
   document.getElementById("ungeordneteListe").innerHTML="";
}



