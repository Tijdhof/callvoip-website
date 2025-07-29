const axios = require("axios");

exports.handler = async (event, context, callback) => {
  console.log("📨 Form submission received");

  const payload = JSON.parse(event.body).payload;
  const data = payload.data;
  const form_name = payload.form_name;
  const fields = payload.ordered_human_fields;
  const brevoApiKey = process.env.BREVO_API_KEY;

  // Log data for debugging
  console.log("🧾 Full form data:", JSON.stringify(data, null, 2));

  // Determine internal recipient based on formto
  let senderEmail = "callvoip@callvoip.nl";
  let internalRecipient = "aanvragen@callvoip.nl";

  if (data.formto === "dev") internalRecipient = "info@spinme.nl";
  if (data.formto === "info") internalRecipient = "info@callvoip.nl";
  if (data.formto === "offerte") internalRecipient = "offerte@callvoip.nl";
  if (data.formto === "aanvragen") internalRecipient = "aanvragen@callvoip.nl";
  if (data.formto === "vacature") internalRecipient = "robert@callvoiptelefonie.nl";

  const visibleFields = fields.filter(f => f.name !== "formlayout" && f.name !== "formto");

  const generateHtmlFromFields = (arr) =>
    arr.map(field => `<p><strong>${field.name}:</strong> ${field.value}</p>`).join("");

  const html = `
    <h2>Bedankt voor je inzending</h2>
    <p><strong>Je formuliergegevens:</strong></p>
    ${generateHtmlFromFields(visibleFields)}
    <p><em>Formulier:</em> ${form_name}</p>
  `;

  // Email payloads
  const clientEmail = {
    sender: { name: "Callvoip", email: senderEmail },
    to: [{ email: data.email }],
    subject: `Inzending formulier: ${form_name}`,
    htmlContent: html
  };

  const internalEmail = {
    sender: { name: "Callvoip", email: data.email },
    to: [{ email: internalRecipient }],
    subject: `Nieuwe inzending: ${form_name}`,
    htmlContent: html
  };

  const headers = {
    "api-key": brevoApiKey,
    "Content-Type": "application/json"
  };

  // Send both emails
  try {
    console.log("📤 Sending email to client:", data.email);
    await axios.post("https://api.brevo.com/v3/smtp/email", clientEmail, { headers });
    console.log("✅ Client email sent");
  } catch (err) {
    console.error("❌ Error sending client email:", err.response?.data || err);
  }

  try {
    console.log("📤 Sending email to internal:", internalRecipient);
    await axios.post("https://api.brevo.com/v3/smtp/email", internalEmail, { headers });
    console.log("✅ Internal email sent");
  } catch (err) {
    console.error("❌ Error sending internal email:", err.response?.data || err);
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "Emails sent via Brevo (HTML content)" })
  });
};
