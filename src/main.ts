import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

// let isDone: boolean = false;

// isDone = 1;

// let decimal: number = 6; // десяткові
// let float: number = 3.14; // речові або число з плаваючою крапкою
// let hex: number = 0xf00d; // шістнадцяткове
// let binary: number = 0b1010; // двійкове
// let octal: number = 0o744; // вісімкове

// let color: string = "blue";

// let empty: null = null;
// let notParam: undefined = undefined;

// function foo (num: number, str: string, bool: boolean, empty: null) {
//   console.log(foo(1, "1", false, null,))
// }

// function foo(num = 10, str = "Some string", bool = true, empty = null) {
//   console.log(foo(1, "1", false, null));
// }

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };

// export {};

// let arrString: string[];

// arrString = ['Text', 1];

// export {};

// let arrNumber: number[];

// arrNumber = [1, 'Text'];

// export {};

// let matrix: number[][] = [[1, 2], [3, 4]];

// let mixed: (number | string)[] = ['two',1];

// let numbers: Array<number> = [1, 2, 3, 4, 5];

// type User = {
//   name: string;
//   age: number;
// };

// let users: User[] = [
//   { name: 'Tom', age: 30 },
//   { name: 'Jack', age: 25 },
//   { name: 'Alice', age: 32 },
// ];

// let arrAny: any[];

// let notSure: unknown = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let num: number;

// num = notSure;

// export {};

// function fetchUserData() {
//   return "Tom";
// }

// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === "string") {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }

// let tuple: [string, boolean];
// tuple = ['hello', true]; // OK
// tuple = [true, 'hello']; // Error. Неправильні типи
// tuple = ['hello', true, true]; // Error. Більше значень ніж у tuple

// export {};

// let tuple: [string, ...number[]];

// tuple = ["hello", 42, 100, 200]; // OK, Використовуємо оператора розширення (...) для створення кортежів змінної довжини.
// console.log(tuple);

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

// export = {};

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function respond(status: HttpCodes) {
//   console.log("Response status:", status);
// }

// respond(HttpCodes.OK);

// export {};

// let mixedType: string | number | boolean;

// mixedType = "string"; // OK
// mixedType = 10; // OK
// mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// export {};

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// export {};

// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;

// // type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return 'bark' in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }

// export {};

// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: "Alice",
//   id: 1,
//   employees: [
//     {
//       name: "Bob",
//       id: 2,
//     },
//   ],
// };

// export {};

// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1; // OK
// value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.
// console.log(value);

// type YesOrNo = "yes" | "no";
// let answer: YesOrNo;
// answer = "yes"; // OK
// answer = "no"; // OK
// answer = "maybe"; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

// export {};

// type ButtonSize = 'small' | 'medium' | 'large';

// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case 'small':
//       return { fontSize: '10px', padding: '5px' };
//     case 'medium':
//       return { fontSize: '14px', padding: '10px' };
//     case 'large':
//       return { fontSize: '18px', padding: '15px' };
//     default:
//       return { fontSize: '14px', padding: '10px' };
//   }
// }

// let myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

// let someValue: unknown = "this is a string";

// let strLength1: number = (<string>someValue).length;
// // or
// let strLength2: number = (someValue as string).length;

// let strLength3: number = someValue.length;

// export {};

// const input = document.getElementById('inputEmail') as HTMLInputElement;

// input.value = 'test@test.ts';

// export {};

// const input = document.getElementById('inputEmail');

// if (input) {
//   (input as HTMLInputElement).value = 'test@test.ts';
// }

// export {};

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type Users = {
//   [id: string]: User;
// };

// let users: Users = {};

// let user: User = {
//   id: "1",
//   name: 'Alex',
//   email: 'alex@example.com',
// };

// users[user.id] = user;

// export {};

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alisa' }, { age: 28 });

// merged.name;

// export {};

// type Person = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });

// merged.name;

// export {};

// type Length = {
//   length: number;
// };

// function getLength<T extends Length>(str: T) {
//   return str.length;
// }

// getLength('text');
// getLength([1, 2, 3]);
// getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'

// export {};

// function arrayLogger<T extends Array<string>>(array: T): void {
//   array.forEach((item) => console.log(item));
// }

// arrayLogger(['Hello', 'World']); // Ok
// arrayLogger([1, 2, 3]); // Error

// export {};

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const john: Person = {
//   name: 'John',
//   age: 25,
//   location: 'NY',
// };

// console.log(getPersonInfo(john, 'age')); // 25
// console.log(getPersonInfo(john, 'name')); // 'John'
// console.log(getPersonInfo(john, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

// export {};

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// extractValue({ name: 'John' }, 'name');

// export {};

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Hello');
// textStorage.addItem('World');
// console.log(textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// console.log(numberStorage.getItems()); // [1, 2]
// numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

// export {};

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   registered: boolean;
// };

// function createUser(data: Partial<User>): User {
//   // Деякі значення за замовчуванням:
//   const defaultUser: User = {
//     id: Date.now(),
//     name: '',
//     email: '',
//     registered: false,
//   };

//   // З'єднуємо дані користувача та значення за замовчуванням
//   return { ...defaultUser, ...data };
// }

// const newUser = createUser({ name: 'Alice', email: 'alice@example.com' });

// console.log(newUser);

// export {};

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserBasicInfo = Pick<User, 'id' | 'name'>;

// let userBasicInfo: UserBasicInfo = {
//   id: 1,
//   name: 'John Doe',
//   email: 'john@example.com', // Error: Property 'email' does not exist on type 'UserBasicInfo'
// };

// export {};

// type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
// type Weekend = 'Sat' | 'Sun';

// type Day = Weekdays | Weekend;

// type DayTranslations = Record<Day, string>;

// const translations: DayTranslations = {
//   Mon: 'Понеділок',
//   Tue: 'Вівторок',
//   Wed: 'Середа',
//   Thu: 'Четверг',
//   Fri: "П'ятниця",
//   Sat: 'Субота',
//   Sun: 'Неділя',
// };

// export {};

// function greeting() {
//   return 'Hello, world!';
// }

// type Greeting = ReturnType<typeof greeting>; // 'string'

// function multiply(a: number, b: number) {
//   return a * b;
// }

// type MultiplyResult = ReturnType<typeof multiply>; // 'number'

// export {};

// type Callback = (...args: unknown[]) => unknown;

// function createLoggedFunction<T extends Callback>(func: T) {
//   let funcRef = func;

//   const loggedFunction = (...args: Parameters<T>) => {
//     console.log(`Function ${func.name} was called with arguments:`, args);
//     const result = funcRef(...args) as ReturnType<T>;
//     return result;
//   };

//   return loggedFunction;
// }

// export {};
