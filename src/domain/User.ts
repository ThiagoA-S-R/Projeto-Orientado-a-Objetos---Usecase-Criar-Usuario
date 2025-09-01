export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string
  ) {}

  static validate(name: string, email: string): void {
    if (!name || name.trim().length < 3) {
      throw new Error("Nome deve ter pelo menos 3 caracteres.");
    }
    if (!email.includes("@")) {
      throw new Error("E-mail inválido.");
    }
  }
}
