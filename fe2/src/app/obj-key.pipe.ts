import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objKey'
  // pure: false
})
// export class ObjKeyPipe implements PipeTransform {
//   transform(value: any, args?: any): any {
//     return null;
//   }
// }
// export class ObjKey implements PipeTransform {
//   transform(value: any, args: any[] = null): any {
//     return Object.keys(value).map(key => Object.assign({ key }, value[key]));
//   }
// }
export class ObjKey implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}