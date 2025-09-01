# 🛠️ Projeto Criar Usuário

Este projeto é um exemplo de **arquitetura limpa (Clean Architecture)** com **TypeScript**, demonstrando boas práticas de organização de código, injeção de dependências e uso de diferentes adaptadores de repositórios (PostgreSQL e MySQL).

---

## 🚀 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Arquitetura Limpa (Clean Architecture)**
- **SOLID Principles**
- **PostgreSQL** e **MySQL** (repositórios adaptadores)
- **UUID** para geração de IDs
- **Jest** (opcional, para testes)

---

## 📂 Estrutura de Pastas

```
src/
 ├── application/
 │    ├── ports/                      # Interfaces (contratos)
 │    │    ├── IRepository.ts
 │    │    └── IUsecase.ts
 │    └── CreateUserUsecase.ts        # Caso de uso: criar usuário
 │
 ├── domain/
 │    └── User.ts                     # Entidade de domínio
 │
 ├── infra/
 │    ├── RepositoryAdapterMysql.ts   # Repositório MySQL
 │    └── RepositoryAdapterPostgres.ts# Repositório PostgreSQL
 │
 ├── interface/
 │    └── CreateUserController.ts     # Controlador
 │
 └── main.ts                          # Ponto de entrada do projeto

package.json
package-lock.json
tsconfig.json
```

---

## 📦 Histórico de Comandos Utilizados no Projeto

Para configurar este projeto do zero, foram utilizados os seguintes comandos no terminal:

```bash
1. npm install
2. npx tsc --init
3. npm install --save-dev @types/node
4. npm install --save-dev typescript ts-node
5. npm run dev
```

Esses comandos:
- Instalam dependências iniciais (`npm install`);
- Inicializam o TypeScript (`tsc --init`);
- Adicionam tipagem do Node (`@types/node`);
- Configuram TypeScript e `ts-node` como dependências de desenvolvimento;
- Executam o projeto em modo desenvolvimento (`npm run dev`).

---

## 🏗️ Conceitos do Projeto

- **Repository Pattern**: O projeto usa interfaces (`IRepository`) para abstrair o acesso a dados.
- **Clean Architecture**: Separação entre camadas de domínio, aplicação e infraestrutura.
- **Injeção de Dependências Manual**: Feita em `main.ts`, sem framework.
- **Adaptadores de Banco de Dados**: Repositórios para PostgreSQL e MySQL.
- **Entidade User**: Representa o usuário com validações básicas.

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Compilar TypeScript
```bash
npm run build
```

### 4️⃣ Executar o projeto
```bash
npm start
```

---

## 🔑 Exemplo de Uso

Arquivo `main.ts`:
```ts
import { CreateUserController } from "./src/interface/CreateUserController";
import { CreateUserUsecase } from "./src/application/CreateUserUsecase";
import { RepositoryAdapterPostgre } from "./src/infra/RepositoryAdapterPostgres";

const repository = new RepositoryAdapterPostgre();
const usecase = new CreateUserUsecase(repository);
const controller = new CreateUserController(usecase);

controller.handle({ name: "Thiago", email: "thiago@example.com" });
```

Saída no console:
```
Usuário criado:
{
  id: "uuid-gerado",
  name: "Thiago",
  email: "thiago@example.com"
}
```

---

## 🛠️ Scripts Disponíveis

| Script              | Descrição                          |
|--------------------|-----------------------------------|
| `npm run build`    | Compila o projeto TypeScript       |
| `npm start`        | Executa o projeto                 |
| `npm test`         | Executa os testes (se configurado)|

---

## 📜 Licença

Este projeto é de uso educacional e pode ser adaptado livremente.  
Sinta-se à vontade para contribuir! 🚀

---

## 👨‍💻 Autor

Thiago Anastácio
