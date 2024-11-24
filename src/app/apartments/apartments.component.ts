import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 10, category: 'T2', ResidenceId: 1 },
    { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceterrace: 0, category: 'T3', ResidenceId: 1 },
    { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceterrace: 20, category: 'T4', ResidenceId: 2 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
