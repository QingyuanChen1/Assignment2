import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Serviceitem } from '../auto.service';



type Items = {
  hourlyrate: number;
  item: string,
  hours: number
}

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  constructor(private serviceitem:Serviceitem) { }
  formrate: number = 0;
  formitem: string="";
  formhours: number = 0;
  addeditem = this.serviceitem.invoice.invoiceitems;


  ngOnInit(): void {
  }


  addItemToList(){
    let obj: Items = {
      hourlyrate: this.formhours,
      item: this.formitem,
      hours: this.formrate,
    }

    this.addeditem.push(obj);
    this.resetForm();
  }
  resetForm(): void{
    this.formhours =  0;
    this.formitem = "";
    this.formrate = 0;
  }



}
