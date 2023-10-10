import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit, AfterViewInit {
  

  
  jugadores:any[]= [
    {nombre: 'Carlos Alcaraz', edad: 20, provincia: 'Murcia', poblacion: 'Caravaca', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Rafael Nadal', edad: 35, provincia: 'Islas Baleares', poblacion: 'Manacor', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Albert Costa', edad: 40, provincia: 'Lleida', poblacion: 'Lleida', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Alex Corretja', edad: 45, provincia: 'Barcelona', poblacion: 'Sant Celoni', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Manolo Santana', edad: 56, provincia: 'Malaga', poblacion: 'Almiden', nivel: 5, partju: 10, partga: 8, partpe:2}
  ];
  
  
  constructor() { }

  ngAfterViewInit() {
    const judsele = document.querySelectorAll('.seleccionado');
    //console.log("oooooooooooookkk");

    judsele.forEach((elemento) => {
      //console.log("adentro elemento");
      
      elemento.addEventListener('click', () =>{
        //console.log("oooooooooooookkk  CLICK");
        console.log(elemento.textContent);
      });
    
    });

  } 


  ngOnInit(): void {
    
    
  }

  jugador(jugado:any) {
    alert("click");
  }

}
