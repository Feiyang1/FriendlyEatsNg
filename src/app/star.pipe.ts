import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: number, perfectScore: number = 5): string {
    if (value > perfectScore) {
      throw Error(`value can not be greater than the perfectScore. Got value ${value}, which is great than the perfectScore ${perfectScore}`);
    }

    const stars = [];
    for (let i = 0; i < perfectScore; i++) {
      if (i < value) {
        stars.push('\u2605');
      } else {
        stars.push('\u2606')
      }
    }

    return stars.join(' ');
  }
}
