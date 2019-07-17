---
title: Abonnement opzeggen
url: "/opzeggen/abonnement"

---
Indien u uw abonnement voor CallvoipTelefonie wilt opzeggen kunt u gebruik maken van onderstaand formulier. Als u uw telefoonnummers mee wilt nemen naar een andere provider, dan kunt u dit op het formulier aangeven. Zegt u de telefoonnummers op, dan komen deze te vervallen.

Vul het formulier in, controleer de bevestigingsmail en stuur een reply, met akkoord per mail, naar ons ter bevestiging van uw opdracht. Wij nemen dan z.s.m. met u contact op!

{{< form "opzeggen-abonnement" "/opzeggen/verzonden" >}}

{{< form/fieldset "Bedrijfsgegevens" >}}

{{< form/input "Bedrijfsnaam" >}}

{{< form/input "Klantnummer" required >}}

{{< form/select "Aanhef" >}}

{{< form/option "Heer" >}}

{{< form/option "Mevrouw" >}}

{{</ form/select >}}

{{< form/input "Contactpersoon" >}}

{{< form/input "Telefoonnummer" >}}

{{< form/email "E-mailadres" required >}}

{{</ form/fieldset >}}

  
 {{< form/fieldset "Opzeggegevens" >}}

{{< form/checkboxgroup "Wilt u uw telefoonnummers opzeggen of verhuizen" "inline" >}}

{{< form/checkbox "Verhuizen" "Checkbox example" >}}

{{< form/checkbox "Opzeggen" "Checkbox example" >}}

{{</ form/checkboxgroup >}}

{{< form/textarea "Welke nummers wilt u opzeggen / verhuizen" >}}

_Indien u de nummers meeneemt naar een andere provider, kunt u hieronder invullen welke._

{{< form/input "Nieuwe provider" >}}

_Per wanneer wilt u het abonnement opzeggen?_

{{< form/input "Wensdatum opzegging" >}}

{{< form/textarea "Reden van opzegging" >}}

{{</ form/fieldset >}}

  
 {{< form/button "Verstuur formulier" >}}  
 

{{</ form >}}