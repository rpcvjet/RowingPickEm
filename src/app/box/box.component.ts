import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {Rower} from '../shared/rower.model'

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
   @Input()rowers: Rower[];
    racers: Rower[] = [];
    age = 0;
    erg2k = "0:00"
    limit: true
    constructor() {  }

  ngOnInit() {

  }

  printTime(min, sec) {
    if(sec >= 10) {
      this.erg2k = min + ':' + sec
    }
    else {
      this.erg2k = min + ':' + ('0' + sec)
    }

  }

  drop(event: CdkDragDrop<string[]>) {

    //moving in the same container
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //moving right to left
    } else if(event.container.id === 'racers') {

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        const rowerAges = event.container.data.map(rower => {
                          return parseInt(rower.age)
                        }).reduce( (accum, curr) => {
                          return accum + curr
                        },0)
                        let finalAge = rowerAges/event.container.data.length;
                        this.age = Math.floor(finalAge)
                        //2k

                        let minutesArray = []
                        let secondsArray = []

                        let rowerErgs = event.container.data.map(rower => {
                          let time = rower.erg2k.split(':')
                          let min = parseInt(time[0])
                          let seconds = parseFloat(time[1])

                          minutesArray.push(min)
                          secondsArray.push(seconds)

                          let calculatedMinutes =  minutesArray.reduce( (accum, curr) => {
                            return curr + accum
                          }, 0)

                          let calculatedSeconds =  secondsArray.reduce( (accum, curr) => {
                              let minitotal =  curr + accum;
                              if(minitotal >= 60) {
                                  minitotal -= 60;
                                  calculatedMinutes += 1
                                  if (minitotal < 10) {
                                    let sec =   parseFloat(minitotal)
                                    return sec
                                }
                              }
                              return minitotal
                          },0)


                          let totalSeconds = ((parseInt(calculatedMinutes) * 60) + parseInt(calculatedSeconds))/event.container.data.length;

                          let myMinutes = Math.floor(totalSeconds/60);
                          let mySeconds = Math.ceil(totalSeconds % 60);

                          this.printTime(myMinutes, mySeconds)

                        })


    //moving left to right
    } else if (event.container.id === 'rowers') {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        let rowerAges = event.previousContainer.data.map(rower => {
          return rower.age
        }).reduce( (accum, curr) => {
          return accum + curr
        },-1);

        //2k
        let minArray= [];
        let secArray = []

        let rower2ks = event.previousContainer.data.map(rower => {

          let time = rower.erg2k.split(':')
          let min = parseInt(time[0])
          let seconds = parseInt(time[1])

          minArray.push(min)
          secArray.push(seconds)

        let calcMinutes = minArray.reduce((accum, curr) => {
            return accum + curr

          },0)

        let calcSeconds = secArray.reduce((accum, curr) => {
             let tempTotal = curr + accum
             if(tempTotal >= 60) {
              tempTotal -= 60;
              calcMinutes += 1
              if (tempTotal < 10) {
                let sec =  parseFloat(tempTotal);
                return sec
            }
          }
          return tempTotal
        },0)

        let totalSeconds2 = ((parseInt(calcMinutes) * 60) + parseInt(calcSeconds))/event.previousContainer.data.length;

        let myMinutes2 = Math.floor(totalSeconds2/60);
        let mySeconds2 = Math.ceil(totalSeconds2 % 60);

        this.printTime(myMinutes2, mySeconds2)
      })


        if(event.previousContainer.data.length === 0) {
          this.age = 0;
          this.erg2k = "0:00"
        } else {

          let finalAge2 = rowerAges/event.previousContainer.data.length + 1
          this.age = Math.floor(finalAge2)
        }
    }

  }
  test(){
    console.log('hi')
  }

  // isDragging(event) {
  //   console.log(event)
  //   if(event.container.data.length > 2) {
  //     event.item.element.nativeElement.style.backgroundColor = 'blue'
  //   }
  // }

  racerPredicate(item, event ) {
    if(event.data.length === 2) {
      item.element.nativeElement.style.color = 'blue'
      return false
    }
    return true
  }
}
