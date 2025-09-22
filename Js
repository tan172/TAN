// pages/api/webhook.js
export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("LINE Webhook event:", req.body);

    // ここでLINEの署名チェックとかイベント処理をする
    res.status(200).end();
  } else {
    // POST以外は許可しない
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}