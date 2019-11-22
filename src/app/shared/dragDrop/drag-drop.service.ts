import { Injectable } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDragExit} from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor() { }

  drop (event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === event.container.id) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
  }

  exit (item: CdkDragExit<string[]>) {
    return item[0].age
  }

}


