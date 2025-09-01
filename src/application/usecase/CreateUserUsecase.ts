// application/CreateUserUsecase.ts
import { IUsecase } from "../ports/IUsecase";
import { IRepos } from "../ports/IRepository";
import { User } from "../../domain/User";
import { randomUUID } from "crypto";

export class CreateUserUsecase implements IUsecase {
  constructor(private readonly repository: IRepos) {}

  async execute(name: string, email: string): Promise<User> {
    // validação estática
    User.validate(name, email);

    // regra de negócio: não permitir email duplicado
    const existing = await this.repository.findByEmail(email);
    if (existing) {
      throw new Error("E-mail já cadastrado.");
    }

    const user = new User(randomUUID(), name, email);
    return await this.repository.save(user);
  }
}
