// src/data/esFeatures.js
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import ReactMarkdown from "react-markdown";

const esFeatures = {
  es2015: {
    name: "ES6 / ES2015 (Modern JS Revolution)",
    features: [
      {
        id: "let-const",
        title: "let and const (Block Scope)",
        content: () => (
          <>
            <p>
              The <code>let</code> and <code>const</code> keywords introduce block-scoped variables.
              <br />
              <strong>let</strong> can be reassigned, <strong>const</strong> cannot.
            </p>

            <LiveProvider
              code={`let count = 1; // 'let' allows reassignment
count = 2; // This works fine

const name = "Farid"; // 'const' declares a constant

// name = "Achmad";  // TypeError: Assignment to constant variable

render(<div>{count} {name}</div>);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "arrow-functions",
        title: "Arrow Functions",
        content: () => (
          <>
            <p>
              Arrow functions provide a concise syntax for writing functions in JavaScript.
              <br />
              They have lexical <code>this</code> binding and are always anonymous.
            </p>

            <LiveProvider
              code={`// Traditional function expression
const addTraditional = function(a, b) {
  return a + b;
};

// Arrow function equivalent
const addArrow = (a, b) => a + b;

// Single parameter doesn't need parentheses
const square = x => x * x;

// No parameters need empty parentheses
const greet = () => 'Hello World!';

// Returning an object literal requires parentheses
const makePerson = (name, age) => ({ name, age });

render(
  <div>
    <p>Traditional: {addTraditional(2, 3)}</p>
    <p>Arrow: {addArrow(2, 3)}</p>
    <p>Square: {square(4)}</p>
    <p>Greeting: {greet()}</p>
    <p>Person: {JSON.stringify(makePerson("Alice", 25))}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "template-literals",
        title: "Template Literals",
        content: () => (
          <>
            <p>
              Template literals (template strings) allow embedded expressions, multiline strings, and string interpolation.
              <br />
              They are enclosed in backticks (<code>`</code>) instead of single or double quotes.
            </p>

            <LiveProvider
              code={`// Basic string interpolation
const name = "Alice";
const age = 25;
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multiline strings without escape characters
const poem = \`
  Roses are red,
  Violets are blue,
  Template literals
  Make strings easier too!
\`;

// Expressions inside template literals
const price = 19.99;
const taxRate = 0.07;
const total = \`Total: $\${(price * (1 + taxRate)).toFixed(2)}\`;

// Tagged templates (advanced usage)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return \`\${result}\${str}\${values[i] ? \`<mark>\${values[i]}</mark>\` : ''}\`;
  }, '');
}

const item = "JavaScript";
const feature = "template literals";
const taggedExample = highlight\`Learning \${item} and \${feature} is fun!\`;

render(
  <div>
    <p>{greeting}</p>
    <pre>{poem}</pre>
    <p>{total}</p>
    <div dangerouslySetInnerHTML={{ __html: taggedExample }} />
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "destructuring array",
        title: "Destructuring Array",
        content: () => (
          <>
            <p>
              Array destructuring allows unpacking values from arrays into distinct variables.
              <br />
              It provides a concise way to extract multiple values from arrays or iterables.
            </p>

            <LiveProvider
              code={`// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

// Skipping items
const [,, primaryColor] = colors; // Gets 'blue'

// Default values
const numbers = [1];
const [a = 10, b = 20] = numbers; // a=1, b=20

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x]; // Swap without temp variable

// Rest pattern
const fruits = ['apple', 'banana', 'orange', 'mango'];
const [firstFruit, ...remainingFruits] = fruits;

// Nested destructuring
const nested = [1, [2, 3], 4];
const [first, [second, third], fourth] = nested;

// Function return values
function getCoordinates() {
  return [12.34, 56.78];
}
const [latitude, longitude] = getCoordinates();

render(
  <div>
    <p>Colors: {firstColor}, {secondColor}, {thirdColor}</p>
    <p>Primary color: {primaryColor}</p>
    <p>Default values: a={a}, b={b}</p>
    <p>Swapped: x={x}, y={y}</p>
    <p>First fruit: {firstFruit}, Rest: {remainingFruits.join(', ')}</p>
    <p>Nested: second={second}, third={third}</p>
    <p>Coordinates: {latitude}°N, {longitude}°E</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "destructuring object",
        title: "Destructuring Object",
        content: () => (
          <>
            <p>
              Object destructuring allows unpacking properties from objects into distinct variables.
              <br />
              It provides a clean syntax for extracting multiple values from objects with pattern matching.
            </p>

            <LiveProvider
              code={`// Basic object destructuring
const user = {
  id: 42,
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

const { name, age, email } = user;

// Renaming variables
const { name: userName, email: userEmail } = user;

// Default values
const { isAdmin = false } = user;

// Nested objects
const company = {
  name: 'Tech Corp',
  address: {
    street: '123 Main St',
    city: 'San Francisco'
  }
};

const { 
  name: companyName, 
  address: { city: companyCity } 
} = company;

// Function parameters
function greet({ name, age }) {
  return \`Hello \${name}, you're \${age} years old!\`;
}

// Rest properties
const { id, ...userDetails } = user;

// Dynamic property names
const prop = 'name';
const { [prop]: dynamicName } = user;

render(
  <div>
    <p>Basic: {name}, {age}, {email}</p>
    <p>Renamed: {userName}, {userEmail}</p>
    <p>Default: isAdmin = {isAdmin.toString()}</p>
    <p>Nested: {companyName}, {companyCity}</p>
    <p>Function: {greet(user)}</p>
    <p>Rest: {JSON.stringify(userDetails)}</p>
    <p>Dynamic: {dynamicName}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "default-parameters",
        title: "Default Parameters",
        content: () => (
          <>
            <p>
              Default parameters allow you to set default values for function parameters when they are <code>undefined</code> or not provided.
              <br />
              This feature helps make functions more robust and reduces the need for parameter validation code.
            </p>

            <LiveProvider
              code={`// Basic default parameters
function greet(name = 'Guest') {
  return \`Hello, \${name}!\`;
}

// Multiple default parameters
function createUser(name, age = 18, isAdmin = false) {
  return { name, age, isAdmin };
}

// Default parameters with expressions
function getCurrentYear(offset = 0) {
  return new Date().getFullYear() + offset;
}

// Default parameters can reference previous parameters
function createPoint(x = 0, y = x * 2) {
  return { x, y };
}

// Default parameters with destructuring
function drawCircle({ radius = 1, color = 'red', x = 0, y = 0 } = {}) {
  return \`Drawing \${color} circle with radius \${radius} at (\${x},\${y})\`;
}

// Default parameters vs undefined
function example(a = 10, b = 20) {
  return a + b;
}

render(
  <div>
    <p>Basic: {greet()} vs {greet('Alice')}</p>
    <p>Multiple: {JSON.stringify(createUser('Bob'))}</p>
    <p>Expression: Next year will be {getCurrentYear(1)}</p>
    <p>Parameter reference: {JSON.stringify(createPoint(5))}</p>
    <p>Destructuring: {drawCircle({ radius: 5 })}</p>
    <p>Undefined behavior: {example(undefined, 5)} (uses default for a)</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "rest",
        title: "Rest Operator",
        content: () => (
          <>
            <p>
              The rest operator (<code>...</code>) allows you to represent an indefinite number of arguments as an array.
              <br />
              It can be used in function parameters to capture remaining arguments, or in destructuring to collect remaining elements.
            </p>

            <LiveProvider
              code={`// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Combining with regular parameters
function joinStrings(separator, ...strings) {
  return strings.join(separator);
}

// Rest operator in array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...others] = colors;

// Rest operator in object destructuring
const user = {
  id: 101,
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};
const { id, ...userDetails } = user;

// Practical use case: logging with metadata
function logWithContext(message, ...context) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${message}\`, ...context);
}

// Rest operator vs arguments object
function compareApproaches(a, b) {
  return {
    argumentsLength: arguments.length,
    restLength: [...arguments].length
  };
}

render(
  <div>
    <p>Sum: {sum(1, 2, 3, 4)}</p>
    <p>Joined: {joinStrings('-', 'hello', 'world', '!')}</p>
    <p>Colors: Primary - {primary}, Others - {others.join(', ')}</p>
    <p>User Details: {JSON.stringify(userDetails)}</p>
    <p>Approach Comparison: {JSON.stringify(compareApproaches(1, 2, 3))}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "spread",
        title: "Spread Operator",
        content: () => (
          <>
            <p>
              The spread operator (<code>...</code>) allows an iterable (like an array or object) to be expanded in places where multiple elements/arguments are expected.
              <br />
              It's essentially the opposite of the rest operator - while rest collects, spread spreads out.
            </p>

            <LiveProvider
              code={`// Spread with arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'mango'];

// Copying arrays (shallow copy)
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

// Concatenating arrays
const veggies = ['carrot', 'potato'];
const food = [...fruits, ...veggies];

// Spread with function arguments
const numbers = [5, 10, 15];
Math.max(...numbers); // Equivalent to Math.max(5, 10, 15)

// Spread with objects (ES2018+)
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26, city: 'New York' };

// Merging objects
const defaults = { theme: 'light', fontSize: 16 };
const userPrefs = { fontSize: 18 };
const merged = { ...defaults, ...userPrefs };

// Spread with strings
const greeting = "Hello";
const chars = [...greeting]; // ['H', 'e', 'l', 'l', 'o']

// Practical use cases
function addToCart(item, ...extras) {
  return { item, extras };
}
const cartItem = addToCart('shirt', ...['large', 'blue']);

// Important note about shallow copying
const nestedObj = { a: { b: 1 } };
const shallowCopy = { ...nestedObj };
shallowCopy.a.b = 2; // Affects both objects

render(
  <div>
    <p>More Fruits: {moreFruits.join(', ')}</p>
    <p>Copied Array: {copiedArray.join(', ')}</p>
    <p>All Food: {food.join(', ')}</p>
    <p>Max Number: {Math.max(...numbers)}</p>
    <p>Updated User: {JSON.stringify(updatedUser)}</p>
    <p>Merged Settings: {JSON.stringify(merged)}</p>
    <p>String Spread: {chars.join('-')}</p>
    <p>Cart Item: {JSON.stringify(cartItem)}</p>
    <p>Shallow Copy Warning: nestedObj.a.b = {nestedObj.a.b}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "enhanced-object-literals",
        title: "Enhanced Object Literals",
        content: () => (
          <>
            <p>Enhanced Object Literals introduce several syntactic improvements for object creation in ES6+, making object declarations more concise and expressive.</p>

            <LiveProvider
              code={`// Property shorthand (same name)
const name = 'Alice';
const age = 25;
const user = { name, age }; // Instead of { name: name, age: age }

// Method shorthand
const calculator = {
  add(a, b) {  // Instead of add: function(a, b)
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// Computed property names
const dynamicKey = 'email';
const contact = {
  [dynamicKey]: 'alice@example.com',
  ['user_' + age]: 'Special user' // Dynamic property name
};

// Object spread (ES2018)
const defaults = { theme: 'light', fontSize: 16 };
const userSettings = { ...defaults, fontSize: 18 };

// Prototype setting
const person = {
  greet() {
    return \`Hello, \${this.name}!\`;
  }
};
const alice = {
  __proto__: person,  // Sets prototype
  name: 'Alice'
};

// super() calls in methods
const parent = {
  greet() {
    return 'Hello from parent!';
  }
};
const child = {
  __proto__: parent,
  greet() {
    return super.greet() + ' And from child!';
  }
};

// Practical example combining features
function createUser(id, name, email) {
  return {
    id,
    name,
    email,
    createdAt: new Date(),
    getProfile() {
      return \`\${this.name} (\${this.email})\`;
    },
    ['perm_' + id]: 'read-write'
  };
}

render(
  <div>
    <p>User: {JSON.stringify(user)}</p>
    <p>Calculator: 2 + 3 = {calculator.add(2, 3)}</p>
    <p>Contact: {JSON.stringify(contact)}</p>
    <p>Settings: {JSON.stringify(userSettings)}</p>
    <p>Prototype: {alice.greet()}</p>
    <p>Inheritance: {child.greet()}</p>
    <p>Created User: {JSON.stringify(createUser(101, 'Bob', 'bob@example.com'))}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "for-of",
        title: "For...of Loop",
        content: () => (
          <>
            <p>
              The <code>for...of</code> loop creates a loop iterating over iterable objects (arrays, strings, maps, sets, etc.), providing a cleaner syntax compared to traditional <code>for</code> loops.
            </p>

            <LiveProvider
              code={`// Basic array iteration
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit);
}

// String iteration
const message = 'Hello';
for (const char of message) {
  console.log(char);
}

// Set iteration
const uniqueNumbers = new Set([1, 2, 2, 3, 4]);
for (const num of uniqueNumbers) {
  console.log(num);
}

// Map iteration
const userMap = new Map([
  ['name', 'Alice'],
  ['age', 25]
]);
for (const [key, value] of userMap) {
  console.log(\`\${key}: \${value}\`);
}

// NodeList iteration (DOM elements)
const elements = document.querySelectorAll('div');
for (const element of elements) {
  console.log(element);
}

// Arguments object iteration
function sumAll() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}

// Custom iterable object
const countToFive = {
  *[Symbol.iterator]() {
    for (let i = 1; i <= 5; i++) {
      yield i;
    }
  }
};
for (const num of countToFive) {
  console.log(num);
}

// Comparison with for...in and forEach
const arr = [10, 20, 30];
arr.foo = 'bar';

// for...in (iterates over enumerable properties)
let forInResult = [];
for (const key in arr) {
  forInResult.push(key);
}

// forEach (only array elements)
let forEachResult = [];
arr.forEach(item => forEachResult.push(item));

// for...of (only iterable values)
let forOfResult = [];
for (const item of arr) {
  forOfResult.push(item);
}

render(
  <div>
    <h4>Iteration Results:</h4>
    <p>for...in (includes properties): {forInResult.join(', ')}</p>
    <p>forEach (only elements): {forEachResult.join(', ')}</p>
    <p>for...of (only iterable values): {forOfResult.join(', ')}</p>
    <p>Sum of 1, 2, 3: {sumAll(1, 2, 3)}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>
          </>
        ),
      },
      {
        id: "classes",
        title: "Classes",
        content: () => (
          <>
            <p>ES6 Classes provide syntactic sugar over JavaScript's prototype-based inheritance, offering a cleaner syntax for creating objects and dealing with inheritance.</p>

            <LiveProvider
              code={`// Basic class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    return \`Hello, my name is \${this.name}!\`;
  }

  // Static method
  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Call parent constructor
    this.major = major;
  }

  // Method overriding
  greet() {
    return \`\${super.greet()} I'm studying \${this.major}.\`;
  }

  // New method
  study() {
    return \`\${this.name} is studying!\`;
  }
}

// Getters and Setters
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}

// BankAccount without private fields (works in all environments)
class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}

// Practical example
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  static createSquare(side) {
    return new Rectangle(side, side);
  }
}

// Using the classes
const alice = new Person('Alice', 25);
const bob = new Student('Bob', 20, 'Computer Science');
const temp = new Temperature(25);
const account = new BankAccount();
account.deposit(100);
const rect = new Rectangle(5, 10);
const square = Rectangle.createSquare(5);

render(
  <div>
    <h4>Class Examples:</h4>
    <p>Person: {alice.greet()}</p>
    <p>Student: {bob.greet()}</p>
    <p>Temperature: {temp.celsius}°C = {temp.fahrenheit}°F</p>
    <p>Rectangle Area: {rect.area}</p>
    <p>Square Area: {square.area}</p>
    <p>Age Comparison: {Person.compareAges(alice, bob)}</p>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Key Concepts:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <code>constructor</code> for initialization
                </li>
                <li>
                  <code>extends</code> for inheritance
                </li>
                <li>
                  <code>super</code> to call parent methods
                </li>
                <li>Static methods called on the class itself</li>
                <li>Getters/setters for computed properties</li>
                <li>Method shorthand syntax</li>
                <li className="text-gray-500">Note: Private fields (#) work in modern browsers but may not work in some live editors</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "promises",
        title: "Promises",
        content: () => (
          <>
            <p>
              Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
              <br />
              They provide a cleaner alternative to callback-based asynchronous programming.
            </p>

            <LiveProvider
              code={`// Basic Promise creation
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    success ? resolve('Data fetched successfully!') : reject('Error: Failed to fetch data');
  }, 1000);
});

// Consuming Promises with .then() and .catch()
fetchData
  .then(result => {
    console.log(result);
    return 'Processed: ' + result;
  })
  .then(processedResult => {
    console.log(processedResult);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Operation completed (success or failure)');
  });

// Promise.all() - Wait for all promises to resolve
const promise1 = Promise.resolve('First');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 500));
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json());

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log('All promises resolved:', values);
  })
  .catch(error => {
    console.error('One promise rejected:', error);
  });

// Promise.race() - Get first settled promise
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject('Request timed out'), 2000));
const apiCall = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json());

Promise.race([apiCall, timeout])
  .then(data => {
    console.log('First promise resolved:', data);
  })
  .catch(error => {
    console.error('First promise rejected:', error);
  });

// Async/await syntax (built on Promises)
async function getUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log('User data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Practical example: Sequential vs parallel execution
async function loadResources() {
  // Sequential
  const start = Date.now();
  const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const res2 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
  console.log('Sequential time:', Date.now() - start);
  
  // Parallel
  const parallelStart = Date.now();
  const [post, comment] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/2'),
    fetch('https://jsonplaceholder.typicode.com/comments/2')
  ]);
  console.log('Parallel time:', Date.now() - parallelStart);
}

