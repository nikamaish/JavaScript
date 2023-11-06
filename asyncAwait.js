/* we can make function as a async and in that we can make that promise await
it's hard to understand that how many .then we have used

JavaScript is a single-threaded programming language which means that only one task can run at a time. 
It has a call stack and all the code is executed inside this call stack. i.e js is synchronous


The keyword async means asynchronous and it helps function to return promise, the keyword await is used inside 
async functions which makes program until the Promise resolves 
*/

async function aish() {
  let DelhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 1000);
  });

  let PuneWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 3000);
  });

  // DelhiWeather.then(alert)
  // PuneWeather.then(alert) //// this alert will show after 3 sec

  console.log("Fetching Delhi Wheather please wait....");
  let delhiw = await DelhiWeather;

  console.log("Fetched Delhi weather: " + delhiw);
  //basically here we used await so promise will be first resolved in other words untill it fullfilled then only it will go forward

  console.log("Fetching Pune Wheather please wait....");
  let punew = await PuneWeather;
  console.log("Fetched Pune weather: " + punew);

  return [delhiw, punew];
}

console.log("Welcome to weather control room");
aish();
console.log(aish());

aish().then((value)=>{
  console.log(value)   
})
