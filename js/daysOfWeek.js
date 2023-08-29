export let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export let currentDate = new Date();

let currentDayOfWeek = days[currentDate.getDay()];

let nextDayOfWeek = days[(currentDate.getDay()+1)%7];

let thirdDayOfWeek = days[(currentDate.getDay()+2)%7]; 

let fourthDayOfWeek = days[(currentDate.getDay()+3)%7];

let fifthDayOfWeek = days[(currentDate.getDay()+4)%7];

let sixthDayOfWeek = days[(currentDate.getDay()+5)%7];



console.log(currentDayOfWeek);

console.log(nextDayOfWeek);

console.log(thirdDayOfWeek);

console.log(fourthDayOfWeek);

console.log(fifthDayOfWeek );

console.log(sixthDayOfWeek);