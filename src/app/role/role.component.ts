import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Role } from '../role'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }
    
    this.getRoles();
  }

  getRoles(): void {
  this.authService.getRoles()
    .then(roles => this.roles = roles);
  }

}
