---
title: De Voordelen van het Gebruik van Parameters aan URL’s
featured: false
hideinsearch: false
hideingoogle: false
hidesocialshare: false
hero:
  disable_image_on_mobile: false
date: 
url: /nieuws/bubble-custom-action

---

Door creatief om te gaan met aangepaste URL’s kun je (bedrijfs)processen eenvoudiger maken en versnellen. Of je nu een adres zoekt op Google Maps, een meeting plant via Google Calendar, of klantgegevens zoekt in social media, de mogelijkheden zijn eindeloos. Dit doe je door specifieke parameters aan URL's toe te voegen vanuit je eigen CRM. We vertellen je er graag meer over.\
\
<b>Een Voorbeeld: LinkedIn Zoekopdracht</b> \
\
Een van de functies die we als voorbeeld willen uitlichten, is het zoeken naar klantgegevens binnen LinkedIn, met één druk op de knop. Door klantgegevens uit een CRM-systeem zoals HubSpot te integreren in een URL, kun je snel en eenvoudig relevante profielen op LinkedIn vinden.\
\
Een standaard link uit Linkedin ziet er zo uit: <br><https://www.linkedin.com/search/results/all/?keywords=>\
\
Om er vervolgens een zoekopdracht achter te zien, wanneer je handmatig zoekt op linkedin.\
\
Wanneer je de parameters vanuit bijvoorbeeld Hubspot zou inladen, ziet de link er als volgt uit:\
\
<https://www.linkedin.com/search/results/all/?keywords=$hubspot_firstname%20$hubspot_lastname%20$hubspot_company_name>\
\
Met deze URL kun je automatisch zoeken naar een persoon op LinkedIn door hun voornaam, achternaam en bedrijfsnaam uit HubSpot in te vullen.\
\
Door de URL en de paramaters te combineren in "Custom Action" van bubble kun je op een creatieve manier knoppen maken die passen bij jouw bedrijf.\
\
<b>Andere Voorbeelden</b>\
\
Naast LinkedIn zijn er tal van andere toepassingen waarbij aangepaste URL's nuttig kunnen zijn. Hier zijn enkele voorbeelden:\
\
Google Maps: Zoek eenvoudig een bedrijfsadres in Google Maps.<br>
Gebruik deze link om een adres te zoeken: https://www.google.com/maps/search/?api=1&query=$crm_address<br>
Of plan direct een route vanaf je bedrijfspand naar je klant met deze link: https://www.google.com/maps/dir/?api=1&origin=EIGEN_ADRES&destination=crm_address.
\
Google Calendar: Maak een Google Meet aan en nodig de klant direct uit.\
<https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting%20met%20$crm_firstname&add=$crm_email>\
\
SMS: Stuur een sms naar het telefoonnummer van een klant.\
Hiervoor is een desktop programma nodig waarmee je een SMS kan sturen zoals [Apple Continuity](https://support.apple.com/en-us/102418) of de [Windows telefoonkoppeling](ms-windows-store://pdp/?productid=9NMPJ99VJBWV).\
sms:$crm_phonenumber?body=Beste%20$crm_firstname\
\
Google Translate: Vertaal notities naar een andere taal.\
<https://translate.google.com/?sl=auto&tl=en&text=$crm_notities>\
\
Zoeken op Social Media\
\
Voor het zoeken naar gebruikersnamen op verschillende sociale mediaplatforms kun je aangepaste URL's gebruiken zoals hierboven beschreven staan. Dit bespaart tijd en verhoogt de efficiëntie door directe toegang te bieden tot de benodigde informatie.\
\
Voordelen van Aangepaste URL's\
\
Efficiënt: Snel toegang tot informatie en functionaliteiten zonder handmatige invoer.\
Consistent: Vermindert de kans op fouten door automatische gegevensinvoer.\
Productief: Versnelt dagelijkse taken en bespaart kostbare tijd.\
Integratie: Naadloze integratie met verschillende CRM-systemen en andere bedrijfsapplicaties.\
\
Nu hebben we hier enkele voorbeelden gegeven. Het staat je natuurlijk helemaal vrij om zelf ook URL’s te bedenken die jou nog meer kunnen helpen.\
\
Heb je vragen of wil je meer informatie over hoe je aangepaste URL's kunt implementeren in jouw bedrijfsprocessen? Neem dan gerust contact met ons op. Wij helpen je graag verder!
