import { CreateUserController } from "./controller/CreateUserController";

const controller = new CreateUserController();

(async () => {
  await controller.handle("Thiago", "Thiago@example.com");
  await controller.handle("Daniel", "Daniel@example.com");
})();
