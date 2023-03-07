import Post from "../models/PostModel.js";

class PostController {
  async store(req, res) {
    try {
      const { userId: user_id } = req;

      const post = await Post.create({ ...req.body, user_id });
      return res.json(post);
    } catch (error) {
      return res.status(400).json({
        errors: ["Usuario não logado."],
      });
    }
  }

  async index(req, res) {
    try {
      const post = await Post.findAll({
        attributes: ["title", "descripte", "user_id"],
      });
      return res.json(post);
    } catch (error) {
      return res.status(400).json({
        errors: ["Error ao puxar os posts."],
      });
    }
  }

  async show(req, res) {
    try {
      const post = await Post.findByPk(req.params.id);
      return res.json(post);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: ["Error ao puxar posts."],
      });
    }
  }

  0;

  async update(req, res) {
    try {
      const post = await Post.findByPk(req.userId);
      if (!post) {
        return res.status(401).json({
          errrors: ["Error usuario não existe."],
        });
      }
      const { title, descripte } = post;
      const newPost = await Post.update(req.body, {
        where: { title, descripte },
      });
      const { userId } = newPost;
      const getPost = await Post.findByPk(req.userId);
      return res.json({ getPost, userId });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: ["Error ao atualizar o post."],
      });
    }
  }

  async delete(req, res) {
    try {
      const post = await Post.findByPk(req.userId);
      if (!post) {
        return res.status(400).json({
          errors: ["Usuario Não logado"],
        });
      }
      const postId = await Post.findByPk(req.params.id);
      postId.destroy();
      return res.json("post deletado com sucesso.");
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: ["Error ao atualizar o post."],
      });
    }
  }
}

export default new PostController();
