---
title: Handleiding Webhook
weight: 11
description: ''
images: []
hideinsearch: false
Nieuw: true
Update: false
pdf: 'https://www.callvoip.nl/docs/Callvoip_Technote_Webhook.pdf'
hideingoogle: false
hidesocialshare: false
aliases: "/webhook/"
---

<h2>Wat is de Webhook?</h2>
De Webhook-app stelt je in staat om <b>oproepgegevens</b> te ontvangen van een inkomende oproep aan een belplan. In de Webhook-app vul je de URL van je server in. Zodra de inkomende oproep de Webhook-app in het belplan bereikt ontvang je de oproepgegevens.<br>
Zodra de Webhook-app een reactie ontvangt van je server wordt via de voorwaarde-app een verdere belroute in het belplan uitgevoerd.
<br><img src="https://res.cloudinary.com/callvoip/image/upload/v1690467400/webhook-image.png"><br>
<table style="border-collapse:collapse;margin-left:5.98399pt" cellspacing="0"><tbody><tr style="height:15pt"><td style="width:100pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC"><p class="s4" style="padding-left: 6pt;text-indent: 0pt;text-align: left;"><b>Parameter</b></p></td><td style="width:120pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC"><p class="s4" style="padding-left: 5pt;text-indent: 0pt;text-align: left;"><b>Aanwezigheid</b></p></td><td style="width:205pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC"><p class="s4" style="padding-left: 5pt;text-indent: 0pt;text-align: left;"><b>Omschrijving</b></p></td></tr><tr style="height:15pt"><td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 6pt;text-indent: 0pt;text-align: left;">Methoden</p></td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC" bgcolor="#DAEDF3"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">Vereist</p></td><td style="width:205pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC" bgcolor="#DAEDF3"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">GET, POST</p></td></tr><tr style="height:15pt"><td style="width:100pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 6pt;text-indent: 0pt;line-height: 10pt;text-align: left;">URL</p></td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Vereist</p></td><td style="width:205pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">http en https, met of zonder query parameter</p></td></tr><tr style="height:30pt"><td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 6pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Resultaat opslaan als</p><p class="s5" style="padding-top: 4pt;padding-left: 6pt;text-indent: 0pt;text-align: left;">variabele</p></td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC" bgcolor="#DAEDF3"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Optioneel</p></td><td style="width:205pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#92CDDC;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC" bgcolor="#DAEDF3"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">De naam van de variabele die je in de</p><p class="s5" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">voorwaarde-app kunt selecteren</p></td></tr><tr style="height:44pt"><td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 6pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Request Timeout</p></td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Vereist</p></td><td style="width:205pt;border-top-style:solid;border-top-width:1pt;border-top-color:#92CDDC;border-left-style:solid;border-left-width:1pt;border-left-color:#92CDDC;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt;border-right-color:#92CDDC"><p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Default 2 seconden</p><p class="s5" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Minimaal 1 seconden</p><p class="s5" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Maximaal 10 seconden</p></td></tr></tbody></table>
<br><br>
<b>Gegevensverzoek:</b>
Let op: een gegevensverzoek wordt alleen verzonden met het <b>POST</b>-verzoek.<br>
De verzoekgegevens die naar de URL komen, zijn de volgende:<br>
● Bedrijfs-ID<br>
● Nummerplan-ID<br>
● Intern nummer belplan<br>
● Extern nummer belplan<br>
● Nummer van degene die gebeld wordt (callee)<br>
● Nummer van de beller (caller) of het SIP-account<br>
● Oproep uuid (ID van een oproep in het telefonie-platform)<br>
● Naam van de beller in het telefoonboek<br>
● RTA-oproep-ID (oproep-ID in RTA-stijl, dit zal op termijn niet gehandhaafd blijven)<br>
● SIP Call ID (SIP-signalering oproep-ID)<br>
● Tijdstempel van de gebeurtenis<br>
● Tijdstempel van het begin van het gesprek (= moment waarop het gesprek het belplan binnenkomt)<br>
<br><br>
<b>Voorbeeld van een gegevensverzoek:</b>
<span class="s6" style=" background-color: #0FF;">
{<br>
"com_id": "42f30becd4ea93edd284e059427b5ee0",<br>
"dp_id": "42f30becd4ea93edd284e059427cf1f7",<br>
"dp_in_number": "1003",<br>
"dp_ex_number": "31102380095",<br>
"callee_number": "31102380095",<br>
"caller_number": "31152026057",<br>
"uuid": "b587f4ee-718d-11ed-88ee-b97829e8fee4",<br>
"phonebook_caller_name": "",<br>
"event_time": "1669908899250",<br>
"call_start_time": "1669908896814",<br>
"rta_call_id": "8a5d5db451e9-6bd98ab0066f"<br>
"sip_call_id": "lsjuf8l09juq1i0a9vai"<br>
}<br></span><br>
<b>Combinatie met de voorwaarde-ap</b>
Je kunt een variabele instellen in de Webhook app; deze is dan ook zichtbaar in de voorwaarde-app.
Afhankelijk van de reactie van de server (ingesteld in de webhook-app) kun je verschillende vervolgbelroutes laten uitvoeren.<br>
<img src="https://res.cloudinary.com/callvoip/image/upload/v1690468301/webhook-image2.png">
