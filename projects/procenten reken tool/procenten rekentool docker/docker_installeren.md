## Je moet eerst WSL 2 en Docker installeren EN OOK IN DEZE VOLGORDE!

Als je een Mac hebt, moet je het installeren van WSL overslaan en moet je doorgaan met het installeren van Docker, zie hieronder.

Zorg er voor dat je andere virtuele omgevingen als XAMPP, MAMP en WAMP de-installeert.

### WSL 2 installeren:

1. open de app ‘Opdrachtprompt’ met de optie ‘Als administrator uitvoeren’ (zoek op ‘cmd’ en selecteer de app ‘Opdrachtprompt’ met de rechter muisknop)
2. tik in: `wsl --install`
en druk op ‘Enter’

LET OP: tijdens het installeren wordt er o.a. een Ubuntu Linux-distributie geinstalleerd waarbij er ook een linux-account aangemaakt wordt met gebruikersnaam (alleen kleine letters) en wachtwoord (je ziet niet wat je invoert en de cursor verplaatst zich niet); voer wat in EN ONTHOUD/BEWAAR ZE!

3. herstart de pc om de installatie af te ronden


### Docker installeren:

1. download de setup-file van de app ‘Docker Desktop’ hier (gebruik de versie van je gewone besturingssyteem, bij de meesten is dat Windows)
2. installeer Docker Desktop door de setup-file als administrator uit te voeren
3. volg de installatiewizard: accepteer de licentie, autoriseer de installer en ga door met de installatie (je hebt hier de gebruikersnaam en het wachtwoord van de Linux-installatie ook nodig?)
4. herstart de pc om de installatie te voltooien

Om te checken of alles goed gegaan is bij een Windows-installatie (bij een Mac hoeft dit niet):

1. open de app ‘Docker Desktop’
2. selecteer uit het menu: Settings > General
3. als het goed is, is de optie ‘Use WSL 2 based engine’ aangevinkt;
zo niet: doe dat en klik op 'Apply & Restart’