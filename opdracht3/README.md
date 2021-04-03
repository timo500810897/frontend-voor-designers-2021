# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Ik heb the cat api gebruikt. Deze api is eigenlijk een JSON-file waarbij er ontzettend veel informatie
te vinden is over veel verschillende kattensoorten. Hierbij heb ik een generator gemaakt waar je random
katten kunt genereren en ook foto's kunt bekijken per soort kat.
https://timo500810897.github.io/frontend-voor-designers-2021/opdracht3/opdracht3/cats.html

## interface
Door alleen gebruik te hebben gemaakt van een menu en een knop houdt ik users in control doordat het
een simpele taak is en je leuk resultaat krijgt. Dit wordt ook aangevuld met dat het precies doet wat
je ziet en daarom volgt het dus ook appearance follows behavior. Het enige wat niet lukt was dat als
je op een soort kat klikt in het menu dat deze gelijk verschijnt. Hiervoor moet eerst een keer op 
Generate Cats! gedrukt worden. De natuurlijke volgende stap zal voor de gebruiker zijn dat hij/zij op
Generate Cats! kan blijven klikken en het menu uit kan proberen. Door het zo simpel te houden is het
een website die jouw als gebruiker redelijk kan vermaken zonder veel moeite.

Op de website zijn voornamelijk click events gebruikt aangezien er gebruik wordt gemaakt van een button
om nieuwe foto's te laden.

Ik heb een empty state gemaakt bij het startscherm door een input foto te doen van een geïllustreerde
kat en door een mini tutorial te geven aan de onderkant van de pagina. Deze verdwijnen beide na het
drukken op de knap.

Ik heb bij het laden van de eerste foto ervoor gezorgd dat de geïllustreerde kat verdwijnt en deze
wordt vervangen door de eerste foto. Hierdoor zie je een wit vlak ontstaan en zie je best wel duidelijk
dat er iets aan het laden is. Dit is de loading state.


## code
De html bestaat uit een een titel, een ul (de breeds), een img, een button en een p. De p is een kleine
tutorial die verdwijnt door de display hidden te maken bij het indrukken van de knop. Dit gebeurt in JS
en dit is ook toegepast op de geïllustreerde kat die de plek waar de foto's komen warmhoudt. De katten
worden vanuit de JSON geladen aangezien er per breed meerdere foto's zijn. Voor het selecteren van een
breed is er geen id geladen dus is elke breed te zien, dus krijg je een random kat. Als je een breed
selecteerd wordt het id in de url gestopt van de JSON en wordt dus enkel die kat laten zien.
