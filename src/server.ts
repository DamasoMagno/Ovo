import express from "express";
import "express-async-errors";
const app = express();

import { CreatePostController } from "./controllers/CreatePostController";
import { CreateUserController } from "./controllers/CreateUserControler";
import { ShowPostsController } from "./controllers/ShowPostsController";
import { ShowUsersController } from "./controllers/ShowUsersController";
import { ShowPostController } from "./controllers/ShowPostController";
import { LikePostController } from "./controllers/LikePostController";
import { DeletePostController } from "./controllers/DeletePostController";
import { handleErrors } from "./middlewares/handleErrors";

const createPostController = new CreatePostController();
const createUserController = new CreateUserController();
const showUsersController = new ShowUsersController();
const showPostsController = new ShowPostsController();
const showPostController = new ShowPostController();
const likePostController = new LikePostController();
const deletePostController = new DeletePostController();

app.use(express.json());

app.post("/user", createUserController.handle);
app.get("/users", showUsersController.handle);
app.post("/post", createPostController.handle);
app.get("/posts", showPostsController.handle);
app.get("/post/:id", showPostController.handle);
app.patch("/post/:id", likePostController.handle)
app.delete("/post/:id", deletePostController.handle)

app.use(handleErrors);

app.listen(3333, () => {
  console.log("Server is running");
});
