// pages/api/checkBotStatus.js

export default async function handler(req, res) {
  try {
    const response = await fetch("http://109.228.36.51:25000/");
    if (response.status === 200) {
      res.status(200).json({ isBotOnline: true });
    } else {
      res.status(200).json({ isBotOnline: false });
    }
  } catch (error) {
    console.error("Error checking bot status:", error);
    res.status(500).json({ error: "Error checking bot status" });
  }
}
