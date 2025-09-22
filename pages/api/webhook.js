// pages/api/webhook.js
export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("LINE Webhook event:", req.body);

    // LINEに必ず200返す
    res.status(200).end();
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}