import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule, Location  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {
  createAccountData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private cdr: ChangeDetectorRef, private location: Location ) { }

  async onSubmit() {
    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.createAccountData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Conta criada com sucesso! Faça login para continuar.');
        this.location.back();
        this.cdr.detectChanges();
      } else {
        alert('Criar conta falhou: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      alert('Erro ao criar conta');
    }
  }
}
