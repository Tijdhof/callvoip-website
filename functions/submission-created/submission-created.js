const axios = require('axios');

exports.handler = async (event, context, callback) => {
  console.log('📨 Form submission received');

  const payload = JSON.parse(event.body).payload;
  const data = payload.data;
  const form_name = payload.form_name;
  const fields = payload.ordered_human_fields;
  const brevoApiKey = process.env.BREVO_API_KEY;

  let senderEmail = 'callvoip@callvoip.nl';
  let internalRecipient = 'aanvragen@callvoip.nl';

  if (data.formto === 'dev') {
    senderEmail = 'callvoip@callvoip.nl';
    internalRecipient = 'info@spinme.nl';
  }
  if (data.formto === 'info') {
    senderEmail = 'callvoip@callvoip.nl';
    internalRecipient = 'info@callvoip.nl';
  }
  if (data.formto === 'offerte') {
    senderEmail = 'callvoip@callvoip.nl';
    internalRecipient = 'offerte@callvoip.nl';
  }
  if (data.formto === 'aanvragen') {
    senderEmail = 'callvoip@callvoip.nl';
    internalRecipient = 'aanvragen@callvoip.nl';
  }
  if (data.formto === 'vacature') {
    senderEmail = 'callvoip@callvoip.nl';
    internalRecipient = 'robert@callvoiptelefonie.nl';
  }

  const visibleFields = fields.filter(obj => obj.name !== 'formlayout' && obj.name !== 'formto');

  const generateHtmlFromFields = (fieldsArray) => {
    return fieldsArray.map(field => `<p><strong>${field.name}:</strong> ${field.value}</p>`).join('');
  };

  const params = {
    form_name: form_name || '',
    last_name: data.achternaam || '',
    fields: generateHtmlFromFields(visibleFields)
  };

  console.log('✅ Params prepared:', JSON.stringify(params, null, 2));

  const templateId = parseInt(data.formlayout);
  if (isNaN(templateId)) {
    console.error('❌ Invalid template ID:', data.formlayout);
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid template ID' }),
    });
  }

  const clientEmail = {
    templateId,
    sender: { name: "Callvoip", email: senderEmail },
    to: [{ email: data.email }],
    params
  };

  const internalEmail = {
    templateId,
    sender: { name: data.bedrijfsnaam || `${data.voornaam} ${data.achternaam}`, email: data.email },
    to: [{ email: internalRecipient }],
    params
  };

  try {
    console.log('📤 Sending email to client:', data.email);
    await axios.post("https://api.brevo.com/v3/smtp/email", clientEmail, {
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json"
      }
    });
    console.log('✅ Client email sent');
  } catch (err) {
    console.error("❌ Error sending client email:", err.response?.data || err);
  }

  try {
    console.log('📤 Sending email to internal:', internalRecipient);
    await axios.post("https://api.brevo.com/v3/smtp/email", internalEmail, {
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json"
      }
    });
    console.log('✅ Internal email sent');
  } catch (err) {
    console.error("❌ Error sending internal email:", err.response?.data || err);
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "Emails sent via Brevo template!" })
  });
};
