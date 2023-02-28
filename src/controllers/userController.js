import User from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json(console.log(e));
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "email", "nome"] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { nome, id, email } = user;
      res.json({ nome, id, email });
    } catch (error) {
      res.json(console.log(error));
    }
  }
}

export default new UserController();
