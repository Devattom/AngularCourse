import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compute'
})
export class ComputePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 100;
  }

}
