import User from "../models/UserModel";

const jwt = require("jsonwebtoken");

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ["Login Required."],
    });
  }
  const [, token] = authorization.split(" ");
  try {
    const dados = jwt.verify(token, process.env.TOKEN);
    const { id, email } = dados;
    const user = await User.findOne({ where: id, email });
    if (!user) {
      return res.status(400).json({
        errors: ["Usuario invalido."],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expiration."],
    });
  }
};
