const axios = require("axios");
const {htmlString} = require('./templates');

exports.handler = async (event, context, callback) => {
  console.log("📨 Form submission received");

  try {
    const payload = JSON.parse(event.body).payload;
    const data = payload.data;
    const brevoApiKey = process.env.BREVO_API_KEY;

    console.log("🟢🟢🟢🟢🟢 ",data);

    // Check if required fields exist
    if (!data.email) {
      console.error("❌ Missing email field");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" })
      };
    }

// Determine internal recipient and sender based on formto
let internalRecipient = "aanvragen@callvoip.nl";
let senderEmail = "callvoip@callvoip.nl";

if (data.formto === "dev") {
  internalRecipient = "info@spinme.nl";
  senderEmail = "info@spinme.nl";
}
if (data.formto === "info") {
  internalRecipient = "info@callvoip.nl";
  senderEmail = "info@callvoip.nl";
}
if (data.formto === "offerte") {
  internalRecipient = "offerte@callvoip.nl";
  senderEmail = "offerte@callvoip.nl";
}
if (data.formto === "aanvragen") {
  internalRecipient = "aanvragen@callvoip.nl";
  senderEmail = "aanvragen@callvoip.nl";
}
if (data.formto === "vacature") {
  internalRecipient = "robert@callvoiptelefonie.nl";
  senderEmail = "robert@callvoiptelefonie.nl";
}

const htmlContent = htmlString(data);

// Email to the person who submitted the form
const clientEmail = {
  sender: { name: "Callvoip", email: senderEmail },
  to: [{ email: data.email }],
  subject: `Inzending formulier: ${data.form_name || data.referrer}`,
  htmlContent
};

// Email to internal recipient, coming *from* the person who submitted the form
const internalEmail = {
  sender: {
    name: data.bedrijfsnaam || `${data.voornaam} ${data.achternaam}`,
    email: data.email
  },
  to: [{ email: internalRecipient }],
  subject: `Nieuwe inzending formulier: ${data.form_name || data.referrer}`,
  htmlContent
};

// Send both emails
try {
  await apiInstance.sendTransacEmail(clientEmail);
  await apiInstance.sendTransacEmail(internalEmail);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "✅ Emails sent successfully" })
  };
} catch (error) {
  console.error("❌ Email sending failed", error.response?.body || error);
  return {
    statusCode: 500,
    body: JSON.stringify({ error: "Failed to send one or both emails" })
  };
}

    const headers = {"api-key": brevoApiKey,"Content-Type": "application/json"};

    console.log("📤 Sending email to client:", data.email);
    await axios.post("https://api.brevo.com/v3/smtp/email", clientEmail, { headers });
    console.log("✅ Client email sent");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };

  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message || err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
