import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public show = false;
    constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
    toggleButton() {
        this.show = !this.show;
    }

    vkLogin() {

        this.authService.vkLogin()
            .subscribe(res => {
                    console.log('vkLogin');
                }, (err) => {
                    console.log(err);
                }
            );
    }

  ngOnInit() {
      this.authService.initSession();
  }

}
