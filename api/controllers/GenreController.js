import { genre, user } from "../models";

class GenreController {
  static async getAllAuthors(req, res) {
    //
    try {
      let authors = await author.findAll({
        include: [profile],
      });

      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async findById(req, res) {
    //

    try {
      const id = +req.params.id;
      const result = await author.findOne({
        where: { id },
        include: [profile],
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    //
    try {
      const { pen_name } = req.body;
      const userId = 1;
      const profileResult = await profile.create();
      const profileId = profileResult.id;

      const authorResult = await author.create({
        pen_name,
        userId,
        profileId,
      });

      res.status(201).json(authorResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static delete(req, res) {
    //
  }

  static update(req, res) {
    //
  }

  static bookList(req, res) {
    //
  }
}

export default GenreController;
