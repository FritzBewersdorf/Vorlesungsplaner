
//NameObenRechts
var Name123= "Fritz Bewersdorf";
Name123 = document.getElementById("NameNehmen");

//DozentenAnlegenListe
/*
document.getElementById("neuerdozent").addEventListener('click', function(){

})
*/

//NeuenDozentAnlegen

document.getElementById("Button1").addEventListener('click', function() {
    var Vorname = document.getElementById("inputEmail4").value;
    var Nachname = document.getElementById("inputPassword4").value;
    var Email = document.getElementById("exampleFormControlInput1").value;
    var Passwort = document.getElementById("inputPassword5").value;
    var staId = 2;
    //ElementeHinzufügenWiePasswortUndImBodyJSON
    console.log(JSON.stringify({
      nutVorname: Vorname, 
      nutNachname: Nachname,
      status :{staId},
      nutEmail: Email,
      nutPasswort: Passwort }));
    var apiUrl = "http://localhost:8080/Nutzer";
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nutVorname: Vorname, 
                              nutNachname: Nachname,
                              status: {
                                staId
                              },
                              nutEmail: Email,
                              nutPasswort: Passwort })
    })
        .then(response => response.json())
        .then(DozentenListe)
        console.log(response)
        .catch(err => console.error(err))
        document.getElementById("inputEmail4").value = "";
        document.getElementById("inputPassword4").value = "";
        document.getElementById("exampleFormControlInput1").value = "";
        document.getElementById("inputPassword5").value = "";
}); 


//DozentenGenerieren

var apiUrl = "http://localhost:8080/Nutzer/0";
fetch(apiUrl, {Method: "GET"})
    .then(response => response.json())
    .then(DozentenListe())
    .catch(err => console.error(err))

function DozentenListe(response){
    clearContent();

    var heading = document.createElement("h1");
    heading.textContent = "Dozenten";
    document.getElementById("dozentliste").appendChild(heading);
    console.log(heading);
    
    //console.log(response.json());
    var ul = document.createElement("ul");
    response.forEach(item => 
        {
          if(item.staId==2){
            var listitem = document.createElement("li"); 
            listitem.textContent = "Herr/Frau" + item.Nachname;
            //document.getElementById("dozenteinzeln").appendChild(listitem);
            var Knopf = document.createElement("button");
            var imageButtoncheck = new Image(15, 15);
              imageButtoncheck.src = "Trash.jpg";
              Knopf.appendChild(imageButtoncheck);

          Knopf.addEventListener('click',function deletos()
          {
              var apiUrl2 = "http://localhost:8080/Nutzer/" + item.staId ;
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
        }
        else{

        }
       })
   document.getElementById("ungeordneteListe").appendChild(ul);
};

function clearContent()
{
   document.getElementById("ungeordneteListe").innerHTML="";
}



