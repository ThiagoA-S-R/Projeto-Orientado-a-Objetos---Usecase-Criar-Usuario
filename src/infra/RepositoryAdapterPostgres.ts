import { IRepos } from "../application/ports/IRepository";
import { User } from "../domain/User";

export class RepositoryAdapterPostgres implements IRepos {
  private db: User[] = []; 

  async save(user: User): Promise<User> {
    this.db.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.db.find(u => u.email === email) || null;
  }
}
