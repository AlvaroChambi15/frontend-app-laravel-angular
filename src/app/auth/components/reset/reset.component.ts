import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  reset: any = {
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  submitted: boolean;

  // 

  resetPass: boolean = true;

  emailChange: boolean = false;

  changeEmailFail: boolean = false;


  constructor(
    private activatedRouter: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.reset.token = this.activatedRouter.snapshot.paramMap.get("token")
  }

  resetP() {
    this.authService.resetPass(this.reset).subscribe(
      (res: any) => {
        console.log(res);
        this.resetPass = false;
        this.emailChange = true;
      },
      (error: any) => {
        console.log(error);
        this.resetPass = false;
        this.changeEmailFail = true;
      }
    )
  }

}
