import { Component, OnInit, Input } from '@angular/core';
import {CdkDropListGroup} from '@angular/cdk/drag-drop';
import { Rower} from '../shared/rower.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
