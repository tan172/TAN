export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Webhook受信:", req.body);

    // LINEに返す（必須）
    res.status(200).send("OK");
  } else if (req.method === "GET") {
    // 接続確認用にOK返す
    res.status(200).send("Webhook OK");
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}