import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfSentences',
  standalone: false
})
export class NumberOfSentencesPipe implements PipeTransform {

  transform(value: string, args: string): any {
    if(args) {
        const nwm = new RegExp(args, 'g');
        const dopasowania = value.match(nwm);
        if (dopasowania) {
          return dopasowania.length;
        } else {
          return 0;
        }
    } else {
      return value;
    }
  }

}
