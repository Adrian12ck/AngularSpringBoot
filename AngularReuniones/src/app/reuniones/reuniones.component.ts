import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReunionesService } from '../services/reuniones.service';



interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

interface Reunion {
  id: number;
  asunto: string;
  fecha: string;
  asistentes: Persona[];
}

@Component({
  selector: 'app-reuniones',
  standalone: true,
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.css'],
  imports: [CommonModule]
})
export default class ReunionesComponent implements OnInit {

  reuniones: Reunion[] = [];

  constructor(private reunionesService: ReunionesService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.reunionesService.getReuniones().subscribe((data) => {
      for(const prop in data) {
        this.reuniones.push(data[prop])

      }
    });
  }

  crearReunion(): void {
    this.router.navigate(['/agregar-reunion']);  // Redirige a la ruta de agregar reunión
  }

  logout(): void {
    this.authService.logout();
  }
}
