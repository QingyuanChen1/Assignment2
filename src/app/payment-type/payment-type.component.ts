import { Component, OnInit } from '@angular/core';
import { Serviceitem } from '../auto.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})




export class PaymentTypeComponent implements OnInit {
  constructor(public serviceitem: Serviceitem) { 
  }
  invoicelist = this.serviceitem.invoice.paymenttype;
  paymentType: string[] = ["Check","Cash","Credit Card"];
  formpaymenttype: string = '';
  


  ngOnInit(): void {
      
  }

 
  addItemToType():void{
    console.log(this.formpaymenttype)
    this.invoicelist = this.formpaymenttype;

  }
}
