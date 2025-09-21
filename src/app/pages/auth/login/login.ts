import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private cdr: ChangeDetectorRef, private location: Location) { }

  async onSubmit() {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.loginData)
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar o token
        localStorage.setItem('token', data.token);
        // Redirecionar para a página de admin
        this.location.back();
        this.cdr.detectChanges();
      } else {
        alert('Login falhou: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    }
  }
}
