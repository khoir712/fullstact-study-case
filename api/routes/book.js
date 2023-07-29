import { Router } from "express";
const bookRouter = Router();
import { BookController } from "../controllers";

bookRouter.use("/", BookController.getAllBooks);
bookRouter.use("/details/:id", BookController.findById);
bookRouter.post("/create", BookController.create);
bookRouter.delete("/delete/:id", BookController.delete);
bookRouter.put("/update/:id", BookController.update);

export default bookRouter;
