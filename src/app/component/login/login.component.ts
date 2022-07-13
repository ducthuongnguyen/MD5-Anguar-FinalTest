import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {first} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private httpClient: HttpClient) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status == 202) {
            alert('Tài khoản của bạn bị sai, vui lòng nhập lại!')
          }
          localStorage.setItem('ACCESS_TOKEN', data.token);
          localStorage.setItem('ROLE', data.roles[0].authority);
          localStorage.setItem('USERNAME', this.loginForm.value.username);
          // this.httpClient.get(environment.apiUrl + 'users').subscribe((data) => {
          //   console.log('day la cai gi',data)
            this.router.navigate([this.returnUrl]);
          // }, error => {
          //   console.log(error)
          // })
        },
        (error) => {
          alert("Tài khoản của bạn sai mật khẩu!");
        });
  }

  ngOnInit() {
  }

}
