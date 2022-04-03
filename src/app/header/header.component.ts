import { Component, OnInit } from '@angular/core';
import { Serviceitem } from '../auto.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  constructor(public serviceitem:Serviceitem) { }

  todayDate: Date = new Date();
  displayDate: string = "";


  ngOnInit(): void {
    this.displayDate = this.todayDate.getFullYear() + " - " + (this.todayDate.getMonth() + 1) + " - " + this.todayDate.getDate();
  }
}
