import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Tuor} from "../../model/tuor";

@Component({
  selector: 'app-edit-tuor',
  templateUrl: './edit-tuor.component.html',
  styleUrls: ['./edit-tuor.component.css']
})
export class EditTuorComponent implements OnInit {
  tourForm!: FormGroup;

  constructor(private tuorService: TuorService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.tourForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.findById(id);
    });
  }

  findById(id: number) {
    return this.tuorService.findById(id).subscribe((tour: Tuor) => {
      this.tourForm.patchValue(tour);
    }, error => {
      if (error.status === 404) {
        alert("Not found");
      } else {
        alert("Something went wrong")
      }
      console.log(error);
    });
  }

  update() {
    this.tuorService.updateTour(this.tourForm.get('id')?.value, this.tourForm.value).subscribe((tuor: Tuor) => {
      if (tuor) {
        alert('Updated!!');
      } else {
        //TODO
      }
    }, error => {
      console.log(error);
    });
  }
}
