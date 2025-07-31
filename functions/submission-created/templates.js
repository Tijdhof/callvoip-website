function template_d_126942c712c44ec98eb3f158d6b2c826(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<p>Geachte heer/mevrouw,
<br><br>
Je hebt ons via onze contactpagina onderstaande gegevens gestuurd en/of vraag gesteld.
<br><br>
Heb je in de tussentijd nog vragen en/of opmerkingen? Bel ons dan op nummer 050 820 00 00.
<br><br>
Met vriendelijke groet,<br>
Team Callvoip
<br><br>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}


function template_d_5f1602c68c8a42919ddf340e285386e3 (data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<p>Geachte heer/mevrouw,
<br><br>
Bedankt voor uw bericht, hieronder vindt u een kopie van uw inzending.<br>
Wij nemen z.s.m contact met u op.
<br><br>
Heb je in de tussentijd nog vragen en/of opmerkingen? Bel ons dan op nummer 050 820 00 00.
<br><br>
Met vriendelijke groet,<br>
Team Callvoip
<br><br>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}



function template_d_fe851c4499b54b7e9378f4732769ab58(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<p>Geachte heer/mevrouw,
<br><br>
Hartelijk dank voor uw wijziging.
<br><br>
Controleer onderstaande wijziging zorgvuldig, indien akkoord ontvangen wij graag een reply op dit bericht met uw akkoord.
<br><br>
Na ontvangst van uw akkoord zullen wij de wijziging verwerken.
<br><br>
Met vriendelijke groet,<br>
Team Callvoip
<br><br>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}


function template_d_23f3cd981aa749f793cc16353039c3e3(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<p>Hallo,
<br><br>
Leuk dat je kennis met ons wil maken.
<br><br>
We zijn dol op bellen en zullen dan ook snel contact met je opnemen om te kijken wat voor moois we jou en jouw organisatie kunnen bieden. We gaan dan ons best doen om je in de tijd die jij daarvoor kunt vrijmaken een zo goed mogelijk beeld te geven van onze dienst.
<br><br>
Wedden dat je onder de indruk bent hoe eenvoudig, snel en compleet ons telefoonsysteem is?
<br><br>
Dus hou je telefoon in de gaten!
<br><br>
Met vriendelijke groet,<br>
Team Callvoip
<br><br>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}



function template_d_9f9d59454d29461697d5e1d428ab9ef8(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<p>Geachte heer/mevrouw,
<br><br>
Hartelijk dank voor uw opzegging.
<br><br>
Controleer onderstaande opezgging zorgvuldig. Indien akkoord, ontvangen wij graag een reply op dit bericht met uw akkoord.
<br><br>
Na ontvangst van uw akkoord zullen wij de opzegging verwerken.
<br><br>
Met vriendelijke groet,<br>
Team Callvoip
<br><br>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}


function template_d_f81edba681b54d4f86440455bce665d0(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<div>Na een klik op één van onze advertenties liet je je e-mail en telefoonnummer achter omdat je benieuwd was geworden naar ons aanbod. Daarom krijg je deze mail. </div>

<div>&nbsp;</div>

<div>Natuurlijk gaan we zo snel mogelijk contact met je opnemen om al je vragen te beantwoorden. In de tussentijd nodigen we je uit om een kijkje te nemen op onze website, bijvoorbeeld naar onze <a href="https://www.callvoip.nl/toolkit/">Telefonie Toolkit.</a></div>
<br>
<div>En kun je niet wachten? Dan kun je ons natuurlijk ook bellen: 050 820 00 00.</div>


<div>&nbsp;</div>

<div>Tot snel!<br />
Team Callvoip</div>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}


function template_d_bb5785f73c154508a7d4125575855140(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
<p>Geachte heer/mevrouw,
<br><br>
Hartelijk dank voor uw aanvraag.
<br><br>
Controleer onderstaande aanvraag zorgvuldig. Indien akkoord, ontvangen wij graag een reply op dit bericht met uw akkoord.
<br><br>
Na ontvangst van uw akkoord zullen wij de aanvraag verwerken.
<br><br>
Met vriendelijke groet,<br>
Team Callvoip
<br><br>
<b>Uw ingezonden formulier:</b><br>
                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}
function template_214(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
  
                      <p>Beste,</p>
  
                      <p>Bedankt voor je interesse in onze whitepaper <strong>"Slimme telefonie voor tandartsen"</strong>.</p>
  
                      <p><a href="https://www.callvoip.nl/slimme-telefonie-voor-tandartsen-whitepaper.pdf">Download hier</a> jouw whitepaper.</p>
  
                      <p>Mocht je naar aanleiding van alle informatie vragen hebben, neem dan contact op met Marieke. Ze kan je alles vertellen over de koppeling en de werking. Je kunt Marieke bereiken op <a href="tel:+31508200000">050 - 820 00 00</a> of via <a href="mailto:callvoip@callvoip.nl">callvoip@callvoip.nl</a>.</p>
  
                      <p>We houden contact!</p>
  
                      <p>Team Callvoip</p>
  
                      <hr style="margin: 20px 0;" />
  
                      <p><strong>Je formuliergegevens:</strong></p>

                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                      <p><em>Formulier:</em> ${data.form_name}</p>
                    </td>
                  </tr>
                </table>
  
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                  <tr>
                    <td style="padding: 0 5px;">
                      <a href="https://twitter.com/callvoip" target="_blank">
                        <img src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png" alt="Twitter" width="30" height="30" style="display:block;" />
                      </a>
                    </td>
                    <td style="padding: 0 5px;">
                      <a href="https://www.linkedin.com/company/1112063" target="_blank">
                        <img src="https://marketing-image-production.s3.amazonaws.com/social/white/linkedin.png" alt="LinkedIn" width="30" height="30" style="display:block;" />
                      </a>
                    </td>
                  </tr>
                </table>
  
                <p style="text-align:center; font-size:12px; color:#666;">Wil je geen e-mails meer ontvangen? <a href="<%asm_group_unsubscribe_raw_url%>">Klik hier om je af te melden</a>.</p>
  
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}

