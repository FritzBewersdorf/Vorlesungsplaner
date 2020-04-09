
//DozentenAnlegenListe

document.getElementById("testButton").addEventListener('click', function dialogNeueListe()
{
    document.getElementById("Dialog1").showModal();
});
 
document.getElementById("Button2").addEventListener('click', function listeAbgebrochen ()
{
  document.getElementById("Dialog1").close();
});

document.getElementById("auslogg").addEventListener('click', function Ausgelogge()
{
  window.location.assign("VorlesungsplanLogin.html")
});


//NeuenDozentAnlegen

document.getElementById("Button1").addEventListener('click', function() {
    var Vorname = document.getElementById("formGroupExampleInput").value;
    var Nachname = document.getElementById("formGroupExampleInput1").value;
    var Email = document.getElementById("exampleFormControlInput1").value;
    var Passwort = document.getElementById("inputPassword5").value;
    var staId = 2;
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
        //.then(response => response.json())
        .then(getData)
        .catch(err => console.error(err))

        document.getElementById("Dialog1").close();

        Vorname = document.getElementById("formGroupExampleInput").value = "";
        Nachname = document.getElementById("formGroupExampleInput1").value = "";
        Email = document.getElementById("exampleFormControlInput1").value = "";
        Passwort = document.getElementById("inputPassword5").value = "";
}); 

//DozentenGenerieren
getData();

  async function getData(){
    document.getElementById("dozentliste").innerHTML="";

    const response = await fetch('http://localhost:8080/Nutzer/0');
    const data = await response.json();
    console.log(data);

    

    var ul = document.createElement("ul");
    
        for (let item of data) {
          if (item.status.staId==2)
            {
              var listitem = document.createElement("li"); 
              listitem.setAttribute('class', 'shadow p-3 mb-5 bg-white');

              var Naaame = document.createElement("h3"); 
              Naaame.textContent = "Herr/Frau " + item.nutNachname;
              
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
              drueck.setAttribute('href', '#');

              listitem.appendChild(Naaame);
              Naaame.appendChild(divi);
              divi.appendChild(button1234);
              divi.appendChild(divi2);
              divi2.appendChild(drueck);
              ul.appendChild(listitem); 

              drueck.addEventListener('click',function deletos()
                {
                var apiUrl2 = "http://localhost:8080/Nutzer/" + item.nutId ;
                fetch(apiUrl2, {method: 'DELETE',
                  headers:
                    {'content-type': 'application/json'}
                  })   
                    //.then(response => response.json())
                    .then(getData)
                    .catch(err => console.error(err))
                }); 
          }     
      document.getElementById("dozentliste").appendChild(ul);
  }
}



