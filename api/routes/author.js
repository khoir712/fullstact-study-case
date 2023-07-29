import { Router } from "express";
const authorRoute = Router();
import { AuthorController } from "../controllers";

authorRoute.get("/details/:id", AuthorController.findById);
authorRoute.post("/create", AuthorController.create);
authorRoute.delete("/delete/:id", AuthorController.delete);
authorRoute.put("/update/:id", AuthorController.update);
authorRoute.get("/details/:id/book-list", AuthorController.bookList);
authorRoute.get("/", AuthorController.getAllAuthors);
// authorRoute.get("/search/pen_name", AuthorController.searchPenName);

export default authorRoute;
