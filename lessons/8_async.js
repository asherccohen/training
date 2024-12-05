// How Does Asynchronous JavaScript Work?

const myPromise = function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
};

// myPromise.then(response => {}).catch()

const myAsycnFunc = async () => {};

async function asyncCall() {
  console.log('calling');

  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

// https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
