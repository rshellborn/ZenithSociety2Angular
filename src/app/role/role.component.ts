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
  role: string;
  loggedIn: boolean;
  username: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }
    
    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.role = localStorage.getItem("role");
    this.username = localStorage.getItem("username");
    
    this.getRoles();
  }

  getRoles(): void {
  this.authService.getRoles()
    .then(roles => this.roles = roles);
  }

  edit(role: Role): void {
    this.router.navigate(['/roles/edit/', role.roleId]);
  }

   add(): void {
    this.router.navigate(['/roles/add']);
  }

  delete(delRole: Role): void {
    this.authService
        .delete(delRole.roleId)
        .then(() => {
          this.roles = this.roles.filter(c => c !== delRole);
        });
  }

}
