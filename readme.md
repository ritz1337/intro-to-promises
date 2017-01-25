# Node, Async and Promises 

The Promise object is used for asynchronous computations. 

# Learning Objectives

- Understand what a promise is
- Use then and catch to handle errors
- Utilize libraries that return promises
- Create a promise

## var promise = new Promise();

A Promise represents a value which may be available now, or in the future, or never.
You can also use promises to improve code that was written with callbacks.

A Promise is in one of these states:

- pending: initial state, not fulfilled or rejected.
- fulfilled: the operation completed successfully.
- rejected: the operation failed.

## Vocab

- Deferred - a unit of work that hasn't completed yet
- Promise - A Promise is an object that represents the result of an asynchronous function call
- Resolve - a function that gets called to fulfill a promise
- Reject - a function that gets called to reject a promise
- Then - a method that returns a promise and takes a callback function
- Catch - a method that returns a promise and deals with rejections only

# Syntax

# Using a Promise

Many libraries return promises

# Creating a Promise

```js
var promise = new Promise( (resolve, reject) => {
    resolve(5);
});

// Using a promise
promise.then( (number) => {
    return "resolve gave us " + number;
})
.then( (message) => {
    console.log(message);
    throw 'error!';
})
.catch( (err) => {
    console.log("catch gave us " + err);
})
.then( () => {
    console.log('goodbye');
    process.exit();
});
```

## Activities
- [activities](activities.md)

# Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://www.promisejs.org/
