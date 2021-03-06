# Vorlesungsplaner

Die Web-Applikation Vorlsungsplan entsteht im Rahmen des Fachs Fallstudie an der DHBW Stuttgart. Ziel ist es, eine Applikation zu bauen, welche es Dozenten ermöglicht ihre Vorlesungen abzuspeichern und ihren Terminplan abzurufen. Abgabedatum ist der 16.04.2020.

Die Gruppenmitglieder sind: Manuel Klinger, Fritz Bewersdorf, Tayfun Kan und Alen Arifi.

Im Ordner Fallstudioe ist der Code für das Backend enthalten. Die verwendete Technologie ist SpringBoot mit Hibernate.

Die JSON-log Datei ist zum Einspielen in INSOMNIA vorgesehen. In ihr sind alle möglichen CRUD-Befehle enthalten.

Die Datei Datenbank.txt ist zum Einspielen in DBeaver oder ein anderes Datenbankprogramm gedacht. Mit ihr lässt sich die Datenbank aufsetzen.

# Docker START

- In Terminal gehen. 
- Ordnerstruktur auswählen (In den Ordner Fallstudioe einwählen).
- docker-compose --build (Beim ersten Mal starten), danach immer nur docker-compose up -d (auch beim schließen des Terminals funktionsfähig).
- In Docker-Dashboard überprüfen ob alles gestartet wurde.
- Webanwendung starten und verwenden. 

# Quellen

- Minh, N. H. (2020, February 24): Spring Boot RESTful CRUD API. Retrieved March 1, 2020, from
https://www.codejava.net/frameworks/spring-boot/spring-boot-restful-crud-api-examples-with-mysql-database
