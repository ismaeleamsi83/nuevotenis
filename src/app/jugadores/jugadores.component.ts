import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})



export class JugadoresComponent implements OnInit, AfterViewInit {
  
  @ViewChild('asNombre') nombre!: ElementRef;
  @ViewChild('asDetalle') detalle!: ElementRef;
  
  @ViewChild('mostrarNom') mostrarNom!: ElementRef;
  

  
  jugadores:any[]= [
    {nombre: 'Carlos Alcaraz', edad: 20, provincia: 'Murcia', poblacion: 'Caravaca', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Rafael Nadal', edad: 35, provincia: 'Islas Baleares', poblacion: 'Manacor', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Albert Costa', edad: 40, provincia: 'Lleida', poblacion: 'Lleida', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Alex Corretja', edad: 45, provincia: 'Barcelona', poblacion: 'Sant Celoni', nivel: 5, partju: 10, partga: 8, partpe:2},
    {nombre: 'Manolo Santana', edad: 56, provincia: 'Malaga', poblacion: 'Almiden', nivel: 5, partju: 10, partga: 8, partpe:2}
  ];
  
  
  constructor(private renderer2: Renderer2) { 
    
  }

  ngAfterViewInit() {

   //const elementosEliminar = this.nomjugador.nativeElement.querySelectorAll(".nombrejugador");
   
    
   let resultado:boolean= false;


    const judsele = document.querySelectorAll('.seleccionado');
    //console.log("oooooooooooookkk");
   
    
    
    judsele.forEach((elemento) => {
      //console.log("adentro elemento");
      
      elemento.addEventListener('click', () =>{
        //console.log("oooooooooooookkk  CLICK");
        console.log(elemento.textContent);
        //const elementonuevo = elemento;

        //const detalle = document.querySelector('#detallejugador');
        //detalle?.appendChild(elementonuevo);
        /*
        const asnom = this.nombre.nativeElement;
        this.renderer2.setStyle(asnom, 'color', 'red');
        */
        this.renderer2.setStyle(elemento, 'color', 'red');
        
        //const detalle = document.querySelector('#detallejugador');
        // Crear un nuevo elemento div
        //const nuevoElemento = this.renderer2.createElement("nuevo elemento para agregar");

        const detalle = this.detalle.nativeElement;
        this.renderer2.setStyle(detalle, 'color', 'blue');
        //this.renderer2.appendChild(detalle, '<h3>Nuevo contenido añadido</h3>');
        //const text2 = elemento.textContent;
    

        
        
        




        const texto3 = this.renderer2.createElement('h2');
        //const text = this.renderer2.createText('Texto para el elemento h2');
        const text = this.renderer2.createText(elemento.innerHTML);
        this.renderer2.appendChild(texto3, text);
        this.renderer2.addClass(texto3, "nombrejugador");
        this.renderer2.appendChild(detalle, texto3); 

          
        const mostrarNo = this.mostrarNom.nativeElement;
        this.renderer2.appendChild(mostrarNo, text);
        //const elementosEliminar = this.nomjugador.nativeElement.querySelectorAll(".nombrejugador");

        let jugadorEncontrado:string = '';
        /*
        this.jugadores.forEach((juga) =>{
          if(juga.nombre = elemento.textContent){
            console.log("encontrado");
            console.log("el elemento encontrado es"+ juga.nombre + juga.nivel);
            jugadorEncontrado = juga.nombre;
          }else{
            console.log("no encontrado");
          }
        });
        */
        //const textoo2 = this.renderer2.createText(jugadorEncontrado);
        //this.renderer2.appendChild(detalle, textoo2);

        //const text = this.renderer2.createText('Texto introducido con Renderer2');
        //this.renderer2.appendChild(detalle, text);
        /*
        resultado = this.jugadores.includes(elemento.textContent);
        if(resultado){
          console.log("encontrado");
        }else{
          console.log("no encontrado");
        }
        */
        //let textobuscar = "rafael nadal";
        //let textobuscar = elemento.textContent;
        // Usar filter para buscar el nombre en el array de objetos
        //const resultadoBusqueda = this.jugadores.filter(jugador =>
        //  jugador.nombre.toLowerCase() === textobuscar?.toLowerCase()
        //);

        //this.renderer2.appendChild(detalle, "nuevooooooo");

        //console.log(textobuscar);
        // Si se encuentra al menos un resultado, resultadoBusqueda tendrá elementos
        //resultado = resultadoBusqueda.length > 0;
        //console.log(resultado);
      });
    
    });
   
  } 


  ngOnInit(): void {
    
    
  }

  jugador(jugado:any) {
    alert("click");
  }

}
