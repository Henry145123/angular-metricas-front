import { Component,ElementRef,ViewChild,OnInit,Renderer2 } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveAnimation1', [
      state('void', style({ left: '-515px', boxShadow: '0 0 30px #7F0000', background: 'black' })),
      state('*', style({ left: '100%', boxShadow: '0 0 300px #7F0000' })),
      transition(':enter', animate('10s ease-in')),
    ]),
    trigger('moveAnimation2', [
      state('void', style({ left: '-515px', boxShadow: '0 0 30px #00007F', background: 'black' })),
      state('*', style({ left: '100%', boxShadow: '0 0 300px #00007F' })),
      transition(':enter', animate('10s ease-in')),
    ]),
  ],
})
export class AppComponent  implements OnInit{
  title = 'prueba-metricas-google';

  venta:Venta[]=[{licencia:"cobre", costo:510,cantidad_vendido:0,num_venta_efectuada:0},
  {licencia:"bronze", costo:1500,cantidad_vendido:0,num_venta_efectuada:0},
  {licencia:"silver", costo:3100,cantidad_vendido:0,num_venta_efectuada:0},
  {licencia:"gold", costo:4500,cantidad_vendido:0,num_venta_efectuada:0},
]

  chartData: any[] = [
    { data: [this.venta[0].costo,this.venta[1].costo, this.venta[2].costo, this.venta[3].costo], label: 'Costo' }
  ];
  chartLabels: string[] = [this.venta[0].licencia, this.venta[1].licencia, this.venta[2].licencia, this.venta[3].licencia, ];
  chartOptions: any = { responsive: true };
  chartType: string = 'bar';

  chartData2: any[] = [
    { data: [this.venta[0].cantidad_vendido,this.venta[1].cantidad_vendido, this.venta[2].cantidad_vendido, this.venta[3].cantidad_vendido], label: 'Cantidad Vendidas' }
  ];
  chartLabels2: string[] = [this.venta[0].licencia, this.venta[1].licencia, this.venta[2].licencia, this.venta[3].licencia, ];
  chartOptions2: any = { responsive: true };


  chartData3: any[] = [
    { data: [this.venta[0].cantidad_vendido*this.venta[0].costo,this.venta[1].cantidad_vendido*this.venta[1].costo,
       this.venta[2].cantidad_vendido*this.venta[2].costo, this.venta[3].cantidad_vendido*this.venta[3].costo], label: 'Total Recaudado' }
  ];
  chartLabels3: string[] = [this.venta[0].licencia, this.venta[1].licencia, this.venta[2].licencia, this.venta[3].licencia, ];
  chartOptions3: any = { responsive: true };

  num_licencias:number = 0
  tipo_licencias:string = ""


