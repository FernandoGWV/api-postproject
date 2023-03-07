import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errors: ["Credenciais invalidas."],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        erros: ["Usuario não existi."],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({
        errors: ["Senha invalida."],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
