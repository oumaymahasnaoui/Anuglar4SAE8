import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/images/R2.jpeg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/images/R3.jpeg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/images/R4.jpeg", status: "En Construction" }
  ];
  
  visiblity=false;
  N!:string;
  favorites: Residence[] = [];
  showLocation(residence: Residence): void {
    if (residence.address === 'Inconnu') {
      alert(`L'adresse de ${residence.name} est inconnu.`);
    } else {
      //alert(`Adresse : ${residence.address}`);
this.visiblity=true;
this.N= residence.name;
    }
  }


  addToFavorites(residence: Residence): void {
    if (this.favorites.includes(residence)){
      alert(`${residence.name} a deja exist aux favoris.`);
    }
    this.favorites.push(residence);
    alert(`${residence.name} a été ajouté aux favoris.`);
  }
  searchQuery: string = '';
/*filtereResidence()
{
  return this.listResidences.filter(Residence=>Residence.address.toLowerCase)

}*/
}

