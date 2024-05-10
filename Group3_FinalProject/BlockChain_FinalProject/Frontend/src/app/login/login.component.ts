import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ethers } from 'ethers';

import { environment } from '../../environments/environment';
import { DefaultService } from "../default.service";
import { AuthenticationService } from '../services/authentication.service';

declare let window:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authCtrl: any;
  toastrMessage: any;
  window:any;
  private provider: any;
  public signer:any;
  public connected: boolean;
  public userAddress:any
  constructor(private defaultService: DefaultService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService) {
      this.provider = new ethers.BrowserProvider(window['ethereum']);
    this.connected = false;
    const user = localStorage.getItem("user");
    if (user && JSON.parse(user).address) {
        this.signer = JSON.parse(user);
        this.router.navigate(['/feed']);
    }
  }

  async login() {
    try {
      this.userAddress = (await this.provider.send('eth_requestAccounts', []))[0];
      this.signer = this.provider.getSigner();
      this.connected = true;
      localStorage.setItem("user", JSON.stringify({address:this.userAddress}));
      window.location.reload();
      this.router.navigate(['/feed']);
    } catch (error) {
      console.error('Failed to connect to wallet:', error);
    }
}  
}
