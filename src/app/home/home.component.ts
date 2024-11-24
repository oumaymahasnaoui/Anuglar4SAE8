import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listResidences = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/images/R2.jpeg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/images/R3.jpeg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/images/R4.jpeg", status: "En Construction" }
  ];

   
  
  constructor() { }

  ngOnInit(): void {
  }
}
