import { User } from "../../domain/User";

export interface UserRepository {
  createUser(name: string, email: string): User;
  findAll(): User[];
}
