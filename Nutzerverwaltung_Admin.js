
//NeueDozentAufrugEinage

document.getElementById("neuerdozent").addEventListener('click', function(){
            
    var EingabeEmail = document.createElement("INPUT");
    //EmailEinagbe.setAttribute("type", "text");
    //EmailEinagbe.setAttribute("id", "EingabeEmail");
    document.getElementById("demo").appendChild(EingabeEmail);
    var PasswortEinagbe = document.createElement("INPUT");
    //PasswortEingabe.setAttribute("type", "text");
    //PasswortEinagbe.setAttribute("id", "EingabePasswort");
    document.getElementById("demo1").appendChild(PasswortEinagbe);
    var ReinDa = document.createElement("button");
    ReinDa.innerText = "Eingabe";
    document.getElementById("demo2").appendChild(ReinDa)
    document.getElementById("markup").innerText = ReinDa.outerHTML;
});

//NeuenDozentAnlegen
/*
Document.getElementById("ReinDa1").addEventListener('submit', function() {
    var Email = Document.getElementById("EingabeEmail").value;
    var Passwort = Document.getElementById("EingabePasswort").value;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    Document.getElementById("EingabeEmail").value = "";
    Document.getElementById("EingabePasswort").value = "";
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

Vorlesungplan.getElementById("SeiteDozenten").addEventListener('click', function DozentenListe(){
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
          var listItem = VorlesungplanAdmin.createElement("li");  
          listItem.textContent = "Name" + item.nutEmail;
          //listItem.className = "listeneinträge";
          var Knopf = document.createElement("button");
          var imageButtoncheck = new Image(15, 15);
            imageButtoncheck.src = "Trash.jpg";
            Knopf.appendChild(imageButtoncheck);

          //var Bearb = document.createElement("button");
          //Bearb.textContent = "Dozent Bearbeiten";

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
         listItem.appendChild(Knopf);
         ul.appendChild(listItem);
       })
   document.getElementById("ungeordneteListe").appendChild(ul);
});

function clearContent()
{
   document.getElementById("ungeordneteListe").innerHTML="";
}

*/