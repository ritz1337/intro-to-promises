// In what order will the following fire?

setTimeout( () => { console.log(1) }, 5000);

setTimeout( () => { console.log(2) }, 2000);

setTimeout( () => { console.log(3) }, 1000);

// What does the following return?
const randomTime = () => Math.floor( Math.random() * 5000);

// In what order will the following fire?
setTimeout( () => { console.log(1) }, randomTime() );

setTimeout( () => { console.log(2) }, randomTime() );

setTimeout( () => { console.log(3) }, randomTime() );

// When will the number be logged?
const randomWait = (number) => {
  setTimeout( () => { console.log(number) }, randomTime() );
}

