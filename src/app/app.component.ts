import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  label: any;
  id: number = 1;
  key:any;
  value:any;
  placehold:any;
  method:any;
  required=['true','false'];
  readonly=['true','false'];
  multiple=['true','false'];
  disabled=['true','false'];
  flag: number = 0;
  type:string[]=['datepicker','datepickerrange','checkbox','checkboxs','text','radio','select','textarea','number'];
  subData:any = [{"label": "","key": "","value": "","placeholder": "","required": "false","readonly": "false","disabled": "false","type": "datepicker","method": "method($event)","listSource": "","listLabel": "","listValue": "","multiple":"false"}];
  addInput() {
  let number = this.subData.length + 1;
  this.subData.push({"label": "","key": "","value": "","placeholder": "","required": "false","readonly": "false","disabled": "false","type": "datepicker","method": "method($event)","listSource": "","listLabel": "","listValue": "","multiple":"false"});
  //let homeObj = JSON.stringify(this.subData);
  }
  submitData(){
  let allSubmit = this.subData;
  console.log(allSubmit);
  computeInputs(allSubmit);
  }

  removeInput(item) {
  console.log(item);
  let i = this.subData.indexOf(item);
  console.log(i);
  this.subData.splice(i, 1);

  }

  onSelect(item){
    if(item == "select"){
      this.flag = 1;
    }else{
      this.flag = 0;
    }
  }
  
 
}
declare var computeInputs: any;