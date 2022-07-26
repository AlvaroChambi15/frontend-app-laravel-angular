import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  datos: any = {
    email: ''
  }

  forgotPassword: boolean = true;

  emailSend: boolean = false;

  emailFail: boolean = false;

  loading: boolean = false;

  // 

  emailNotExist: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  pedirReseteo() {

    this.forgotPassword = false;

    this.loading = true;

    setTimeout(() => {

      // alert(this.datos.email)

      this.authService.forgotPass(this.datos).subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;
          this.emailSend = true;
        },
        (error: any) => {
          console.log(error);
          console.log(error.error.mensaje);
          this.loading = false;

          if (error.error.mensaje == 'NO EXISTE') {
            console.log("mostrar ERROR DE QUE NO EXISTE");

            this.emailNotExist = true;
          } else {
            console.log("mostrar ERROR DE QUE ALGO SALIO MAL");
            this.emailFail = true;
          }

        }
      )

    });

    // if (Object.keys(this.responseEmail).length === 0) {
    //   console.log("SI HAY CORREO");

    // } else {
    //   console.log("NO HAY CORREO");

    // }



    // this.emailSend = true;
  }



}
