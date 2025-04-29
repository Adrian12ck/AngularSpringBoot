import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';  // Importar FormsModule si usas ngModel
import { ReunionesService } from '../services/reuniones.service';
import { AuthService } from '../services/auth.service';
import { PersonasService } from '../services/personas.service';


interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

interface Reunion {
  id: number;
  asunto: string;
  fecha: Date;
  asistentes: Persona[];
}


@Component({
  selector: 'app-agregar-reunion',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-reuniones.component.html',
  styleUrl: './agregar-reuniones.component.scss'
})
export default class AgregarReunionComponent implements OnInit{


  reuniones: Reunion = {} as Reunion;
  personas: Persona[] = [];
  // Array para manejar los participantes seleccionados (solo IDs)
  selectedPersonas: number[] = [];


  constructor(private reunionesService: ReunionesService, private router: Router, private authService: AuthService, private personasService: PersonasService) {}


  ngOnInit(): void {
   
    this.personasService.getPersonas().subscribe((data) => {
      for(const prop in data) {
        this.personas.push(data[prop])

      }
    });

  }

  onCheckboxChange(personaId: number, personaNombre: string, personaApellido: string ,event: any) {
    const index = this.selectedPersonas.indexOf(personaId);
    if (index > -1) {
      // Si ya está seleccionada, la eliminamos
      this.selectedPersonas.splice(index, 1);
    } else {
      // Si no está seleccionada, la agregamos
      this.selectedPersonas.push(personaId);
    }
  }

  crearReunion(): void {
    let fecha = new Date( this.reuniones.fecha);
    this.reuniones.fecha = fecha;
    console.log(JSON.stringify(this.reuniones));

    this.reuniones.asistentes = this.personas.filter(persona =>
      this.selectedPersonas.includes(persona.id)
    );

    this.reunionesService.addReunion(JSON.stringify(this.reuniones)).subscribe(
      (response) => {
        // Redirigir al listado de reuniones tras agregar con éxito
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error al agregar la reunión', error);
      }
    );
    
  }

  logout(): void {
    this.authService.logout();
  }
}
