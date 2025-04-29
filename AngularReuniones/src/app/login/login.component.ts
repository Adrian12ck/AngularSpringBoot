import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule si usas ngModel
import { CommonModule } from '@angular/common';  // Importar FormsModule si usas ngModel
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]  // Módulos necesarios para el componente
})
export default class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: ()=> this.router.navigate(['/reuniones']),
      error: (err)=> console.error('Login failed', err)
    });
  }

  
 
}
