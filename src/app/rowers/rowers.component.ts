import { Component, OnInit, Input } from '@angular/core';
import {RowerService} from '../shared/rower.service'
import {Rower} from '../shared/rower.model';

@Component({
  selector: 'app-rowers',
  templateUrl: './rowers.component.html',
  styleUrls: ['./rowers.component.css']
})
export class RowersComponent implements OnInit {
  @Input()rowers: any = []
  constructor(private rowerService: RowerService) { }

  ngOnInit() {
    this.getAllRowers()
  }
  getAllRowers () {
    this.rowerService.getRowers().subscribe((data: Rower[]) => {
      this.rowers = data
    })
  }



}
