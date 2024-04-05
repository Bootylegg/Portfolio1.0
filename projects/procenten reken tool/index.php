<!-- NEXT AND LAST STEP 
- database aanmaken met procentsommen
- de tabel met procentsommen krijg je van OSD via ItsLearning
- wat hebben we nodig:
  - een php-omgeving: XAMPP of een docker-omgeving
  (straks doe ik het nog een keer voor)
  - in onze phpMyAdmin-omgeving maken we een database aan;
  een database bestaat uit tabellen, de tabel met procentsommen gaan
  we importeren
  - we moeten onze html-file ombouwen naar een php-file
  - in die php-file moeten we aan connectie maken met de database
  - vervolgens de database met (my)SQL bevragen
  - de opgehaalde gegevens opmaken en in de HTML drukken
-->
<?php
//regel 17, 19, 23, 25 en 27 zijn standaard
include "db/dbconnection.class.php";
//maak een nieuwe instantie aan van dbconnection
$dbconnect = new dbconnection();
//bouw een sql-statement waarmee je iets uit de database haalt
$sql = "SELECT * FROM sommen";
//prepare is een method uit de PDO-class; het is een tussenstap waarmee je veiligheid inbouwt
$query = $dbconnect->prepare($sql);
//execute is ook een method uit de PDO-class, de daadwerkelijke bevraging van de database
$query->execute();
//fetchAll is een method uit de PDO: trekt alle gevraagde data uit de database en zet hem in de array $recset
$recset = $query->fetchAll();
//om de ruwe data van je database-bevraging te laten zien
echo "<pre>";
print_r($recset);
echo "</pre>";
?>



<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <!-- linker card -->
                <div class="card" style="margin-top: 200px">
                    <div class="card-header">
                      Oud
                    </div>
                    <div class="card-body">
                        Denk ook aan:<br>
                        <ul>
                            <li>zonder of exclusief BTW</li>
                            <li>zonder of exclusief korting</li>
                        </ul>
                    </div>
                    <div class="card-footer text-body-secondary">
                      <input id="inp_oud" class="form-control is-invalid" onchange="checkInformation()">
                    </div>
                  </div>
                <!-- einde linker card -->
            </div>
            <div class="col-4">
                <select id="select_soort" class="form-select mt-4 mb-3 is-invalid" onchange="checkInformation()">
                    <option value="" selected>Kies....</option>
                    <option value="1">van</option>
                    <option value="2">toename</option>
                    <option value="3">afname</option>
                  </select>
                  <div class="input-group mb-3">
                    <span class="input-group-text">Percentage</span>
                    <input id="inp_perc" type="text" class="form-control is-invalid" onchange="checkInformation()">
                    <span class="input-group-text">%</span>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">Vermenigvuldigingsfactor</span>
                    <input id="inp_factor" type="text" class="form-control" disabled>
                  </div>
                  <img src="pijlen.avif" alt="" class="img-fluid"> 
                  <div class="input-group mb-3">
                    <span class="input-group-text">Deelfactor</span>
                    <input id="inp_deler" type="text" class="form-control" disabled>
                  </div>
                  <div class="d-grid">
                    <button id="losop_btn" type="button" class="btn btn-success" disabled onClick="solveProblem()">Los op</button>
                  </div>
            </div>
            <div class="col-3">
                <!-- rechter card -->
                <div class="card" style="margin-top: 200px">
                    <div class="card-header">
                      Nieuw
                    </div>
                    <div class="card-body">
                        Denk ook aan:<br>
                        <ul>
                            <li>met of inclusief BTW</li>
                            <li>met of inclusief korting</li>
                        </ul>
                    </div>
                    <div class="card-footer text-body-secondary">
                      <input id="inp_nieuw" class="form-control is-invalid" onchange="checkInformation()">
                    </div>
                  </div>
                <!-- einde rechter card -->
            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
</html>