import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private C:ElementRef) {
    console.log("Directiva Llamada");
    // C.nativeElement.style.backgroundColor = "yellow"
   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntro()
   {
     this.resaltar( this.nuevoColor || 'yellow');
    //  this.C.nativeElement.style.backgroundColor = "yellow"
   }

   @HostListener('mouseleave') mouseSalio()
   {
    //  this.C.nativeElement.style.backgroundColor = null
    this.resaltar( this.nuevoColor || null);
   }

   private resaltar( color:string)
   {
    this.C.nativeElement.style.backgroundColor = color;
   }

}
