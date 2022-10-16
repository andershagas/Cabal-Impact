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

Vi bruker .enc krypterings verktøy med xor nøkkel for klient kryptering og diverse filer som har kryptert data.
![image](https://user-images.githubusercontent.com/42244235/196045824-e7a5b3e4-80c5-406f-8c1e-3065091c9b99.png)

Det har også vært en del verktøy som er laget for Cabal for å komme forbi våre anti-cheats så jeg fikk oppgave med å dekryptere noen av disse verktøyene. Dog jeg lagde en http server for å hijacke requestene som dette programmet sendte for å verifisere login.

![image](https://user-images.githubusercontent.com/42244235/196046963-2c6a051a-2370-4876-851d-7d29dbfb7922.png)
![image](https://user-images.githubusercontent.com/42244235/196048725-cd01931b-1b78-4bee-84c0-f8624e36fb86.png)
![image](https://user-images.githubusercontent.com/42244235/196048740-e83aa294-eacf-43d2-807f-75aea200ddef.png)
![image](https://user-images.githubusercontent.com/42244235/196048746-6d853dd2-8cc8-41b2-a70d-d82fcce9a8de.png)

![image](https://user-images.githubusercontent.com/42244235/196049103-ed613c98-1ff5-4b28-aad1-ebedb9535886.png)

I dette exploit programmet som var laget mot vår server, var det en del feller og ting vi kunne gått på.
![image](https://user-images.githubusercontent.com/42244235/196049129-7085be20-d0d6-4768-980e-97b2cd6184c7.png)
![image](https://user-images.githubusercontent.com/42244235/196049145-35d76e05-a59c-4d47-b58b-6aa34649361e.png)
Så jeg lagde min egen host for å komme forbi dems security sjekk.

![image](https://user-images.githubusercontent.com/42244235/196049168-4279e73d-2186-4f83-adf5-fdf954c85a03.png)
(Kali Linux)

Da lagde jeg et program som bruker dotnetaobscanmemory for å endre kode i "exploiten", som da sender request til MIN server som da sier tilbake at login er riktig, boom.

CABAL Crypto/Encrypto
=========

For at vi kunne lage våre filer sikrere, lagde jeg et krypterings program som vil gjøre det uendlig mye vanskeligere for andre privat servere eller ondsinnede til å ta våre elementer eller kode å bruke i dems eget spill eller server.

I en klient, har du noe som heter cabal.enc eller cabal.dec, som er kryptert og ikke kryptert.
Denne filen er den som sier hvilket våpen, bilde, effekter, og alt annet i spillet som pointer til hvilken fil i klienten.

Dette er hvordan det vanligvis ser ut som:

![image](https://user-images.githubusercontent.com/42244235/196048494-67e5daf5-4c49-4c5f-858c-de9f4c87cc80.png)

Etter kryptering, blir alle source filene til våpen osv, navngit en random string som da blir byttet ut i cabal.dec fil, som DA blir kryptert igjen over til .enc med xor koder.

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

Hva er ett av de største utfordringene med dette prosjektet?
===========

Mye. Det er mange utfordringer med en Privat Server pga. det er ikke alltid løsninger eller hjelp er å få, så du må rett og slett bare prøve til du blir gal.
Første gang jeg prøvde meg på å endre farger på ett sverd, brukte jeg flere dager fordi det var ekstremt vanskelig. All farge og bilde data er i tekst filer men må være på en veldig spesifikk måte Disse filene var .ebd, .ebm, .ebs, .edt, .efk, .efx, .egs, .els, .elt, .enh, .eps, .mfx, .tex og .win. Jeg jobbet mest med ebm, ebs, efx og eps filer da dette var "vanlige" ting for meg å sette inn i spillet eller endre på.

Noe som også tok uhorvelig lang tid var å lage en montage av alle vinger som vi har i spillet.
Disse kan du se her: https://drive.google.com/drive/folders/1cPfasKu7pjcM7aHeG4EmKaZnRcoJjjrf?usp=sharing
