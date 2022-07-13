import { Component, OnInit } from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-tuor',
  templateUrl: './delete-tuor.component.html',
  styleUrls: ['./delete-tuor.component.css']
})
export class DeleteTuorComponent implements OnInit {
  obj: any;
  deleteForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  constructor(private tuorService: TuorService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.findById(id);
    });
  }

  ngOnInit(): void {
  }
  findById(id: number) {
    return this.tuorService.findById(id).subscribe(tour => {
      this.deleteForm.patchValue(tour);
    }, error => {
      alert(error);
    });
  }

  onDelete() {
    this.tuorService.delete(this.deleteForm.get('id')?.value).subscribe(() => {
      alert('Deleted');
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    });
  }
}
