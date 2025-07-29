const axios = require("axios");
const {htmlString} = require('./templates');

exports.handler = async (event, context, callback) => {
  console.log("📨 Form submission received");

  try {
    const payload = JSON.parse(event.body).payload;
    const data = payload.data;
    const brevoApiKey = process.env.BREVO_API_KEY;

    // Check if required fields exist
    if (!data.email) {
      console.error("❌ Missing email field");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" })
      };
    }

    // Determine internal recipient based on formto
    let internalRecipient = "aanvragen@callvoip.nl";
    if (data.formto === "dev") internalRecipient = "info@spinme.nl";
    if (data.formto === "info") internalRecipient = "info@callvoip.nl";
    if (data.formto === "offerte") internalRecipient = "offerte@callvoip.nl";
    if (data.formto === "aanvragen") internalRecipient = "aanvragen@callvoip.nl";
    if (data.formto === "vacature") internalRecipient = "robert@callvoiptelefonie.nl";

    const htmlContent = htmlString(data);

    // Email payloads
    const clientEmail = {
      sender: { name: "Callvoip", email: "callvoip@callvoip.nl" },
      to: [{ email: data.email }, { email: internalRecipient }],
      subject: `Inzending formulier: ${data.form_name || 'Onbekend formulier'}`,
      htmlContent
    };

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