import { Component } from '@angular/core';

@Component({
  selector: 'listado-coches',
  templateUrl: 'app/listado-coches.component.html'
})

export class ListadoCochesComponent {
  mostrar: boolean = false;
  width_heading: number = 200;
  width: number = 75;
  filtrar: string = "";
  coches: any[] = [
    {
      "id": 1,
      "imagen": "/app/images/opel.png",
      "modelo": "Opel Corsa",
      "anyo": "2015",
      "km": "35000",
      "precio": "5000",
    },
    {
      "id": 2,
      "imagen": "/app/images/fiat.jpg",
      "modelo": "Fiat Panda",
      "anyo": "2014",
      "km": "12000",
      "precio": "6000",
    },
    {
      "id": 3,
      "imagen": "/app/images/hyundai.jpg",
      "modelo": "Hyundai i30",
      "anyo": "2013",
      "km": "30000",
      "precio": "4500",
    },
    {
      "id": 4,
      "imagen": "/app/images/citroen.jpg",
      "modelo": "Citroen C3",
      "anyo": "2014",
      "km": "45000",
      "precio": "4500",
    }
  ];

  mostrar_ocultar_Imagen(): void{
    this.mostrar = !this.mostrar;
  }

}
