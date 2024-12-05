// What are considered side effects?

// Function are considered pure when:
// - given the same input will always return the same output
// - they do not have side effects

// And they have a special property:
// - referential transparency (you can replace a function call with its resulting value without changing the meaning of the program)

// Side effects are whatever makes the output unpredictable, like:
// - logging to the console
// - writing to the screen
// - performing a mutation
// - modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
// - writing to a file
// - writing to the network
// - triggering any external process
// - calling any other functions with side-effects

// So anything that breaks determinism:
// - non-determinism = parallel processing (and concurrency) + mutable state
