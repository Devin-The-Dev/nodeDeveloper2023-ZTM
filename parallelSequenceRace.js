// These are 3 different "techniques" to do asyncronous functions

// Setting an item (a letter) with a delat time to explain how each of these work
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// Parallel asycronous functions run at the same time. The output is returned when everything (the array) is complete
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`
}

// Race async functions also run at the same time, but it finishes when one promise is complete
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

// Sequence async functions run in sequential order. In this context, we run in the other of a, b, and then c
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done: ${output1} ${output2} ${output3}`
}

// This is to show which of these techniques finishes first. The order doesn't matter because they're all asyncronous functions
sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)

// When you run the results:
// Race finishes first because it's just waiting for one of hte promises to finish
// Next is parallel because all promises are running at the same time. It is displayed when all promises are complete
// Last is sequence because the next promise starts when the one before finishes