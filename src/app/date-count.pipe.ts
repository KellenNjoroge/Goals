import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any,): number {
    let today :Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date (today.getFullYear(),
    today.getMonth(), today.getDate() )
    var dateDiferrence = Math.abs(value-todayWithNoTime)
    //returns value in milliseconds
  const secondsInADay= 86400; // 60s *60s  for every of the 24hrs
  var dateDiferrenceSeconds = dateDiferrence*0.001 
  //converts to seconds
  var dateCounter = dateDiferrenceSeconds/secondsInADay;


  if (dateCounter >= 1)
  return dateCounter;
else{
  return 0;
    }
  }

}
