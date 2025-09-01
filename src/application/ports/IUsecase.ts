import { User } from "../../domain/User";

export interface IUsecase {
  execute(name: string, email: string): Promise<User>;
}
