---
title: VoIP CTI aanvragen
url: "/aanvragen/voip-cti/"
hideinsearch: false
hideingoogle: false
hidesocialshare: false

---
<center><h1>(Koppeling met je CRM-pakket)</h1></center><br>
Vul het formulier in, controleer de bevestigingsmail en stuur een reply, met akkoord per mail, naar ons ter bevestiging van je opdracht.<br><br><b>CRM-integratie: probeer nu 1 week gratis!_</b><br>_ NB: testen kan als er een koppeling met jouw CRM is, dat laten we je weten!<br>

{{< form "aanvragen-voipcti" "/aanvragen/verzonden" >}}  
{{< form/template "d-bb5785f73c154508a7d4125575855140">}}  
{{< form/to "aanvragen">}}

{{< form/fieldset "Bedrijfsgegevens" >}}

{{< form/input "Bedrijfsnaam" >}}

{{< form/input "Klantnummer" required >}}

{{< form/select "Aanhef" >}}

{{< form/option "Heer" >}}

{{< form/option "Mevrouw" >}}

{{</ form/select >}}

{{< form/input "Contactpersoon" >}}

{{< form/input "Telefoonnummer" >}}

{{< form/email "Email" required >}}

{{</ form/fieldset >}}

{{< form/fieldset "Aanvraag VoIP CTI" >}}

{{< form/input "CRM-pakket" required >}}

{{< form/textarea "Opmerkingen" >}}

{{</ form/fieldset >}}

<textarea name="Users" id="users" style="width: 0;height: 0;"></textarea>

<script>
var fieldsets = document.querySelectorAll('[name="aanvragen-voipcti"] fieldset');
var fields = "<div class='bg-grey-lightest px-4 xl:px-8 py-4 xl:py-6 mb-6 rounded-lg'><div class='mb-4'><label class='block'>Voor &amp; achternaam </label><input class='w-full border border-grey-light bg-white px-3 py-2 text-base'></div><div class='mb-4'><label class='block'>E-mail adres </label><input class='w-full border border-grey-light bg-white px-3 py-2 text-base'></div><div class='mb-4'><label class='block'>Intern nummer </label><input class='w-full border border-grey-light bg-white px-3 py-2 text-base'></div><div class='mb-4'><label class='block'>Windows of Apple gebruiker </label><input class='w-full border border-grey-light bg-white px-3 py-2 text-base'></div></div>"
fieldsets[fieldsets.length - 1].insertAdjacentHTML('afterend', "<fieldset id='userfields'><legend class='mb-2 text-2xl font-semibold'>Persoonsgegevens van de gebruiker(s)</legend>" + fields + "<div class='text-center'><button class='button' type='button' onclick='addUser(this)'>Gebruiker toevoegen +</button></div></fieldset>")

function addUser(el) {
	el.parentElement.insertAdjacentHTML('beforebegin', fields)
}

document.querySelector('[name="aanvragen-voipcti"]').addEventListener("submit", function (event) {
	event.preventDefault();

	document.querySelectorAll('#userfields > .mb-6').forEach((e, i) => {
		let user = 'User ' + (i + 1) + ' \n'
		e.querySelectorAll('input').forEach(input => {
			user += input.previousElementSibling.textContent + ': ' + input.value + '\n'
		})
		document.getElementById('users').textContent += (user + '-----------------\n')
	})
	this.submit()
});
</script>

{{< form/button "Verstuur formulier" >}}

<br><br>

{{< layout/columns >}}

{{< layout/column3 >}}

**Tarief<br>Callvoip-klanten**

{{</ layout/column3 >}}

{{< layout/column3 >}}

Maandelijks

{{</ layout/column3 >}}

{{< layout/column3 >}}

Eenmalig

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Per organisatie
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 0,00 excl. BTW

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 150,00 excl. BTW

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Per gebruiker
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 5,00 excl. BTW

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 25,00 excl. BTW

{{</ layout/column3 >}}

{{</ layout/columns >}}

<br><br>

{{< layout/columns >}}

{{< layout/column3 >}}

**Tarief<br> niet-Callvoip-klanten**

{{</ layout/column3 >}}

{{< layout/column3 >}}

Maandelijks

{{</ layout/column3 >}}

{{< layout/column3 >}}

Eenmalig

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Per organisatie
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 10,00 excl. BTW

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 200,00 excl. BTW

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Per gebruiker
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 5,00 excl. BTW

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 25,00 excl. BTW

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{</ form >}}
