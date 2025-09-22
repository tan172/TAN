export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Webhook受信:", req.body);
    res.status(200).send("OK");  // とりあえず常にOK返す
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}