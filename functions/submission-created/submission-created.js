const brevo = require('@getbrevo/brevo');

exports.handler = async (event, context, callback) => {
  console.log('📨 Form submission received');

  const payload = JSON.parse(event.body).payload;
  const data = payload.data;
  const form_name = payload.form_name;
  const fields = payload.ordered_human_fields;
  const brevoApiKey = process.env.BREVO_API_KEY;

  // Initialize Brevo client
  let defaultClient = brevo.ApiClient.instance;
  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = brevoApiKey;

  let apiInstance = new brevo.TransactionalEmailsApi();

  let senderEmail = 'callvoip@callvoip.nl';
  let internalRecipient = 'aanvragen@callvoip.nl';

  if (data.formto === 'dev') {
    internalRecipient = 'info@spinme.nl';
  }
  if (data.formto === 'info') {
    internalRecipient = 'info@callvoip.nl';
  }
  if (data.formto === 'offerte') {
    internalRecipient = 'offerte@callvoip.nl';
  }
  if (data.formto === 'aanvragen') {
    internalRecipient = 'aanvragen@callvoip.nl';
  }
  if (data.formto === 'vacature') {
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
      body: JSON.stringify({message: 'Invalid template ID'}),
    });
  }

  // Helper function to send email using Brevo SDK
  const sendBrevoEmail = async (emailConfig) => {
    let sendSmtpEmail = new brevo.SendSmtpEmail();
    
    sendSmtpEmail.templateId = emailConfig.templateId;
    sendSmtpEmail.sender = emailConfig.sender;
    sendSmtpEmail.to = emailConfig.to;
    sendSmtpEmail.params = emailConfig.params;

    return apiInstance.sendTransacEmail(sendSmtpEmail);
  };

  const clientEmail = {
    templateId,
    sender: {name: "Callvoip", email: senderEmail},
    to: [{email: data.email}],
    params
  };

  const internalEmail = {
    templateId,
    sender: {name: data.bedrijfsnaam || `${data.voornaam} ${data.achternaam}`, email: data.email},
    to: [{email: internalRecipient}],
    params
  };

  try {
    console.log('📤 Sending email to client:', data.email);
    await sendBrevoEmail(clientEmail);
    console.log('✅ Client email sent');
  } catch (err) {
    console.error("❌ Error sending client email:", err);
  }

  try {
    console.log('📤 Sending email to internal:', internalRecipient);
    await sendBrevoEmail(internalEmail);
    console.log('✅ Internal email sent');
  } catch (err) {
    console.error("❌ Error sending internal email:", err);
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({message: "Emails sent via Brevo template!"})
  });
};
