import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = {};

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    roles: new FormControl(),
    // avatar: new FormControl(),
  })

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  register() {
    // this.user = {
    //   name: this.registerForm.value.name,
    //   username: this.registerForm.value.username,
    //   email: this.registerForm.value.email,
    //   password: this.registerForm.value.password,
    //   role: this.registerForm.value.role,
    //   // avatar: this.registerForm.value.avatar,
    // }
    const user1 = this.registerForm.value;
    console.log(this.user)
    this.userService.register(user1).subscribe(data => {
      console.log('user',this.user)
      alert("Success!!!")
      console.log(data)
      console.log(this.registerForm.value);
    }, error => {
      alert('Loi');
    })
  }
}
