import { Component, OnInit, Input } from '@angular/core';
import { Rower} from '../../shared/rower.model'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DragDropService} from '../../shared/dragDrop/drag-drop.service';

@Component({
  selector: 'app-rower-list',
  templateUrl: './rower-list.component.html',
  styleUrls: ['./rower-list.component.css']
})
export class RowerListComponent implements OnInit {

  @Input() allrowers: Rower[]
  aveAge: number = 0;
  racers: [] = [];
  constructor(private dd : DragDropService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dd.drop(event)
  }


}
