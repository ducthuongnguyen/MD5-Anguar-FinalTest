import {Component} from '@angular/core';
import {ChildCategoryService} from "./service/child-category.service";
import {ChildCategory} from "./model/child-category";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childCategories: ChildCategory[] = [];

  constructor(private childCategoryService: ChildCategoryService) {
    this.findAllCategories();
  }

  findAllCategories() {
    this.childCategoryService.findAllChildCategory().subscribe(results => {
      console.log(results);
      this.childCategories = results;
    }, error => {
      alert(error);
    })
  }

  showCreateForm() {
    // @ts-ignore
    document.getElementById('exampleModal').modal('show');
  }
}
