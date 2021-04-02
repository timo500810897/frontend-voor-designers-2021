# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Beschrijf hier je eigen project.
En voeg een link naar je demo toe.

## interface
Leg de interface uit.

Door gebruik te hebben gemaakt van het simpele en duidelijke carouselprincipe is het simpel de users
in control te houden. Het is gemakkelijk te begrijpen en geeft je daardoor ook een natural next step.
Er kan door de carousel gebladerd worden door middel van de pijltjes en de bolletjes. Dit helpt ook
om appearance follows behavior te realiseren. Hierbij worden de bolletjes gekleurd om aan te geven
waar je je bevindt in de carousel. Dit wordt dubbel ook aangegeven door de 1/6 etc. boven aan de 
carousel.

Het gebruik maken van pijltjestoetsen is mij achteraf niet gelukt na veel pogingen.

## code
De carousel is opgebouwd uit containers die elkaar vervangen door het gebruik van display: block te
vervangen voor display block en andersom om ze weer te verbergen. Zo vervangen ze elkaar en met een 
lichte animatie, die bestaat uit een verandering in opacity, lijkt het als of de foto daadwerkelijk
wordt vervangen.