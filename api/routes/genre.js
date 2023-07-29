import { Router } from "express";
const genreRoute = Router();
import { GenreController } from "../controllers";

genreRoute.use("/", GenreController.getAllAuthors);
genreRoute.use("/details/:id", GenreController.findById);
genreRoute.post("/create", GenreController.create);
genreRoute.delete("/delete/:id", GenreController.delete);
genreRoute.put("/update/:id", GenreController.update);

export default genreRoute;
