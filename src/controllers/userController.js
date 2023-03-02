import Post from "../models/PostModel";
import User from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json(console.log(e));
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "email", "nome"],
        include: {
          model: Post,
          attributes: ["title", "descripte"],
        },
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: ["email", "nome", "id"],
        include: {
          model: Post,
          attributes: ["title", "descripte"],
        },
      });

      res.json(user);
    } catch (error) {
      res.json(console.log(error));
    }
  }
}

export default new UserController();
