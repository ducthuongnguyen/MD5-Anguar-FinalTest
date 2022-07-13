import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Tuor} from "../../model/tuor";

@Component({
  selector: 'app-detail-tuor',
  templateUrl: './detail-tuor.component.html',
  styleUrls: ['./detail-tuor.component.css']
})
export class DetailTuorComponent implements OnInit {
  id: string | null | undefined;
  tour: Tuor ={};

  constructor(private tuorService: TuorService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getDetail(this.id);
    });
  }

  ngOnInit(): void {
  }

  getDetail(id: string | null) {
    this.tuorService.findById(id).subscribe(data => {
      console.log(data);
      this.tour = data;
    }, error => {
      console.log(error);
    })
  }
}
