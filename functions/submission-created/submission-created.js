const axios = require('axios');

exports.handler = async (event, context, callback) => {
  console.log('called', event);
  const payload = JSON.parse(event.body).payload;
  const data = payload.data;
  const form_name = payload.form_name;
  const fields = payload.ordered_human_fields;

  const brevoApiKey = process.env.BREVO_API_KEY;

  // Determine fromEmail based on formto
  let fromEmail = 'aanvragen@callvoip.nl';
  if (data.formto === 'dev') fromEmail = 'info@spinme.nl';
  if (data.formto === 'info') fromEmail = 'info@callvoip.nl';
  if (data.formto === 'offerte') fromEmail = 'offerte@callvoip.nl';
  if (data.formto === 'aanvragen') fromEmail = 'aanvragen@callvoip.nl';
  if (data.formto === 'vacature') fromEmail = 'robert@callvoiptelefonie.nl';

  // Filter form fields for display
  const clientFields = fields.filter(obj => obj.name !== 'formlayout' && obj.name !== 'formto');

  const generateHtmlFromFields = (fieldsArray) => {
    return fieldsArray.map(field => `<p><strong>${field.name}:</strong> ${field.value}</p>`).join('');
  };

  const params = {
    form_name: form_name,
    last_name: data.achternaam,
    fields: generateHtmlFromFields(clientFields)
  };

  const templateId = parseInt(data.formlayout); // Should be numeric Brevo template ID

  // Email to client
  const clientEmail = {
    templateId: templateId,
    sender: { name: "Callvoip", email: fromEmail },
    to: [{ email: data.email }],
    params: params
  };

  // Email to internal recipient
  const internalEmail = {
    templateId: templateId,
    sender: {
      name: data.bedrijfsnaam || `${data.voornaam} ${data.achternaam}`,
      email: data.email
    },
    to: [{ email: fromEmail }],
    params: params
  };

  try {
    await axios.post("https://api.brevo.com/v3/smtp/email", clientEmail, {
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    console.error("Error sending client email:", err.response?.data || err);
  }

  try {
    await axios.post("https://api.brevo.com/v3/smtp/email", internalEmail, {
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    console.error("Error sending internal email:", err.response?.data || err);
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "Message sent via Brevo using template." })
  });
};
