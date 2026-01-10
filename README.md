# TypeScript Documentation

## 📌 What is TypeScript?

TypeScript is a **strongly typed superset of JavaScript** developed by Microsoft.  
It adds **static typing**, **interfaces**, and **modern JavaScript features** to help developers build **scalable, maintainable, and error-free applications**.

TypeScript code is compiled into plain JavaScript, which can run anywhere JavaScript runs.

---

## 🚀 Why Use TypeScript?

- ✔ Detects errors at compile time  
- ✔ Improves code readability and maintainability  
- ✔ Better IDE support (autocomplete, refactoring)  
- ✔ Scales well for large applications  
- ✔ Fully compatible with JavaScript  

---

## 🛠 Installation

### Install TypeScript globally
```bash
npm install -g typescript
```

### Check version
```bash
tsc --version
```

---

## 📁 Project Setup

### Initialize a TypeScript project
```bash
tsc --init
```

This creates a `tsconfig.json` file.

---

## ⚙️ tsconfig.json (Basic Example)

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## 🧱 Basic Types

```ts
let username: string = "Nahian";
let age: number = 25;
let isAdmin: boolean = false;
```

### Arrays
```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["A", "B"];
```

---

## 🔧 Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Arrow Function
```ts
const multiply = (a: number, b: number): number => a * b;
```

---

## 🧩 Interfaces

Interfaces define the structure of an object.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Nahian",
  email: "test@email.com"
};
```

---

## 🧬 Type Aliases

```ts
type ID = string | number;

let userId: ID = 101;
```

---

## 🔁 Enums

```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING"
}

let currentStatus: Status = Status.Success;
```

---

## 🧠 Generics

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const response: ApiResponse<string> = {
  status: 200,
  data: "OK"
};
```

---

## 🧱 Classes

```ts
class Player {
  constructor(
    public name: string,
    public age: number,
    public country: string
  ) {}
}

const sakib = new Player("Sakib", 35, "BD");
```

---

## 🧩 Implements Interface

```ts
interface IsPlayer {
  name: string;
  age: number;
}

class Cricketer implements IsPlayer {
  constructor(public name: string, public age: number) {}
}
```

---

## 📦 Modules & Imports

### Type-only import (Recommended)
```ts
import type { User } from "./User";
```

### Value import
```ts
import { Player } from "./Player";
```

---

## ⚠️ TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|------|-----------|-----------|
| Static Typing | ❌ | ✅ |
| Compile-time errors | ❌ | ✅ |
| Interfaces | ❌ | ✅ |
| IDE Support | Medium | Excellent |

---

## 🧪 Type Safety Benefits

- Prevents undefined errors  
- Safer refactoring  
- Clear contracts between components  
- Better teamwork  

---

## 🧰 Common Use Cases

- React / Next.js applications  
- Node.js backend  
- Large-scale enterprise apps  
- API development  

---

## 📚 Best Practices

- Use `strict: true`  
- Prefer `interface` for objects  
- Use `import type` for types  
- Avoid `any`  
- Use enums or union types wisely  

---

## 🔗 Useful Commands

```bash
tsc           # Compile TypeScript
tsc --watch   # Watch mode
```

---

## 📖 Resources

- Official Docs: https://www.typescriptlang.org  
- TypeScript Handbook  
- DefinitelyTyped (@types)

---

## ✅ Conclusion

TypeScript makes JavaScript **safer, scalable, and more professional**.  
If you know JavaScript, learning TypeScript is the **best next step**.

Happy Coding 🚀
