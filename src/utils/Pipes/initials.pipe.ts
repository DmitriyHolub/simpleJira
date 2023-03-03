import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    var nameArray= value?.split(' ');

    if (nameArray.length == 1){
    return nameArray[0].substring(0,2).toUpperCase()
    }
    else if(nameArray.length >= 2) {
      return nameArray[0].charAt(0).toUpperCase() + nameArray[1].charAt(0).toUpperCase();
    }
    else{
      return "?";
    }
  }
}
