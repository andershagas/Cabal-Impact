Cabal Impact
=====

Hva er Cabal Impact?
=============

Cabal Impact er en privat server som ble bygd opp fra episode 27 av [Cabal Online](https://cabal.playthisgame.com/en).
Serveren er en medium-high rate og jeg var en av two hovedutviklere for serveren.

Hva gjorde jeg?
=========

Vi brukte en CentOS server host, samt FTP server for å hente filer direkte fra server, da centOS er uhorvelig treig.

Mitt ansvar var rundt server drift og fullstack for server, å implementere nye NPC'er, objekter, sette opp dungeons, kryptering av client og par andre ting. Da jeg først startet var det veldig overveldene men jeg fikk god greie på ting etterhvert.

Vi bruker .enc krypterings verktøy med DOC nøkkel for klient kryptering og diverse filer som har kryptert data.
![image](https://user-images.githubusercontent.com/42244235/196045824-e7a5b3e4-80c5-406f-8c1e-3065091c9b99.png)

Det har også vært en del verktøy som er laget for Cabal for å komme forbi våre anti-cheats så jeg fikk oppgave med å dekryptere noen av disse verktøyene. Dog jeg lagde en http server for å hijacke requestene som dette programmet sendte for å verifisere login.

Admin Tools
=========

Vi som utviklere eller andre administratorer har noe som heter GM tool, det er et verktøy for å koble direkte til SQL serveren og lage forespørsler, for da å endre ting direkte på serveren.

Når vi skal endre på andre spillere, legge til ting til dems sine brukere eller andre administrative actions så bruker vi dette, jeg så disse verktøyene som en risiko da vi ikke hadde lagd dem, så jeg tok meg på jobben å lage dette.

![image](https://user-images.githubusercontent.com/42244235/196046394-68d0e3c2-aa7d-481d-9bac-908ed344c791.png)

![image](https://user-images.githubusercontent.com/42244235/196046296-9c935255-b433-4ac1-acd0-587bb6246c21.png)

Først så møter du dette setupet, her kan du definere egne database navn inne i SQL serveren hvis du skulle endre disse.

![image](https://user-images.githubusercontent.com/42244235/196046339-dd08ae1c-3853-43c6-8b29-66b31263b0b5.png)

Du velger også login/ip-addresse til SQL serveren, og kan lagre disse til egen config.

![image](https://user-images.githubusercontent.com/42244235/196046421-144c9cf0-75ab-458b-abcc-4b735dd286d0.png)

![image](https://user-images.githubusercontent.com/42244235/196046469-ff36a1ae-105c-4bfa-99dc-a2db63f6c99f.png)
Dette er den vi bruker mest, her kan du laste inn alt av informasjon til en spillers karakter og endre som du vil.

![image](https://user-images.githubusercontent.com/42244235/196046505-92fd0688-ee52-4c69-bbd3-46a0dbb8863f.png)
