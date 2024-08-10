import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  private isFirstClick = true;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any): void {
    if (this.isFirstClick) {
      this.isFirstClick = false;
      return;
    }

    const isClickedInside = this.el.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.clickOutside.emit();
      this.isFirstClick = true;
    }
  }
}