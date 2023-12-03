const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");
    console.log("token :", token);
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Missing token" });
    }
  
    jwt.verify(token, "1415", (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
      }
  
      req.user = user;
      next();
    });
  };
  
  module.exports = { authenticateToken };