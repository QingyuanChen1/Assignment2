
import {Injectable} from "@angular/core";







type Items = {
    hourlyrate: number;
    item: string,
    hours: number
}

type Invoice = {
    name: string,
    address:string,
    postalcode: string,
    invoicenum: number,
    invoicerate: number,
    invoiceitems: Items[],
    paymenttype: string
}


@Injectable()


export class Serviceitem {
    sum:number = 0;

    invoice: Invoice = {
        name: 'Emoji Web Design, Inc.',
        address: '123345 Sunny Road',
        postalcode: 'Sunnyville, TX12345',
        invoicenum: 123456789,
        invoicerate: 1.13,
        invoiceitems: [
            {
                hours: 50,item:"Web Design", hourlyrate: 20
            },
            {
                hours: 75,item:"Web Development", hourlyrate: 100
            },
            {
                hours: 55.3,item:"Project Management", hourlyrate: 12
            }
        ],
        paymenttype: 'a'
    }

    

    totalHours():number{ 
        var sum = 0;
        this.invoice.invoiceitems.forEach( (element) => {
            console.log(element.hours)
              sum  = sum + element.hours;
          });    
          return sum;
    }


    calculateTotal(hours: number,hoursrate: number){
        return (hoursrate * hours);
    }
    deleteItem(i:number):void{
        this.invoice.invoiceitems.splice(i,1)
    }




    



}