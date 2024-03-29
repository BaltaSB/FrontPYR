import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginSerice: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.loginSerice.removeLocalStorage();
    this.router.navigate(['/inicio']);
  }
}
