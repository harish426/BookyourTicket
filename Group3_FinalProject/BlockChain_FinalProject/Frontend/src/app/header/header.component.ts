import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

    loggedIn: boolean = false;
    public signer: string = "";
    constructor(private authenticationService: AuthenticationService,
        private router: Router
    ) {
    }

    ngOnInit() {
        const user = localStorage.getItem("user");
        if (user && JSON.parse(user).address) {
            this.signer = JSON.parse(user);
            this.loggedIn = true
        } else {
            this.loggedIn = false;
        }
    }

    logout() {
        localStorage.removeItem("user");
        window.location.reload();
    }
}