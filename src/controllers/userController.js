import Post from "../models/PostModel";
import User from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errros: ["error"],
      });
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
      res.json({
        errors: ["error"],
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuario não existe."],
        });
      }
      const { email, nome, id } = user;
      const newData = await User.update(req.body, {
        where: { email, nome, id },
      });
      console.log(newData);
      const newUserUpdate = await User.findByPk(req.userId, {
        attributes: ["email", "nome", "id"],
      });
      return res.json(newUserUpdate);
    } catch (error) {
      return res.status(400).json({
        errors: ["Error ao atualizar o usuario."],
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuario não existe."],
        });
      }

      user.destroy();
      return res.json({
        msg: ["Usuario deletado com sucesso"],
      });
    } catch (err) {
      return res.stauts(400).json({
        errors: ["Error ao deleta o usuario."],
      });
    }
  }
}

export default new UserController();
