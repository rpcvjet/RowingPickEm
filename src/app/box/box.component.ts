import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {Rower} from '../shared/rower.model'
import { container } from '@angular/core/src/render3';

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
    constructor() {  }

  ngOnInit() {

  }

  printTime(min, sec) {
    console.log('sec', sec)
    if(sec >= 10) {
      this.erg2k = min + ':' + sec
    }
    else {
      console.log('im here')
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
                        this.age = rowerAges/event.container.data.length;

                        //2k

                        let totalTime = []
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
                                    // console.log('minitotal', minitotal)
                                    let sec =  ('0' + minitotal).slice(-2);
                                    return sec
                                }
                              }
                              return minitotal
                          },0)


                          let totalSeconds = ((parseInt(calculatedMinutes) * 60) + parseInt(calculatedSeconds))/event.container.data.length;

                          let myMinutes = Math.floor(totalSeconds/60);
                          let mySeconds = Math.floor(totalSeconds % 60);

                          console.log('time', myMinutes + ':' + mySeconds)
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

        let minArray= [];
        let secondsArray = []

        let rower2ks = event.previousContainer.data.map(rower => {


          let time = rower.erg2k.split(':')
          let min = parseInt(time[0])
          let seconds = parseInt(time[1])

          minArray.push(min)
          secondsArray.push(seconds)

        let finalSec = secondsArray.reduce((accum, curr) => {
            return accum + curr

          },0)

        let finalMin = minArray.reduce((accum, curr) => {
             return accum + curr
        },0)

        console.log('min array', minArray)
        // console.log('finalMin', finalMin)

        if(event.previousContainer.data.length === 1) {
          if(finalMin % 2 === 0) {
            this.erg2k = finalMin + ':' + finalSec
            }
        }
        else {
          this.erg2k = finalMin/event.previousContainer.data.length + ':' + finalSec/event.previousContainer.data.length;
        }
        })



        if(event.previousContainer.data.length === 0) {
          this.age = 0;
          this.erg2k = "0:00"
        } else {

          this.age = rowerAges/event.previousContainer.data.length + 1

        }
    }
  }
  /** Predicate function that only allows even numbers to be dropped into a list. */
  // evenPredicate(item: CdkDrag<number>) {
  //   return item.data % 2 === 0;
  // }

  racerPredicate(item: CdkDrag<any>) {

    console.log('item',item.data)
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

}
