import { CreateUserUsecase } from "../application/usecase/CreateUserUsecase";
import { InMemoryUserRepository } from "../infra/InMemoryUserRepository";
import { NodeUuidGenerator } from "../utils/UuidGenerator";

export class CreateUserController {
  private usecase: CreateUserUsecase;

  constructor() {
    const repo = new InMemoryUserRepository(new NodeUuidGenerator());
    this.usecase = new CreateUserUsecase(repo);
  }

  async handle(name: string, email: string) {
    const user = await this.usecase.execute(name, email);
    console.log("Usuário criado:", user);
    return user;
  }
}
