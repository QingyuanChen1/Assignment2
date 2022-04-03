import { Component, OnInit } from '@angular/core';
import { Serviceitem } from '../auto.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(public serviceitem: Serviceitem) { }

  ngOnInit(): void {
  }

}
