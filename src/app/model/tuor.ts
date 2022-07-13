export class Tuor {
  id?: string;
  title?: string;
  price?: number;
  description?: string;

  constructor(id?: string, title?: string, price?: number, description?: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }
}
