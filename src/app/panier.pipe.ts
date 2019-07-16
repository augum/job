import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'panier'
})
export class PanierPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
