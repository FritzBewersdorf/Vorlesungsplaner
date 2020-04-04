
//NameObenRechts
var Name123= "Fritz Bewersdorf";
Name123 = document.getElementById("NameNehmen");

//DozentenAnlegenListe
/*
function dialogNeueListe()
{
    dialogNeueEinkaufsListe.showModal();
}
 
function listeHinzugefügt()
{
    var listId = document.getElementById("neueListenID").value;
 
    listeAnheften(listId);
    getListName(listId);
    document.getElementById("neueListenID").value = "";
    dialogNeueEinkaufsListe.close();
}
 
function getListName (id)
{
    var listId = id;
    var apiUrl = "https://shopping-lists-api.herokuapp.com/api/v1/lists/" + listId;
 
    fetch(apiUrl, {Method: "GET"})
        .then(response => response.json())
        .then(listName)
        .catch(err => console.error(err));
}
 
function listName (liste)
{    
    localStorage.setItem(liste._id, liste.name);
    
    listeAktualisieren();
}
 
function listeAbgebrochen ()
{
    dialogNeueEinkaufsListe.close();
}
 
function listeAnheften(listID)
{
    
    var apiUrl = "https://shopping-lists-api.herokuapp.com/api/v1/lists/" + listID;
 
    fetch(apiUrl, {Method: "GET"})
    .then(response => response.json())
    .then(showList)
    .catch(err => console.error(err));
    
}
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
            var listitem = document.createElement("li"); 
            listitem.textContent = "Herr/Frau " + item.nutNachname;
            listitem.setAttribute('class', 'shadow p-3 mb-5 bg-white');
            
            var divi = document.createElement("div");
            divi.setAttribute('class', 'btn-group');

            var button1234 = document.createElement("button");
            button1234.setAttribute('type', 'button');
            button1234.setAttribute('class', 'btn dropdown-toggle');
            button1234.setAttribute( 'data-toggle', 'dropdown');
            button1234.setAttribute('aria-expanded', 'false');

            var divi2 = document.createElement("div");
            divi2.setAttribute('class', 'dropdown-menu');

            var drueck = document.createElement("a");
            drueck.textContent = "Dozent löschen";
            drueck.setAttribute('class', 'dropdown-item');
            /*
            var Knopf = document.createElement("button");
            var imageButtoncheck = new Image(15, 15);
              imageButtoncheck.src = "Trash.jpg";
              Knopf.appendChild(imageButtoncheck);
            */

          drueck.addEventListener('click',function deletos()
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
          listitem.appendChild(divi);
          divi.appendChild(button1234);
          divi.appendChild(divi2);
          divi2.appendChild(drueck);
          ul.appendChild(listitem);
        }
      }
      document.getElementById("ungeordneteListe").appendChild(ul);
  };

function clearContent()
{
   document.getElementById("ungeordneteListe").innerHTML="";
}



