import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml',
  standalone: true
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: string): string {
    // Eliminamos las etiquetas HTML usando una expresión regular
    return value.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
