// What is React? https://tkssharma.gitbook.io/react-training/

// React is a library by Facebook that abstracts DOM manipulation. https://www.w3schools.com/js/js_htmldom.asp
// It has a declarative API that lets you define WHAT to do instead of imperatively define the HOW.
// It is a set of helpers to:
// - create DOM elements
// - create a VIRTUAL DOM (a tree-like copy of the elements of the DOM)
// - keep track of changing state (diffing algorithm)
// - write changes to the VIRTUAL DOM
// - RENDER elements to the DOM (reconciliation)

// It follow strict IMMUTABILITY
// It has a one-way data flow from parent to children (also called one-way binding), this helps components to be simple and predictable.
// Unlike managing state in a unidirectional way, you can handle the state all in one place
// if wanted(not recommended). You could have the parent be a central store for your state,
// pass down callbacks (actions) to children to manipulate state.

// What triggers re-renders?
// - changes to state (setState)

// The good part is that it's simply Javascript.
// It used to make use of class components that exposed life-cycles and class syntax (use of the this keyword)
// It is now fully functional (with the help of closures, aka functions that return inner values with functions, also called HOOKS)
// HOOKS let you define state in functional components and retain state through re-renders, which was not possible up until a year ago.

// view = f(state)
