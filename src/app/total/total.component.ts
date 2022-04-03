import { Component, OnInit } from '@angular/core';
import { Serviceitem } from '../auto.service';


@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  constructor(public serviceitem: Serviceitem) { }

  ngOnInit(): void {
  }

  tax(): number{
   let taxinOntario = 0.13;

   return taxinOntario;


  }

  totalnumber(): number {
    let total: number = 0;
    for(let i = 0; i < this.serviceitem.invoice.invoiceitems.length; i++){
      total = total + this.serviceitem.invoice.invoiceitems[i].hours;
    }
    return total;
  }

  subtotal():number{
    let subtotal: number = 0;
    for(let i = 0; i< this.serviceitem.invoice.invoiceitems.length; i++){
      subtotal += this.serviceitem.invoice.invoiceitems[i].hours * this.serviceitem.invoice.invoiceitems[i].hourlyrate;
    }
    return subtotal;
  }
}
