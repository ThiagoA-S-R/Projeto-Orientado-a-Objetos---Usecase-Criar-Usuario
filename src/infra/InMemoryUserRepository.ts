// infra/InMemoryUserRepository.ts
import { IRepos } from "../application/ports/IRepository";
import { User } from "../domain/User";
import { UuidGenerator } from "../utils/UuidGenerator";

export class InMemoryUserRepository implements IRepos {
  private users: User[] = [];

  constructor(private uuidGenerator: UuidGenerator) {}

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(u => u.email === email);
    return user ?? null;
  }

  // opcional: método auxiliar para criar o usuário
  async createUser(name: string, email: string): Promise<User> {
    User.validate(name, email);
    const user = new User(this.uuidGenerator.generate(), name, email);
    return this.save(user);
  }

  findAll(): User[] { // opcional, não está na interface IRepos
    return this.users;
  }
}
