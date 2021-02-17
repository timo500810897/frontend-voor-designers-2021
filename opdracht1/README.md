# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).

# Project titel

https://timo500810897.github.io/frontend-voor-designers-2021/opdracht1/demo/index.html
Ik heb gekozen voor het maken van een muzieklijst waarbij je de nummers orde zelf kunt bepalen.

## interface

Ik heb als interface gekozen voor een standaard layout waarbij je een lijst met muziek ziet met de daarbij behorende album. Hierdoor wordt het voor veel gebruikers gemakkelijk te gebruiken. Hierbij kan de gebruiker gemakkelijk de nummers verplaatsen. Ik heb het minimalistisch gehouden zodat gebruikers niet worden afgeleid.

## code

Ik heb gebruik gemaakt van een div container en div'jes als li's. Met UL en LI werkte de code niet. Ik heb dit meerdere keren geprobeerd, echter wist ik toen nog niet dat ik versies moest maken. Ik heb uiteindelijk gebruik gemaakt van Sortable's js. Ik zelf veel code geprobeert en heb veel van internet gekeken en geprobeerd, maar dit was de enige die werkte. De CSS zorgt ervoor dat de lijst gecentreerd wordt. De js zorgt ervoor dat het div (li) een dropzone worden en dat ze draggable zijn. Hierdoor kan je de div's slepen en dus ook neerzetten op de plek van een andere. Hierna zorgt js er dus ook voor dat waar de div wordt gedropt de div's eromheen zich eromheen verplaatsen.
