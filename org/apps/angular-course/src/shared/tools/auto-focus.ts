import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocus implements AfterViewInit{
  private readonly element = inject(ElementRef)

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }
}
