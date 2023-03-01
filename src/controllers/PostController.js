import Post from "../models/PostModel";

class PostController {
  async store(req, res) {
    try {
      const { userId: user_id } = req;
      const post = await Post.create({ ...req.body, user_id });
      return res.json(post);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: ["Usuario não logado."],
      });
    }
  }
}

export default new PostController();
