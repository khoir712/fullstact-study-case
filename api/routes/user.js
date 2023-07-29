import { Router } from "express";
const userRoute = Router();
import { UserController } from "../controllers";

userRoute.use("/", UserController.getAllUsers);
userRoute.use("/account/:id", UserController.findById);
userRoute.post("/register", UserController.register);
userRoute.post("/login", AuthorController.login);
userRoute.delete("/delete/:id", UserController.delete);
userRoute.put("/update/:id", UserController.update);

export default userRoute;
