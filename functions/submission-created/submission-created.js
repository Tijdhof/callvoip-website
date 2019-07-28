// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler =  async (event, context, callback) => {
  console.log('called', event)
  console.log('----------------DATA--------------')
  console.log(JSON.parse(event.body).payload.data);
  console.log('----------------Human Fields--------------')
  console.log(JSON.parse(event.body).payload.human_fields);
  console.log('----------------Ordered Human Fields--------------')
  console.log(JSON.parse(event.body).payload.ordered_human_fields);
  console.log('----------------Form Name--------------')
  console.log(JSON.parse(event.body).payload.form_name);

  console.log('-------------------- FORMULIER NIEUW -----------------------')

  const data = JSON.parse(event.body).payload.data;
  const form_name = JSON.parse(event.body).payload.form_name;
  const fields = JSON.parse(event.body).payload.ordered_human_fields;


  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const defaultTemplate = 'd-5f1602c68c8a42919ddf340e285386e3';
  const internalTemplate = 'd-b8915fd3b5f149ccbbcb6b469aecc71d';

  let fromEmail = '';

  if (data.formto == 'dev') {
    fromEmail = 'info@spinme.nl'
  }

  if (data.formto == 'info') {
    fromEmail = 'info@callvoip.nl'
  }

  if (data.formto == 'offerte') {
    fromEmail = 'offerte@callvoip.nl'
  }

  if (data.formto == 'aanvragen') {
    fromEmail = 'aanvragen@callvoip.nl'
  }


  const clientmsg = {
    to: data.email,
    from: {
      email: fromEmail || 'aanvragen@callvoip.nl',
      name: 'Callvoip'
    },
    subject: "Inzending formulier Callvoip",
    templateId: data.formlayout || defaultTemplate,
    dynamic_template_data: {
      last_name: data.achternaam,
      form_name: form_name,
      fields: fields,
      subject: "Inzending formulier Callvoip"
    }
  };

  const internalmsg = {
    to: fromEmail || 'aanvragen@callvoip.nl',
    from: {
      email: data.email,
      name: data.voornaam + " " + data.achternaam,
    },
    subject: "Inzending formulier Callvoip",
    templateId: internalTemplate,
    dynamic_template_data: {
      last_name: data.achternaam,
      form_name: form_name,
      fields: fields,
      subject: "Inzending formulier Callvoip"
    }
  };

  try {
    return sgMail.send(clientmsg);
  } catch(error) {
    console.log('error', error)
  }

  try {
    return sgMail.send(internalmsg);
  } catch(error) {
    console.log('error', error)
  }


  return;


};