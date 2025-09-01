// application/ports/IRepos.ts
import { User } from "../../domain/User";

export interface IRepos {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