function template_d_8b49c21d95ab4559a59613773a179695(data) {
  const excludedKeys = ['formto', 'form_name', 'formlayout', 'ip', 'user_agent', 'referrer'];
  const fields = Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
    
  return `
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
          color: #203476;
        }
        a {
          color: #2069f3;
          text-decoration: none;
        }
        .wrapper {
          width: 100% !important;
          table-layout: fixed;
          background-color: #ebf2f7;
        }
        img.max-width {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .columns, .column {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0;" bgcolor="#ebf2f7">
      <center class="wrapper">
        <div>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ebf2f7">
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;" bgcolor="#f9f9f9">
                  <tr>
                    <td style="padding: 20px;">
  
                      <div style="text-align: center;">
                        <img src="https://marketing-image-production.s3.amazonaws.com/uploads/53d49e27d5100311eb23f95e1e185f45848d3b15b8f6231c2d13735a640a17d614102bdb1a3e4031e0196a46638a4b095801c8cc46996aa71dd02959379add34.png" width="300" alt="Callvoip logo" style="max-width: 50%; height: auto;" />
                      </div>
  
                      <p>Beste,</p>
  
                      <p>Bedankt voor je interesse in onze whitepaper <strong>"MS Teams koppelen met Callvoip"</strong>.</p>
  
                      <p><a href="https://www.callvoip.nl/Callvoip-MSTeams-Whitepaper.pdf">Download hier</a> jouw whitepaper.</p>
  
                      <p>Mocht je naar aanleiding van alle informatie vragen hebben, neem dan contact op met Marieke. Ze kan je alles vertellen over de koppeling en de werking. Je kunt Marieke bereiken op <a href="tel:+31508200000">050 - 820 00 00</a> of via <a href="mailto:callvoip@callvoip.nl">callvoip@callvoip.nl</a>.</p>
  
                      <p>We houden contact!</p>
  
                      <p>Team Callvoip</p>
  
                      <hr style="margin: 20px 0;" />
  
                      <p><strong>Je formuliergegevens:</strong></p>

                      ${fields.map(([k, v]) => {
    if (typeof v === 'object' && v !== null && v.url) {
      return `<p><strong>${k}:</strong> <a href="${v.url}" target="_blank">${v.name || 'Download bestand'}</a></p>`;
    } else {
      return `<p><strong>${k}:</strong> ${v}</p>`;
    }
  }).join("")}
                      
                      <p><em>Formulier:</em> ${data.form_name}</p>
                    </td>
                  </tr>
                </table>
  
                <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                  <tr>
                    <td style="padding: 0 5px;">
                      <a href="https://twitter.com/callvoip" target="_blank">
                        <img src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png" alt="Twitter" width="30" height="30" style="display:block;" />
                      </a>
                    </td>
                    <td style="padding: 0 5px;">
                      <a href="https://www.linkedin.com/company/1112063" target="_blank">
                        <img src="https://marketing-image-production.s3.amazonaws.com/social/white/linkedin.png" alt="LinkedIn" width="30" height="30" style="display:block;" />
                      </a>
                    </td>
                  </tr>
                </table>
  
                <p style="text-align:center; font-size:12px; color:#666;">Wil je geen e-mails meer ontvangen? <a href="<%asm_group_unsubscribe_raw_url%>">Klik hier om je af te melden</a>.</p>
  
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  `
}


function htmlString(data) {
  let content='Hi, no template ';

  if (data.formlayout==='214'){
    content=template_214(data)
  }

  if (data.formlayout==="d-bb5785f73c154508a7d4125575855140"){
    content=template_d_bb5785f73c154508a7d4125575855140(data)
  }

  if (data.formlayout==="d-9f9d59454d29461697d5e1d428ab9ef8"){
    content=template_d_9f9d59454d29461697d5e1d428ab9ef8(data)
  }

  if (data.formlayout==="d-8b49c21d95ab4559a59613773a179695"){
    content=template_d_8b49c21d95ab4559a59613773a179695(data)
  }

  if (data.formlayout==="d-f81edba681b54d4f86440455bce665d0"){
    content=template_d_f81edba681b54d4f86440455bce665d0(data)
  }

  if (data.formlayout==="d-126942c712c44ec98eb3f158d6b2c826"){
    content=template_d_126942c712c44ec98eb3f158d6b2c826(data)
  }

  if (data.formlayout==="d-23f3cd981aa749f793cc16353039c3e3"){
    content=template_d_23f3cd981aa749f793cc16353039c3e3(data)
  }

  if (data.formlayout==="d-fe851c4499b54b7e9378f4732769ab58"){
    content=template_d_fe851c4499b54b7e9378f4732769ab58(data)
  }

  if (data.formlayout==="d-5f1602c68c8a42919ddf340e285386e3"){
    content=template_d_5f1602c68c8a42919ddf340e285386e3(data)
  }

  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    ${content}    
    </html>
  `
}

module.exports = {
  htmlString,
};
