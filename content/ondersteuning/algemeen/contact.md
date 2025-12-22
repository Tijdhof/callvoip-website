---
title: Contact
url: "/contact/"
weight: 3
onderdelen:
- Algemeen
description: Neem hier contact op met Team Callvoip en wij staan direct paraat met passend advies op jouw vragen. Callvoip, Koldingweg 19 -1, 9723 HL Groningen

---
<br>

{{< layout/columns >}}
{{< layout/column2 >}}
**Openingstijden** <br> Callvoip is op werkdagen geopend vanaf 08:30 tot 17:30.
{{</ layout/column2 >}}
{{< layout/column2 >}}
**Contactgegevens** <br> Telefoonnummer: [050-820 00 00](tel:+31508200000) <br> Email: [callvoip@callvoip.nl](https://www.callvoiptelefonie.nl/contact/contactgegevens/)
{{</ layout/column2 >}}
{{</ layout/columns >}}

<br>

{{< layout/columns >}}
{{< layout/column2 >}}
**Adresgegevens** <br>
Callvoip, Koldingweg 19 -1, 9723 HL Groningen
{{</ layout/column2 >}}
{{< layout/column2 >}}
**Overige informatie**
<br>IBAN: NL35RABO 0329402501 <br> KvK Groningen: 02066541 <br> BTW: NL1041.63.252.B01 <br>
{{</ layout/column2 >}}
{{</ layout/columns >}}<br>

<form class="mb-6" name="contactformulier" action="/contact/verzonden" accept-charset="UTF-8" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
  
  <input type="hidden" name="form-name" value="contactformulier">
  
  <p class="hidden">
    <label>Don’t fill this out if human <input name="bot-field"></label>
  </p>

  <p><input type="hidden" id="formlayout" name="formlayout" value="d-126942c712c44ec98eb3f158d6b2c826" class="hidden"></p>
  <p><input type="hidden" id="formto" name="formto" value="aanvragen" class="hidden"></p>

  <div class="layout-split">
    <div class="mb-4">
      <label for="voornaam" class="block">Voornaam</label>
      <input type="text" id="voornaam" name="voornaam" class="w-full border border-grey-light bg-white px-3 py-2 text-base">
    </div>

    <div class="mb-4">
      <label for="achternaam" class="block">Achternaam</label>
      <input type="text" id="achternaam" name="achternaam" class="w-full border border-grey-light bg-white px-3 py-2 text-base">
    </div>
  </div>

  <div class="mb-4">
    <label for="bedrijfsnaam" class="block">Bedrijfsnaam</label>
    <input type="text" id="bedrijfsnaam" name="bedrijfsnaam" class="w-full border border-grey-light bg-white px-3 py-2 text-base">
  </div>

  <div class="layout-split">
    <div class="mb-4">
      <label for="email" class="block">Email <span class="text-red">*</span></label>
      <input type="email" id="email" name="email" required class="w-full border border-grey-light bg-white px-3 py-2 text-base">
    </div>

    <div class="mb-4">
      <label for="telefoonnummer" class="block">Telefoonnummer</label>
      <input type="text" id="telefoonnummer" name="telefoonnummer" class="w-full border border-grey-light bg-white px-3 py-2 text-base">
    </div>
  </div>

  <div class="mb-4">
    <label for="vraag" class="block">Uw vraag/opmerking</label>
    <textarea id="vraag" name="vraag" class="w-full border border-grey-light bg-white px-3 py-2 text-base"></textarea>
  </div>

  <div class="mb-4" data-netlify-recaptcha="true"></div>

  <p><button type="submit" class="button">Verstuur formulier</button></p>
</form>

