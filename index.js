/*ex1*/
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() +1).padStart(2, '0'); // Months are zero-based
const day = String(today.getDate()).padStart(2, '0');
const formattedDate1= `${month}-${day}-${year}`;
const formattedDate2= `${day}-${month}-${year}`;
console.log(formattedDate1);
console.log(formattedDate2);
/*ex2*/
function isLeap(year1){
if ((year1%4 ==0 && year1%100!=0)||year1%400==0)
{
    return true;
}else
return false;
}


const yeareg=2016;
if (isLeap(yeareg)) {
  console.log(`${yeareg} is a leap number.`);
} else {
  console.log(`${yeareg} is not a leap year.`);
}
/*ex3*/
function isLeapYear(year){
  return ((year%4==0&&year%100!=0)||year%400==0);
}
function findSundays()
{
  let currentDay=3;
  const sunDayYears=[];
  for(let year=2014;year<=2050;year++){
  const daystoadvance=isLeapYear(year)?2:1;
  currentDay =(currentDay+daystoadvance)%7 ;
  if(currentDay===0){
    sunDayYears.push(year);
      }
}return sunDayYears;

}
const sundays=findSundays();
console.log("Years where January 1st is a Sunday:", sundays);
