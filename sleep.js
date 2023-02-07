
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


async function run() {
  await sleep(1000);
  console.log('hello');
  await sleep(1000);
  console.log('world');
  
}

run();