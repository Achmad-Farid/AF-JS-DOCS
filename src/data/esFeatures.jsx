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
      { id: "destructuring object", title: "Destructuring Object" },
      { id: "default-parameters", title: "Default Parameters" },
      { id: "rest-spread", title: "Rest & Spread Operator" },
      { id: "enhanced-object-literals", title: "Enhanced Object Literals" },
      { id: "for-of", title: "For...of Loop" },
      { id: "classes", title: "Classes" },
      { id: "promises", title: "Promises" },
      { id: "modules", title: "Modules (Import / Export)" },
      { id: "symbols", title: "Symbols" },
    ],
  },
  es2016: {
    name: "ES2016 (ES7)",
    features: [
      { id: "array-includes", title: "Array.prototype.includes()" },
      { id: "exponentiation-operator", title: "Exponentiation Operator (**)" },
    ],
  },
  es2017: {
    name: "ES2017 (ES8)",
    features: [
      { id: "async-await", title: "async / await" },
      { id: "object-values", title: "Object.values()" },
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
