## myfirstdockerproject met Apache, php, MySQL en phpMyAdmin
Met deze code kun je een redelijk eenvoudige Docker-container aanmaken met de volgende functionaliteiten:
- apache webserver met de recentste versie van php 8
- mysql-database server met MySQLi- en PDO-extensie
- phpMyAdmin

Als je meerdere versies van deze container wilt maken, dan moet je per versie de volgende namen in de file 'docker-compose.yml' aanpassen:
1. php-environment: container_name (regel 4)
2. db: container_name (regel 15)
3. phpmyadmin: container_name (regel 27)

De map waarin de file 'docker-compose.yml' staat moet je ook nog hernoemen, dat wordt namelijk ook de naam van de container.
In de files ***dbconnection.class.php*** en ***dbmysqli.php*** moet je bij 'host' de naam van de db-container_name (zie punt 2. hierboven) opgeven.

## Wat je er bij krijgt
De map ***htdocs*** is de root van je webserver; in deze map zit 'als service van de zaak':
- ***index.php*** is een eenvoudig contactformulier
- ***index2.php*** geeft de output-array bij `SELECT * FROM users` request op de database
- ***info.php*** geeft de php-configuratie weer (je kunt kijken of je misschien iets mist)
- ***insert.php*** verwerkt het contactformulier
- de map ***db*** bevat:
  - de nodige ínstellingen om de database te kunnen bevragen met PDO (***dbconnection.class.php***) of msqli (***dbmysqli.php***); de parameters zijn overgenomen uit de ***docker-compose.yml***-file die leidend is
  - de sql-statements die nodig zijn om bij `docker-compose up` de tabel users in de database te vullen met wat data (***init.sql***)

## Hoe te gebruiken
* download de code via de zip-file
* pak de zip-file uit en hernoem de map waarin de file ***docker-compose.yml*** en de map ***htdocs*** zitten; dat wordt de naam van de Docker-container, bijv. ***portfolio_project***
* open de map ***portfolio_project*** in je favoriete IDE, bijv. VSC of phpStorm
* open de terminal en geef het commando `docker-compose up` [de terminal MOET geopend zijn in de map ***portfolio_project***]

LET OP: de Docker-container met de naam ***portfolio_project*** wordt aangemaakt, dat duurt even. In Dcoker Desktop zie je nu een container die groen is, d.w.z. dat hij 'draait', de webserver is 'up and running'.

* de map ***htdocs*** is de root van je website, dus als je in Docker Desktop bij de 'php-apache'-image op de '8000.80'-link klikt, gaat je webbrowser op je virtuele-Docker-webserver op zoek naar de index-file ('index.html' of 'index.php') in de 'htdocs'-map; als je niks wilt met de files in deze map, gooi je ze weg en maak je je eigen files, waarvan er 1 een index-file is
* wil je gebruik maken van de database, dan kun je de db-map laten staan met 1 van de 2 connectie-files, afhankelijk van of je gebruik wilt maken van PDO of mysqli

LET OP: in de files ***dbconnection.class.php*** en ***dbmysqli.php*** moet bij '$host' de naam van de db-container staan.

* m.b.v. 'phpMyAdmin' kun je nieuwe databases met tabellen en velden aanmaken
* de files die je sowieso weg kunt gooien als je de container draaiende hebt, zijn: ***docker-compose.yml***, ***Dockerfile*** in de map 'htdocs' en ***init.sql*** in de map 'db'

LET OP: als je helemaal niet met een database wilt werken, kun je de images 'db'en 'phpmydamin' ook weggooien in Docker Desktop.