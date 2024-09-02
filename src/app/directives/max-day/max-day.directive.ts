import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaxDay]'
})
export class MaxDayDirective {
  @Input() month!: number;
  @Input() year!: number;

  private daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  constructor(private el: ElementRef) {}

  @HostListener('input') onInputChange() {
    this.updateMaxDay();
  }

  @HostListener('blur') onBlur() {
    this.validateDay();
  }

  private updateMaxDay() {
    let maxDay = this.daysInMonth[this.month - 1];

    // Comprobar si es un año bisiesto y febrero
    if (this.month === 2 && this.isLeapYear(this.year)) {
      maxDay = 29;
    }

    const input = this.el.nativeElement;
    input.setAttribute('max', maxDay);
  }

  private validateDay() {
    const input = this.el.nativeElement;
    const value = parseInt(input.value, 10);
    const maxDay = parseInt(input.getAttribute('max'), 10);

    if (value > maxDay) {
      input.value = maxDay;
    } else if (value < 1) {
      input.value = 1;
    }
  }

  private isLeapYear(year: number): boolean {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
  }
}
