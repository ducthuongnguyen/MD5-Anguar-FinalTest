import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tuor} from "../../model/tuor";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-tuor',
  templateUrl: './add-tuor.component.html',
  styleUrls: ['./add-tuor.component.css']
})
export class AddTuorComponent implements OnInit {
  tours: Tuor[] | undefined;
  tour: any;

  addForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private tuorService: TuorService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.tour = this.addForm.value;
    this.tuorService.save(this.tour).subscribe(() => {
      this.addForm.reset();
      alert('Created!!');
      this.router.navigate(['']);
    }, error => {
      alert(error);
    });
  }
}
