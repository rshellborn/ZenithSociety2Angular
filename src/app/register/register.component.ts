import { Component, OnInit } from '@angular/core';
import { Register } from '../register'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register: Register = new Register();

  registerUser(register: Register): void {
    
  }
}
