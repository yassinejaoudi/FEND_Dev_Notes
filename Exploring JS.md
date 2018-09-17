### Lesson 2: Focus:

### Lesson 7: Objects in depth:

#### Introduction:

In JavaScript, an object is an unordered collection of properties. Each property consists of a key/value pair, and can reference either a primitive (e.g., strings, numbers, booleans, etc.) or another object. Unlike elements in an array, which are accessed by a numeric index, properties in objects are accessed by their key name using either square bracket notation or dot notation. For a closer look at object fundamentals, check out Intro to JavaScript linked below.

Now that we know how to read existing properties in an object, how do we go about creating new properties? What about modifying existing properties, or even adding and removing properties altogether? We'll answer all this and more in the very next section!

#### Create and modify properties:

Objects are commonly created with **literal notation**, and can include properties that point to functions called methods. Methods are accessed the same way as other properties of objects, and can be invoked the same way as regular functions, except they automatically have access to the other properties of their parent object.

By default, objects are mutable (with a few exceptions), so data within them can be altered. New properties can be added, and existing properties can be modified by simply specifying the property name and assigning (or re-assigning) a value. Additionally, properties and methods of an object can be deleted as well with the delete operator, which directly mutates the object.

We've modified objects quite a bit in this section, and even added new methods into them. In the very next section, we'll take a closer look at invoking these methods, as well as how these methods can directly access and modify an object itself!

#### Invoking object method:

A **method** is a function property of an object. It is accessed the same way as any other property of the object (i.e., using dot notation or square bracket notation), and is invoked the same way as a regular function outside of an object (i.e., adding parentheses to the end of the expression).

Since an object is a collection of data and the means to operate on that data, a method can access the object it was called on using the special `this` keyword. The value of `this` is determined when a method is invoked, and its value is the object on which the method was called. Since `this` is a reserved word in JavaScript, its value cannot be used as an identifier. Feel free to check out the links below for an additional look at methods and their relationship with `this`.

We've spent a bit of time on `this` inside objects, but did you know that the value of `this` can have different meanings outside an object? In the next section, we'll take a close look at globals, their relationship with `this`, and the implications of using them.

#### Beware of Globals:

Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object!

Only declaring variables with the `var` keyword will add them to the `window` object. If you declare a variable outside of a function with either `let` or `const`, it will not be added as a property to the `window` object.

The `window` object is provided by the browser and is not part of the JavaScript language or specification. Any global variable declarations (i.e., those that use `var`) or global function declarations are added as properties to this `window` object. Excessive use of global variables is not a good practice, and can cause unexpected problems to accurately-written code.

Whether you're working with the `window` object, or with an object you create yourself, recall that all objects are made up of key/value pairs. In the next section, we'll check out how to extract these individual keys or values!

#### Extracting properties or values:

The Object() constructor function has access to several methods to aid in development. To extract property names and values from an object, we can use:

* `Object.keys()` returns an array of a given object's own keys (property names).
* `Object.values()` returns an array of a given object's own values (property values).
