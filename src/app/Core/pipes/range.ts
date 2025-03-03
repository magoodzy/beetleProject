import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(totalPages: number, start: number): number[] {
    return Array(totalPages)
      .fill(0)
      .map((_, index) => start + index);
  }
}