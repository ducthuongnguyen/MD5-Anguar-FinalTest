import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {Tuor} from "../../model/tuor";

@Component({
  selector: 'app-tuor-list',
  templateUrl: './tuor-list.component.html',
  styleUrls: ['./tuor-list.component.css']
})
export class TuorListComponent implements OnInit {
  tuors: Tuor[] = [];

  constructor(private tuorService: TuorService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.tuorService.findAll().subscribe(result => {
      console.log(result)
      this.tuors=result;
    }, error => {
      console.log(error);
    })
  }


}
