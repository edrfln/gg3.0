const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

wait(2000).then(() => console.log("2"));
wait(3000).then(() => console.log("3"));
wait(4000).then(() => console.log("4"));
wait(1000).then(() => console.log("1"));