render(
  <div>
    <p>Check the browser console for Promise examples output</p>
    <button 
      onClick={() => getUserData()}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
    >
      Fetch User Data
    </button>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
                <div className="text-red-600 p-2">
                  <LiveError />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Key Concepts:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Promise states: <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>
                </li>
                <li>
                  <code>.then()</code> for success cases, <code>.catch()</code> for errors
                </li>
                <li>
                  <code>.finally()</code> for cleanup regardless of outcome
                </li>
                <li>
                  <code>Promise.all()</code> for parallel execution
                </li>
                <li>
                  <code>Promise.race()</code> for timeout patterns
                </li>
                <li>Async/await syntactic sugar over Promises</li>
                <li>
                  Error handling with <code>try/catch</code>
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "modules",
        title: "Modules (Import / Export)",
        content: () => (
          <>
            <p>ES6 Modules let you split your code into separate files that can import and export functionality.</p>

            <LiveProvider
              code={`// math.js - Exporting
export const PI = 3.14;

export function square(x) {
  return x * x;
}

export default function add(a, b) {
  return a + b;
}

// app.js - Importing
import add, { PI, square } from './math';

console.log(PI);           // 3.14
console.log(square(5));    // 25
console.log(add(2, 3));    // 5

// Alternative import styles
import * as math from './math';
console.log(math.PI);      // 3.14

// React component example
// Button.js
import React from 'react';

export default function Button({ text }) {
  return <button>{text}</button>;
}

// App.js
import Button from './Button';

function App() {
  return <Button text="Click me" />;
}

render(
  <div>
    <h4>Module Examples:</h4>
    <p>Check your browser console for output</p>
    <div className="mt-4">
      <App />
    </div>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Simple Rules:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Use <code>export</code> to make things available
                </li>
                <li>
                  Use <code>import</code> to use things from other files
                </li>
                <li>
                  One <code>export default</code> per file (import without curly braces)
                </li>
                <li>
                  Multiple regular <code>exports</code> per file (import with curly braces)
                </li>
                <li>
                  File extensions (<code>.js</code>) are usually required
                </li>
              </ol>
            </div>
          </>
        ),
      },
      {
        id: "symbols",
        title: "Symbols",
        content: () => (
          <>
            <p>
              Symbols are unique and immutable values used mainly as object property identifiers.
              <br />
              They help prevent naming collisions in objects.
            </p>

            <LiveProvider
              code={`// Creating symbols
const id = Symbol('user_id');
const id2 = Symbol('user_id'); // Different from id

// Using as object property
const user = {
  name: 'Alice',
  [id]: 12345  // Symbol as key
};

console.log(user[id]); // 12345
console.log(user.id);  // undefined (can't access with dot notation)

// Symbols are unique
console.log(id === id2); // false (even with same description)

// Well-known symbols
const numbers = [1, 2, 3];
numbers[Symbol.iterator] = function*() {
  for (let i = this.length - 1; i >= 0; i--) {
    yield this[i];
  }
};

console.log([...numbers]); // [3, 2, 1] (reversed iteration)

// Practical example: Preventing property conflicts
const LOG_LEVEL = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};

function log(message, level = LOG_LEVEL.INFO) {
  const prefix = level === LOG_LEVEL.DEBUG ? 'DEBUG: ' :
                 level === LOG_LEVEL.WARN ? 'WARNING: ' : '';
  console.log(prefix + message);
}

log('This is info'); // Normal log
log('Debugging', LOG_LEVEL.DEBUG); // Debug log
log('Warning!', LOG_LEVEL.WARN); // Warning log

render(
  <div>
    <h4>Symbol Examples:</h4>
    <p>Check your browser console for output</p>
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <p>User ID Symbol: {user[id].toString()}</p>
      <p>Reversed Array: {JSON.stringify([...numbers])}</p>
    </div>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Key Points:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Every Symbol() call creates a <strong>unique</strong> value
                </li>
                <li>
                  Symbols are <strong>not enumerable</strong> in for...in loops
                </li>
                <li>
                  Used for <strong>meta-programming</strong> (like Symbol.iterator)
                </li>
                <li>
                  Great for <strong>constants</strong> that need uniqueness
                </li>
                <li>Description parameter is just for debugging</li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
  es2016: {
    name: "ES2016 (ES7)",
    features: [
      {
        id: "array-includes",
        title: "Array.prototype.includes()",
        content: () => (
          <>
            <p>
              The <code>includes()</code> method checks if an array contains a specific value, returning <code>true</code> or <code>false</code>.
              <br />
              It's a simpler alternative to <code>indexOf()</code> for existence checks.
            </p>

            <LiveProvider
              code={`// Basic usage
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false

// Case sensitivity
console.log(fruits.includes('Apple'));  // false (case matters)

// FromIndex parameter
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(2, 2));    // false (search starts at index 2)
console.log(numbers.includes(2, 1));    // true

// NaN handling (unlike indexOf)
const mixed = [1, NaN, 3];
console.log(mixed.includes(NaN));       // true
console.log(mixed.indexOf(NaN));        // -1 (can't find NaN)

// Practical examples
const cart = ['shirt', 'pants', 'shoes'];

function isInCart(item) {
  return cart.includes(item.toLowerCase());
}

const userRoles = ['admin', 'editor', 'viewer'];

function hasPermission(role) {
  return userRoles.includes(role);
}

render(
  <div>
    <h4>includes() Examples:</h4>
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <p>Fruits has 'banana': {fruits.includes('banana').toString()}</p>
      <p>Numbers has 2 after index 1: {numbers.includes(2, 1).toString()}</p>
      <p>Array can find NaN: {mixed.includes(NaN).toString()}</p>
      <p>Is 'Shirt' in cart? {isInCart('Shirt').toString()}</p>
      <p>Is 'admin' in roles? {hasPermission('admin').toString()}</p>
    </div>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">When to Use includes():</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  When you only need to <strong>check existence</strong> (not position)
                </li>
                <li>
                  When checking for <strong>NaN</strong> in an array
                </li>
                <li>
                  For <strong>readability</strong> over indexOf()
                </li>
                <li>
                  With <strong>case-sensitive</strong> string searches
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Comparison with indexOf():</h4>
              <div className="bg-white p-3 rounded border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Method</th>
                      <th className="text-left p-2">Returns</th>
                      <th className="text-left p-2">Finds NaN?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">
                        <code>includes()</code>
                      </td>
                      <td className="p-2">true/false</td>
                      <td className="p-2">✅ Yes</td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <code>indexOf()</code>
                      </td>
                      <td className="p-2">index or -1</td>
                      <td className="p-2">❌ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "exponentiation-operator",
        title: "Exponentiation Operator (**)",
        content: () => (
          <>
            <p>
              The exponentiation operator (<code>**</code>) raises a number to a power, replacing <code>Math.pow()</code> with cleaner syntax.
            </p>

            <LiveProvider
              code={`// Basic usage
console.log(2 ** 3);  // 8 (2 to the 3rd power)
console.log(3 ** 2);  // 9 (3 squared)

// With variables
const base = 5;
const exponent = 4;
console.log(base ** exponent); // 625

// Fractional exponents
console.log(16 ** 0.5); // 4 (square root)
console.log(8 ** (1/3)); // 2 (cube root)

// Negative exponents
console.log(2 ** -3); // 0.125 (1 / (2³))

// Assignment version
let num = 2;
num **= 4; // Same as num = num ** 4
console.log(num); // 16

// Comparison with Math.pow()
console.log(2 ** 3 === Math.pow(2, 3)); // true

// Practical examples
function calculateCompound(principal, rate, years) {
  return principal * (1 + rate) ** years;
}

function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

render(
  <div>
    <h4>Exponentiation Examples:</h4>
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <p>2<sup>3</sup> = {2 ** 3}</p>
      <p>5<sup>4</sup> = {base ** exponent}</p>
      <p>√16 = {16 ** 0.5}</p>
      <p>Area of circle (r=5): {getCircleArea(5).toFixed(2)}</p>
    </div>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cleaner syntax than <code>Math.pow(base, exponent)</code>
                </li>
                <li>Works with integers, fractions, and negative numbers</li>
                <li>
                  Has an assignment version (<code>**=</code>)
                </li>
                <li>
                  Right-associative: <code>2 ** 3 ** 2</code> equals <code>2 ** (3 ** 2)</code>
                </li>
                <li>
                  Returns <code>NaN</code> for invalid operations like <code>(-2) ** 0.5</code>
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">When to Use:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-3 rounded border">
                  <span className="font-mono bg-green-100 px-2 py-1 rounded">**</span>
                  <ul className="mt-2 pl-5 list-disc text-sm">
                    <li>Simple power operations</li>
                    <li>Readable mathematical code</li>
                    <li>When writing formulas</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded">Math.pow()</span>
                  <ul className="mt-2 pl-5 list-disc text-sm">
                    <li>Legacy browser support</li>
                    <li>When exponent is variable</li>
                    <li>Very large exponents</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  es2017: {
    name: "ES2017 (ES8)",
    features: [
      {
        id: "async-await",
        title: "async / await",
        content: () => (
          <>
            <p>
              <code>async/await</code> provides a cleaner way to work with Promises, making asynchronous code look and behave more like synchronous code.
            </p>

            <LiveProvider
              code={`// Basic async function
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Using with arrow functions
const fetchUser = async (userId) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
  return await response.json();
};

// Practical example with loading state
async function loadData() {
  const output = document.getElementById('output-area');
  output.innerHTML = '<p>Loading...</p>';
  
  try {
    const todo = await fetchData();
    const user = await fetchUser(todo.userId);
    
    output.innerHTML = \`
      <h3>\${user.name}</h3>
      <p>\${todo.title}</p>
      <p>Completed: \${todo.completed ? '✅' : '❌'}</p>
    \`;
  } catch (error) {
    output.innerHTML = '<p style="color: red;">Failed to load data</p>';
  }
}

render(
  <div>
    <h4>Async/Await Examples:</h4>
    <button 
      onClick={loadData}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
    >
      Load Data
    </button>
    <div className="mt-4 p-4 bg-gray-100 rounded" id="output-area">
      {/* Output will appear here */}
    </div>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Key Points:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <code>async</code> makes a function return a Promise
                </li>
                <li>
                  <code>await</code> waits for a Promise to resolve
                </li>
                <li>
                  Always use <code>try/catch</code> for error handling
                </li>
                <li>
                  Much cleaner than chaining <code>.then()</code> calls
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "object-values",
        title: "Object.values()",
        content: () => (
          <>
            <p>
              <code>Object.values()</code> returns an array of a given object's own enumerable property values, in the same order as a <code>for...in</code> loop would provide.
            </p>

            <LiveProvider
              code={`// Basic usage
const person = {
  name: 'Alice',
  age: 25,
  profession: 'Developer'
};

const values = Object.values(person);
console.log(values); // ['Alice', 25, 'Developer']

// With different value types
const mixedObj = {
  string: 'hello',
  number: 42,
  boolean: true,
  array: [1, 2, 3],
  nested: { a: 1 }
};
console.log(Object.values(mixedObj)); 
// ['hello', 42, true, [1, 2, 3], {a: 1}]

// Practical examples
function getTotalCost(items) {
  return Object.values(items).reduce((total, price) => total + price, 0);
}

const shoppingCart = {
  laptop: 999,
  mouse: 25,
  keyboard: 45
};
console.log('Total:', getTotalCost(shoppingCart)); // 1069

// With class instances
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}
const admin = new User('Bob', 'Admin');
console.log(Object.values(admin)); // ['Bob', 'Admin']

// Order of values
const orderedObj = {
  10: 'ten',
  1: 'one',
  2: 'two'
};
console.log(Object.values(orderedObj)); // ['one', 'two', 'ten']

render(
  <div>
    <h4>Object.values() Examples:</h4>
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <p>Person values: {JSON.stringify(Object.values(person))}</p>
      <p>Mixed object values: {JSON.stringify(Object.values(mixedObj))}</p>
      <p>User instance values: {JSON.stringify(Object.values(admin))}</p>
      <p>Number-keyed object order: {JSON.stringify(Object.values(orderedObj))}</p>
    </div>
  </div>
);`}
              noInline
            >
              <div className="rounded overflow-hidden border border-gray-300 bg-white">
                <LiveEditor className="bg-gray-900 text-white p-4 text-sm font-mono" />
                <div className="bg-gray-100 p-4 border-t">
                  <strong>Output:</strong>
                  <LivePreview />
                </div>
              </div>
            </LiveProvider>

            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Returns <strong>only own properties</strong> (not inherited ones)
                </li>
                <li>
                  Returns values in <strong>same order</strong> as <code>for...in</code>
                </li>
                <li>
                  Works with <strong>all value types</strong> (primitives, objects, arrays)
                </li>
                <li>
                  Ignores <strong>non-enumerable</strong> properties
                </li>
                <li>
                  Useful for <strong>object transformation</strong> and calculations
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Comparison:</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-white p-3 rounded border">
                  <code className="font-bold">Object.values()</code>
                  <p>Array of values</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="font-bold">Object.keys()</code>
                  <p>Array of keys</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="font-bold">Object.entries()</code>
                  <p>Array of [key, value] pairs</p>
                </div>
              </div>
            </div>
          </>
        ),
      },
      { id: "object-entries", title: "Object.entries()" },
      { id: "string-padding", title: "String padding (padStart, padEnd)" },
      { id: "trailing-commas", title: "Trailing commas in function parameter lists" },
    ],
  },
  es2018: {
    name: "ES2018 (ES9)",
    features: [
      { id: "async-iteration", title: "Asynchronous Iteration (for await...of)" },
      { id: "object-rest-spread", title: "Rest/Spread di Object" },
      { id: "promise-finally", title: "Promise.prototype.finally()" },
      { id: "regexp-improvements", title: "RegExp Improvements" },
    ],
  },
  es2019: {
    name: "ES2019 (ES10)",
    features: [
      { id: "array-flat", title: "Array.prototype.flat() dan flatMap()" },
      { id: "object-fromentries", title: "Object.fromEntries()" },
      { id: "optional-catch", title: "Optional catch binding" },
      { id: "string-trim", title: "String.trimStart() / trimEnd()" },
      { id: "symbol-description", title: "Symbol.description" },
    ],
  },
  es2020: {
    name: "ES2020 (ES11)",
    features: [
      { id: "optional-chaining", title: "Optional Chaining (?.)" },
      { id: "nullish-coalescing", title: "Nullish Coalescing (??)" },
      { id: "bigint", title: "BigInt" },
      { id: "promise-allsettled", title: "Promise.allSettled()" },
      { id: "global-this", title: "globalThis" },
      { id: "import-meta", title: "import.meta" },
      { id: "dynamic-import", title: "Dynamic Import" },
    ],
  },
  es2021: {
    name: "ES2021 (ES12)",
    features: [
      { id: "logical-assignment", title: "Logical Assignment Operators" },
      { id: "numeric-separators", title: "Numeric Separators" },
      { id: "string-replaceall", title: "String.prototype.replaceAll()" },
      { id: "weakref", title: "WeakRef" },
      { id: "finalization-registry", title: "FinalizationRegistry" },
    ],
  },
  es2022: {
    name: "ES2022 (ES13)",
    features: [
      { id: "class-fields", title: "Class Fields (Public & Private)" },
      { id: "static-class", title: "Static Class Fields & Methods" },
      { id: "private-methods", title: "Private Methods in Class" },
      { id: "at-method", title: "at() Method" },
      { id: "object-hasown", title: "Object.hasOwn()" },
      { id: "top-level-await", title: "Top-Level Await" },
    ],
  },
  es2023: {
    name: "ES2023 (ES14)",
    features: [
      { id: "array-findlast", title: "Array.prototype.findLast() dan findLastIndex()" },
      { id: "symbol-weakmap", title: "Symbol as WeakMap key" },
      { id: "change-array-copy", title: "Change Array by Copy" },
      { id: "hashbang", title: "Hashbang support" },
    ],
  },
  es2024: {
    name: "ES2024 (ES15)",
    features: [
      { id: "set-methods", title: "Set.prototype methods" },
      { id: "array-grouping", title: "Array Grouping" },
      { id: "regexp-v-flag", title: "RegExp v flag" },
      { id: "import-attributes", title: "Import attributes" },
    ],
  },
};

export const versions = [
  { id: "es2015", name: "ES2015 (ES6)" },
  { id: "es2016", name: "ES2016 (ES7)" },
  { id: "es2017", name: "ES2017 (ES8)" },
  { id: "es2018", name: "ES2018 (ES9)" },
  { id: "es2019", name: "ES2019 (ES10)" },
  { id: "es2020", name: "ES2020 (ES11)" },
  { id: "es2021", name: "ES2021 (ES12)" },
  { id: "es2022", name: "ES2022 (ES13)" },
  { id: "es2023", name: "ES2023 (ES14)" },
  { id: "es2024", name: "ES2024 (ES15)" },
];

export default esFeatures;
