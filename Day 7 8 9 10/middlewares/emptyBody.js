module.exports = (req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Empty body not allowed" });
    }
  }
  next();
};
