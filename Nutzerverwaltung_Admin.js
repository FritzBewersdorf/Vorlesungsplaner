
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
    var Vorname = document.getElementById("formGroupExampleInput").value;
    var Nachname = document.getElementById("formGroupExampleInput1").value;
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
        .catch(err => console.error(err))
        document.getElementById("formGroupExampleInput").value = "";
        document.getElementById("formGroupExampleInput1").value = "";
        document.getElementById("exampleFormControlInput1").value = "";
        document.getElementById("inputPassword5").value = "";
        location.reload();

}); 


//DozentenGenerieren
getData();

   async function getData(){
    clearContent();
    const response = await fetch('http://localhost:8080/Nutzer/0');
    const data = await response.json();
    console.log(data);

    var ul = document.createElement("ul");
    for (item of data)
        {
          if(item.status.staId==2){
            var listitem = document.createElement("div"); 
            listitem.textContent = "Herr/Frau " + item.nutNachname;
            //document.getElementById("dozenteinzeln").appendChild(listitem);
            var Knopf = document.createElement("button");
            var imageButtoncheck = new Image(15, 15);
              imageButtoncheck.src = "Trash.jpg";
              Knopf.appendChild(imageButtoncheck);

          Knopf.addEventListener('click',function deletos()
          {
              var apiUrl2 = "http://localhost:8080/Nutzer/" + item.nutId ;
              fetch(apiUrl2, {method: 'DELETE',
                headers:
                  {'content-type': 'application/json'}
                })      
                  .then(response => response.json())
                  .catch(err => console.error(err))
                  location.reload();

          });
          listitem.appendChild(Knopf);
          ul.appendChild(listitem);
        }
        else{

        }
       }
       document.getElementById("ungeordneteListe").appendChild(ul);
      };

function clearContent()
{
   document.getElementById("ungeordneteListe").innerHTML="";
}



