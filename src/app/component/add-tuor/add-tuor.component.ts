import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tuor} from "../../model/tuor";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-tuor',
  templateUrl: './add-tuor.component.html',
  styleUrls: ['./add-tuor.component.css']
})
export class AddTuorComponent implements OnInit {
  tourForm!: FormGroup;

  constructor(private tuorService: TuorService,
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
  }

  onSubmit() {
    console.log('Submit form');
    this.tuorService.save(this.tourForm.value).subscribe((tour: Tuor) => {
      this.tourForm.reset();
      if (tour) {
        alert('Created!!');
      } else {
        // TODO
      }
    }, error => {
      alert(error);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
