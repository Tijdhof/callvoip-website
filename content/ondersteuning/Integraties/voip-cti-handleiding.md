---
title: Handleiding CRM-integratie (VoIP-CTI)
weight: 
description: ''
images: []
pdf: http://www.simmpl.nl/downloads/Simmpl_handleiding_bij_VoIP-CTI_CRM-koppelingen.pdf
hideinsearch: false
Nieuw: false
Update: false

---
<h3>Download VoIP CTI software:</h3>

* [VoIP CTI Client Software (Versie 20-12-2019)](http://files.callvoip.nl/downloads/voipcticlientsetup.exe)
* [VoIP CTI Recognition Configuration Tool] (Versie 24-12-2019)](http://files.callvoip.nl/downloads/voipcticonfigurationsetup.exe)
<h3>Wat is VoIP CTI?</h3>

Met VoIP CTI (= Computer Telephony Integration) verbindt u de Simmpl telefooncentrale met uw klantsysteem (**CRM-, ERP- of administratiepakketten**). Dit biedt gemak en bespaart tijd bij het bellen naar klanten (Click-to-Dial), en als de klant u belt verschijnt een **pop-up met klantinformatie op uw scherm**. Klik op de pop-up en de klantenkaart in uw CRM pakket wordt geopend.

<h3>Wat is er nodig voor VoIP CTI?</h3>

Voor VoIP CTI heeft u nodig:

* een Windows-PC of Server (aan Apple-mogelijkheden wordt gewerkt)
* uw CRM-pakket: zie onderaan deze pagina en/of neem contact met ons op
* de Simmpl telefooncentrale met VoIP CTI licentie per gebruiker

Voor veel pakketten is de installatie eenvoudig: installeer de Client software per gebruiker en gebruik de configuratiesoftware om de koppeling tot stand te brengen.

<h3>De voordelen op een rij</h3>

* **Efficiënt**: zet heel eenvoudig een gesprek op door op het nummer te klikken
* **Klantvriendelijk**: u weet wie u aan de lijn hebt en kan de klant snel en efficiënt helpen
* **Werknemerstevredenheid**: werkt gemakkelijker, geen verkeerde nummers meer!
* **Uitgebreide koppeling**: koppelt met veel populaire CRM-, ERP- en administratiepakketten

Kortom: VoIP CTI is een mooie uitbreiding van uw telefonie én de basis voor nóg efficiënt werken!

![](https://res.cloudinary.com/callvoip/image/upload/v1566224907/voipcti-1_ntzwi9.png)

<h3>Simmpl en uw CRM koppelen: een stappenplan</h3>

Het koppelen van de VoIP CTI omvat de volgende vier stappen.

<h3>Stap 1: Maak de API aan op de Simmpl centrale</h3>

De eerste stap is het aanmaken van een API koppeling op de Simmpl centrale.  
Dit is een éénmalige stap die u bij de start doet.  
Log in op Simmpl en volg de volgende stappen:

1. Kies menu \[**Instellingen**\]
2. Kies bovenaan tabblad \[**API**\] en op \[**Toevoegen**\]
3. Vul een naam in en onderaan de pagina vult u de volgende doorschakel URL in: https://www.cloudcti.nl/webapi/oauth2
4. Kopieer nu de Client ID en Client Secret en sla deze op. De Client Secret wordt één keer weergegeven en deze heeft u later weer nodig.

Bewaar de Secret goed. Mocht u naderhand een nieuwe gebruiker willen toevoegen en heeft u de Secret niet meer, maak dan een nieuwe API aan.

![](https://res.cloudinary.com/callvoip/image/upload/v1566225169/voipcti-2_dbqrro.png)

<h3>Stap 2: Installeer en configureer de Client Software (per gebruiker)</h3>

Voor elke gebruiker die de koppeling gaat gebruiken is er de client software die je downloadt, installeert, koppelt met de aangemaakte API (zie stap 1) en waarop je je als Simmpl gebruiker aanmeldt met je Simmpl gebruikersnaam en wachtwoord.

Download <a href="http://www.simmpl.nl/downloads/VoipCTIClientSetup.exe" target="_blank">hier</a> de VoIP CTI Client software en installeer deze.

Open de client software en log in met de door CallvoipTelefonie verstrekte **authenticatiegegevens** behorend bij uw licentie.  
Formaat: xxx@yyy en wachtwoord

Klik op \[**Telefonie verbinding**\] en vervolgens op \[**Instellingen**\].  
Voer nu de Client ID en Client Secret in die u heeft verkregen bij het aanmaken van de API.

![](https://res.cloudinary.com/callvoip/image/upload/v1566225429/voipcti-3_sgykr4.png)

<h3>Stap 3: Gebruiker koppelen (per gebruiker)</h3>

Als u de API-gegevens heeft ingevoerd, klik op \[**TOEPASSEN**\].

U krijgt u een pop-up te zien: hier vult u de gebruikersnaam en wachtwoord in van de Simmpl gebruiker. De telefoon van deze gebruiker zal worden gekoppeld met de click to dial en CRM koppeling.  
Deze gebruikersnaam en wachtwoord treft u in de telefooncentrale onder \[**Gebruikers**\] en vervolgens klikt u op \[**Bewerk gebruiker**\].

Vul de gegevens in en klik op **INLOGGEN**:

![](https://res.cloudinary.com/callvoip/image/upload/v1566225603/voipcti-4_xbx9l6.png)

<h3>Stap 4: Koppel uw CRM-systeem (éénmalig per organisatie/CRM pakket)</h3>

U kunt nu voor alle gebruikers in één keer een CRM systeem koppelen.  
Hiertoe download en installeert u de <a href="http://www.simmpl.nl/downloads/VoipCTIRecognitionConfigToolSetup.exe" target="_blank">VoIP CTI configurator</a> \[**Recognition Configuration Tool**\].

Log in met de door CallvoipTelefonie verstrekte **authenticatiegegevens** behorend bij uw licentie.  
Formaat: xxx@yyy en wachtwoord (zie ook stap 2)

![](https://res.cloudinary.com/callvoip/image/upload/v1566225842/voipcti-5_wp4zfl.png)

Klik links in het menu op \[**Applicatie Toevoegen**\] en selecteer in de lijst met iconen uw CRM systeem. Volg de verdere instructies.  
**TIP**: klik op het PDF document bovenaan voor gedetailleerde instructies.

Na het selecteren kunt u de API gegevens uit uw CRM systeem invoeren om deze te koppelen.  
Na het succesvol koppelen van het systeem is deze automatisch beschikbaar voor alle gebruikers.

<h3>Gebruikerstips en veelgestelde vragen</h3>

Q: **Ik krijg geen popups, hoe kan ik deze inschakelen?**

A: Als u geheel geen popups krijgt, check dan of het tonen van Popups in Windows is uitgeschakeld. Klik rechtsonder in uw beeldscherm op Windows meldingen icoon en klik dan onderaan op het icoon ALLE INSTELLINGEN en kies SYSTEEM:

![](https://res.cloudinary.com/callvoip/image/upload/v1566290356/voipcti-6_jva3d8.png)

IN menu SYSTEEM, kies links: MELDINGEN EN ACTIES.  
Controleer hier of de meldingen aanstaan. Zo niet, zet deze aan en test opnieuw.

![](https://res.cloudinary.com/callvoip/image/upload/v1566290445/voipcti-7_actkhf.png)

Heeft u nog steeds geen popups? Er kunnen andere redenen zijn dat u deze niet krijgt.  Raadpleeg uw systeembeheerder voor assistentie, mogelijk is het in de permissies van een gebruikersgroep in Windows op een hoger niveau uitgeschakeld.

Q: **Kan ik de popup ook langer in beeld laten verschijnen?**

A: Ja, dat kunt u als volgt instellen:  
Ga naar Windows Meldingen, kies ALLE INSTELLINGEN en kies vervolgens TOEGANKELIJKHEID

![](https://res.cloudinary.com/callvoip/image/upload/v1566290584/voipcti-8_jvki1l.png)

Zoek hier naar BEELDSCHERM, hier kunt u instellen hoe lang popups zichtbaar zijn:

![](https://res.cloudinary.com/callvoip/image/upload/v1566290692/voipcti-9_svbfqy.png)

Q: **Hoe kan ik de laatste popup opnieuw oproepen?**

A: Dat kunt u als volgt instellen:  
Rechtsonder ziet u het Windows Meldingen icoon en links daarvan een aantal andere iconen.  Klik vlak daarvoor in de taakbalk op de RECHTER muisknop. U krijgt een menu:

![](https://res.cloudinary.com/callvoip/image/upload/v1566290784/voipcti-10_grvlo0.png)

Kies in dit menu de onderste optie: TAAKBALKINSTELLINGEN.  
In het venster dat nu verschijnt scrolt u naar beneden totdat u ziet: SYSTEEMVAK.  
Klik op de regel eronder: \[**Selecteren … weergegeven**\]

![](https://res.cloudinary.com/callvoip/image/upload/v1566290880/voipcti-11_ax9r7p.png)

Zoek dan VoIP CTI in de lijst en zet deze op \[**AAN**\].

![](https://res.cloudinary.com/callvoip/image/upload/v1566290950/voipcti-12_sx2ntr.png)

Het VoIP CTI icoon staat er nu los bij, onderin de taakbalk.  
Klik op het icoon om de laatste popup opnieuw op te tonen.

![](https://res.cloudinary.com/callvoip/image/upload/v1566291020/voipcti-13_q7ftc7.png)

Q: **Kan ik eerdere popups ook opnieuw oproepen?**

A: Nee, u kunt alleen de laatste popup opnieuw tonen.

<h3>Uw telefonie integreren met: …….  wat zijn de mogelijkheden?</h3>

Hoe efficiënt wilt u het hebben? Koppel uw telefoonsysteem met andere applicaties.  
De Simmpl telefooncentrale van CallvoipTelefonie is klaar om te koppelen!

U weet het: we houden het graag Simmpl! En daarom ontwikkelden we een koppeling die een basisintegratie biedt: een app voor de Chrome Browser met een click to dial, een gesprekslog en een bedrijfstelefoonboek. Deze app is voor u als Simmpl klant kostenloos.

Wilt u meer? Dan is er VoIP CTI: een kant-en-klare koppelingsmogelijikheid met een grote keur aan CRM en ERP-pakketten. Deze biedt u een specifiekere koppeling dan de click to dial.

Wilt u nóg meer? De Realtime API van de Simmpl-centrale maakt het mogelijk om een eigen maatwerkkoppeling te laten ontwikkelen. Desgewenst brengen wij u in contact met deskundige programmeurs die de kunst van programmeren verstaan én de Simmpl API kennen.

Hieronder een overzicht.

![](https://res.cloudinary.com/callvoip/image/upload/v1566291307/voipcti-14_qzv2pd.png)

<h3>Grafische uitwerking van de VoIP CTI koppelingssoftware</h3>

![](https://res.cloudinary.com/callvoip/image/upload/v1566291405/voipcti-15_qncmjy.png)

<h3>Overzicht van de CRM pakketten</h3>

![](https://res.cloudinary.com/callvoip/image/upload/v1566291488/voipcti-16_m8gkgz.png)

Staat uw pakket er niet bij? Neem contact met ons op! Wellicht is koppeling toch mogelijk.
