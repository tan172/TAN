export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Webhook受信:", req.body);

    // LINE側に返すレスポンス（必須）
    res.status(200).send("OK");
  } else {
    // POST 以外は405で拒否
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}