  ventaLicencia() {
    let tipo_licencia = this.tipo_licencias
    const venta = this.venta.find(l => l.licencia === tipo_licencia);
    if (venta) {
      const importeVenta = venta.costo * this.num_licencias;
      venta.cantidad_vendido += this.num_licencias;
      venta.num_venta_efectuada +=1
     // licencia.importeTotal += importeVenta;
     // licencia.ventasRealizadas++;
     console.log('Licencia:', venta.licencia);
      console.log('Importe a pagar:', importeVenta);
    }
    console.log('******************** VENTAS DE LICENCIAS ***************************');
    for(let vent of this.venta){

      console.log('Licencia:', vent.licencia);
      console.log('Importe total recaudado:', vent.cantidad_vendido*vent.costo);
      console.log('Número de licencias vendidas:', vent.cantidad_vendido);
      console.log('Número de ventas efectuadas:', vent.num_venta_efectuada);
      console.log('****************************************************************************');
    }
    this.chartData2 = [
      { data: [this.venta[0].cantidad_vendido,this.venta[1].cantidad_vendido, this.venta[2].cantidad_vendido, this.venta[3].cantidad_vendido], label: 'Vendidas' }
    ];

    this.chartData3 = [
      { data: [this.venta[0].cantidad_vendido*this.venta[0].costo,this.venta[1].cantidad_vendido*this.venta[1].costo,
         this.venta[2].cantidad_vendido*this.venta[2].costo, this.venta[3].cantidad_vendido*this.venta[3].costo], label: 'Total Recaudado' }
    ];
  }
/* ****************************************************************************************************************************************************** */


constructor(private renderer: Renderer2,private router:Router,) {


}
activeSlides!: SlidesOutputData;
getPassedData(data: SlidesOutputData) {
  this.activeSlides = data;
  console.log(this.activeSlides);
}
//slidesStore = [{id:"1",src:"../assets/img/barbie.jpg",alt:"image",title:"barbie"},{id:"2",src:"../assets/img/infinite_war.jpg",alt:"image",title:"infinite"}]
slidesStore = [
  {
    id:"1",
    src:'../assets/img/slide/barbie-slide.jpeg',
    alt:'Image_1',
    title:'Image_1'
  },
  {
    id:"2",
    src:'../assets/img/slide/Avengers-Infinity-War-poster.jpg',
    alt:'Image_2',
    title:'Image_3'
  },
  {
    id:"3",
    src:'../assets/img/slide/slide-nolan-movie.jpg',
    alt:'Image_1',
    title:'Image_1'
  },
  {
    id:"4",
    src:'../assets/img/slide/slide-Mision.jpg',
    alt:'Image_2',
    title:'Image_3'
  }
]
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },

  },
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 300,

}

  movies: Movie[] = [
    {
      title: 'Avengers: Infinity War',
      imageUrl: '../assets/img/infinite_war.jpg'
    },
    {
      title: 'Barbie',
      imageUrl: '../assets/img/barbie.jpg'
    },{
      title: 'Misión imposible: sentencia mortal - parte 1',
      imageUrl: '../assets/img/peliculas/mision-imposible.jpg'
    },{
      title: 'Insidious: The Red Door',
      imageUrl: '../assets/img/peliculas/insidious.jpg'
    },{
      title: 'Oppenheimer',
      imageUrl: '../assets/img/peliculas/Oppenheimer.png'
    },{
      title: 'Spider-Man: a través del Spider-Verso',
      imageUrl: '../assets/img/peliculas/spiderman.png'
    },{
      title: 'Transformers: el despertar de las bestias',
      imageUrl: '../assets/img/peliculas/Transformers-1.jpg'
    }
    // Agrega más películas aquí con sus respectivas imágenes
  ];


  toggleMenu() {
    // Aquí puedes agregar la lógica para mostrar/ocultar el menú desplegable
    // Puedes usar una variable de control o emitir un evento a otro componente
  }

  consola(){
    console.log("*******")
  }

  buscar:any
  onSearch(event:any){

  }
  limpiarBuscador(){

  }


  // animationState = 'void';
  // @ViewChild('boxElement', { static: true }) boxElement!: ElementRef;
  // startTime!: number;
  // animationFrameId!: number;

  // ngOnInit(): void {
  //   this.startAnimation();
  //   const box = this.boxElement.nativeElement;

  //   // Obtener el tamaño del div
  //   const boxWidth = box.offsetWidth;
  //   const boxHeight = box.offsetHeight;
  //   console.log(boxWidth)
  // }

  // startAnimation() {
  //   this.animationState = '*';
  //   this.startTime = performance.now();
  //   this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
  // }

  // onAnimationDone(event: any) {
  //   if (event.toState === '*') {
  //     this.animationState = 'void';
  //     cancelAnimationFrame(this.animationFrameId);
  //   }
  // }

  // animationLoop() {
  //   const box = this.boxElement.nativeElement;

  //   // Obtener la posición del div en la pantalla
  //   const rect = box.getBoundingClientRect();
  //   const positionTop = rect.top + window.pageYOffset;
  //   const positionLeft = rect.left + window.pageXOffset;


  //   console.log('Posición Left:', positionLeft.toFixed(2), 'px');

  //   // Detener la animación cuando llegue a 1140px
  //   if (positionLeft >= 1050) {
  //     this.animationState = 'void';
  //     cancelAnimationFrame(this.animationFrameId);
  //   } else {
  //     this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
  //   }
  // }

  animationState1 = 'void';
  animationState2 = 'void';
  @ViewChild('boxElement1', { static: true }) boxElement1!: ElementRef;
  @ViewChild('boxElement2', { static: true }) boxElement2!: ElementRef;
  startTime!: number;
  animationFrameId1!: number;
  animationFrameId2!: number;
  showBox2 = false;

  ngOnInit(): void {
    this.startAnimation1();

  }

  startAnimation1() {
      // Cambiar el color del texto del box2 al final de la animación del box1
      this.renderer.setStyle(this.boxElement2.nativeElement, 'color', 'black');
    this.animationState1 = '*';
    this.startTime = performance.now();
    this.animationFrameId1 = requestAnimationFrame(this.animationLoop1.bind(this));
  }

  onAnimationDone1(event: any) {

    if (event.toState === '*') {
      this.animationState1 = 'void';
      cancelAnimationFrame(this.animationFrameId1);

      // Iniciar la animación del segundo div
      this.startAnimation2();
    }
  }

  startAnimation2() {
    this.renderer.setStyle(this.boxElement2.nativeElement, 'color', 'white');
    this.showBox2 = true;
    this.animationState2 = '*';
    this.animationFrameId2 = requestAnimationFrame(this.animationLoop2.bind(this));
  }

  onAnimationDone2(event: any) {
    if (event.toState === '*') {
      this.animationState2 = 'void';
      cancelAnimationFrame(this.animationFrameId2);
      this.startAnimation1();
    }
  }

  animationLoop1() {
    const box1 = this.boxElement1.nativeElement;
    const rect1 = box1.getBoundingClientRect();
    const positionLeft1 = rect1.left + window.pageXOffset;

    const anchoPantalla = window.innerWidth
    console.log(anchoPantalla)
    console.log(box1.offsetWidth)

    if(positionLeft1 >= anchoPantalla){
      this.animationState1 = 'void';
      cancelAnimationFrame(this.animationFrameId1);
    }

    if (positionLeft1 >= anchoPantalla-box1.offsetWidth) {

      this.startAnimation2();
    } else {
      this.animationFrameId1 = requestAnimationFrame(this.animationLoop1.bind(this));
    }
  }

  animationLoop2() {

    const box2 = this.boxElement2.nativeElement;

    const rect2 = box2!.getBoundingClientRect();
    const positionLeft2 = rect2.left + window.pageXOffset;

    if (positionLeft2 >= window.innerWidth) {
      this.animationState2 = 'void';
      cancelAnimationFrame(this.animationFrameId2);
    } else {
      this.animationFrameId2 = requestAnimationFrame(this.animationLoop2.bind(this));
    }
  }
  ir(){
    this.router
  }
}

interface Movie{
  title:string
  imageUrl:string
}

interface Venta{
  licencia:string,
  costo:number,
  cantidad_vendido:number,
  num_venta_efectuada:number
}

