import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residence: any; // Ajouter une structure pour les détails de la résidence

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;  // Récupérer l'ID de la résidence
    this.loadResidenceDetails();  // Charger les détails de la résidence
  }

  loadResidenceDetails(): void {
    // Ici, tu devrais récupérer les détails de la résidence, soit via un service, soit à partir de données statiques.
    // Exemple de données statiques :
    const allResidences = [
      { id: 1, name: 'El Fel', address: 'Borj Cedria', status: 'Disponible' },
      { id: 2, name: 'El Yasmine', address: 'Ezzahra', status: 'En Construction' },
      { id: 3, name: 'El Arij', address: 'Rades', status: 'Vendu' },
    ];

    this.residence = allResidences.find(res => res.id === this.residenceId);
  }
}
