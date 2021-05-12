 // time Methods
 const curTime = new Date();
 // how to get the indivisual time
 console.log(curTime.getTime());
 // the getTime() method returns the number of milliseconds since  January 1, 1970
 console.log(curTime.getHours());
 // The getHours() method return the hours of a day  date as a number 0 - 23
 console.log(curTime.getMinutes());
 console.log(curTime.getSeconds());
 console.log(curTime.setHours(5));
 console.log(curTime.getMilliseconds());

 // how to set the indivisual Time.
 let curTime1 = new Date();
 console.log(curTime1.setTime());
 console.log(curTime1.setHours(5));
 console.log(curTime1.setMinutes(5));
 console.log(curTime1.setSeconds(5));
 console.log(curTime1.setMilliseconds(5));