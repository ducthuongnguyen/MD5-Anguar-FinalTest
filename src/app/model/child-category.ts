import {ParentCategory} from "./parent-category";

export class ChildCategory {
  id: string;
  name: string;
  parentCategory: ParentCategory;

  constructor(id: string, name: string, parentCategory: ParentCategory) {
    this.id = id;
    this.name = name;
    this.parentCategory = parentCategory;
  }
}
