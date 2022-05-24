import { Component } from '@angular/core';
import moment from "moment";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  date  = new Date();
  meetingEnddate  =  "24/05/2022 15:39:00"


  // DESC : Open an alert when the current time reaches the Predefined Time

  checkDifference(){
    var date  = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var meetDur = moment.utc( moment(this.meetingEnddate, "DD/MM/YYYY HH:mm:ss").diff(
                moment(date, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
            //moment to convert UTC date time format    
            console.log("conv-date1",moment.utc(moment(this.date,"DD/MM/YYYY HH:mm:ss")));
            console.log("conv-date2",moment.utc(moment(this.meetingEnddate,"DD/MM/YYYYHH:mm:ss")));

             //Conversion of HH:mm:ss to seconds and miliseconds          
              var a = meetDur.split(':'); 
              var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
              // convert seconds to miliseconds
              var mili =  seconds * 1000 ;
              
              if(moment.utc(moment(this.meetingEnddate, "DD/MM/YYYY HH:mm:ss")) > moment.utc(moment(date, "DD/MM/YYYY HH:mm:ss"))){
              setTimeout(()=>{
              alert("Do you want to end meeting ?");
              },mili)
            }
            
  }
}
