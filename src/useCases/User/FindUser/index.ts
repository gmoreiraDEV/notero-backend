import { FindAllUserController } from "./FindAllUsersController";
import { FindUserByIdController } from "./FindUserByIdController";

const findAllUsersController = new FindAllUserController();
const findUserByIdController = new FindUserByIdController();

export { findAllUsersController, findUserByIdController };
