import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-tuor',
  templateUrl: './edit-tuor.component.html',
  styleUrls: ['./edit-tuor.component.css']
})
export class EditTuorComponent implements OnInit {
  id: string | null | undefined;
  obj: any;
  editForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private tuorService: TuorService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
  }

  findById(id: string | null) {
    return this.tuorService.findById(id).subscribe(tour => {
      // tslint:disable-next-line:no-shadowed-variable
      // this.editForm.setValue(student);
      this.editForm = new FormGroup({
        title: new FormControl(tour.title),
        price: new FormControl(tour.price),
        description: new FormControl(tour.description),
      });
    }, error => {
      alert(error);
    });
  }

  update() {
    this.obj = this.editForm.value;
    this.tuorService.updateTour(this.id, this.obj).subscribe(() => {
      alert('Updated!!');
      // @ts-ignore
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    });
  }
}
