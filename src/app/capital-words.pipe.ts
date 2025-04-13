import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalWords',
  standalone: false
})
export class CapitalWordsPipe implements PipeTransform {

  transform(value: string): any  {
    const slowa = value
      .replace(/\n/g, " ")
      .replace(";", " ")
      .split(" ");

      const wynik = slowa.filter( word=>
        word.charAt(0) === word.charAt(0).toUpperCase()
    
      );
      return wynik.join(' ');
  }

}
