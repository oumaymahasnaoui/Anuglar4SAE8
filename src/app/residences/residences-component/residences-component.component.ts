import { Component } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences = [
    { id: 1, name: 'El Fel', address: 'Borj Cedria', status: 'Disponible' },
    { id: 2, name: 'El Yasmine', address: 'Ezzahra', status: 'En Construction' },
    { id: 3, name: 'El Arij', address: 'Rades', status: 'Vendu' },
  ];
}
