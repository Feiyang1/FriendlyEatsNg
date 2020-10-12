import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    const price = [];
    for (let i = 0; i < value; i++) {
      price.push('$');
    }

    return price.join('');
  }
}
