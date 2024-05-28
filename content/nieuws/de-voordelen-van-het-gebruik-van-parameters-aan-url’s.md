---
title: "Callvoip Bubble: Creatief met parameters"
images:
  - /v1716898773/linkedin-popup.png
featured: false
hideinsearch: false
hideingoogle: false
hidesocialshare: false
image_uitgelicht: /v1716898773/linkedin-popup.png
hero:
  disable_image_on_mobile: false
date: 2024-05-28T08:52:16.894Z
url: /nieuws/bubble-custom-action
---
<center><img src="https://res.cloudinary.com/callvoip/image/upload/v1716898773/linkedin-popup.png"></center>

Door creatief om te gaan met aangepaste URL’s kun je (bedrijfs)processen eenvoudiger maken en versnellen. Of je nu een adres zoekt op Google Maps, een meeting plant via Google Calendar, of klantgegevens zoekt in social media, de mogelijkheden zijn eindeloos. Dit doe je door specifieke parameters aan URL's toe te voegen vanuit je eigen CRM. We vertellen je er graag meer over.

<b>Een Voorbeeld: LinkedIn Zoekopdracht</b><br>
Een van de functies die we als voorbeeld willen uitlichten, is het zoeken naar klantgegevens binnen LinkedIn, met één druk op de knop. Door klantgegevens uit een CRM-systeem zoals HubSpot te integreren in een URL, kun je snel en eenvoudig relevante profielen op LinkedIn vinden.

Een standaard link uit Linkedin ziet er zo uit:<br>
`https://www.linkedin.com/search/results/all/?keywords=`

Wanneer je handmatig zoekt op LinkedIn, voeg je de zoektermen toe aan deze URL.

Wanneer je de parameters vanuit bijvoorbeeld Hubspot zou inladen, ziet de link er als volgt uit:
`https://www.linkedin.com/search/results/all/?keywords=$hubspot_firstname%20$hubspot_lastname%20$hubspot_company_name`

Met deze URL kun je automatisch zoeken naar een persoon op LinkedIn door hun voornaam, achternaam en bedrijfsnaam uit HubSpot in te vullen.

Door de URL en de parameters te combineren in "Custom Action" van bubble kun je op een creatieve manier knoppen maken die passen bij jouw bedrijf.

<b>Andere Voorbeelden</b><br>
Naast LinkedIn zijn er tal van andere toepassingen waarbij aangepaste URL's nuttig kunnen zijn. Hier zijn enkele voorbeelden:

Google Maps: Zoek eenvoudig een bedrijfsadres in Google Maps.
Gebruik deze link om een adres te zoeken:<br>
`https://www.google.com/maps/search/?api=1&query=$crm_address`<br><br>
Of plan direct een route vanaf je bedrijfspand naar je klant met deze link:<br>
`https://www.google.com/maps/dir/?api=1&origin=EIGEN_ADRES&destination=crm_address`

Google Calendar: Maak een Google Meet aan en nodig de klant direct uit.<br>
`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting%20met%20$crm_firstname&add=$crm_email`

SMS: Stuur een sms naar het telefoonnummer van een klant*.<br>
`sms:$crm_phonenumber?body=Beste%20$crm_firstname`<br>*Hiervoor is een desktop programma nodig waarmee je een SMS kan sturen zoals [Apple Continuity](https://support.apple.com/en-us/102418) of de [Windows telefoonkoppeling](ms-windows-store://pdp/?productid=9NMPJ99VJBWV).

Google Translate: Vertaal notities naar een andere taal.<br>
`https://translate.google.com/?sl=auto&tl=en&text=$crm_notities`

<b>Zoeken op Social Media</b><br>
Voor het zoeken naar gebruikersnamen op verschillende sociale mediaplatforms kun je aangepaste URL's gebruiken zo kun je zoeken op voor en achternaam. Dit bespaart tijd en verhoogt de efficiëntie door directe toegang te bieden tot de benodigde informatie.

<b>Voordelen van Aangepaste URL's</b><br>
<div class="usp-list"><ul>
<li>Efficiënt: Snel toegang tot informatie en functionaliteiten zonder handmatige invoer.</li>
<li>Consistent: Vermindert de kans op fouten door automatische gegevensinvoer.</li>
<li>Productief: Versnelt dagelijkse taken en bespaart kostbare tijd.</li>
<li>Integratie: Naadloze integratie met verschillende CRM-systemen en andere bedrijfsapplicaties.</li>
</ul></div>

Nu hebben we hier enkele voorbeelden gegeven. Het staat je natuurlijk helemaal vrij om zelf ook URL’s te bedenken die jou nog meer kunnen helpen.

Heb je vragen of wil je meer informatie over hoe je aangepaste URL's kunt implementeren in jouw bedrijfsprocessen? Neem dan gerust contact met ons op. Wij helpen je graag verder!
