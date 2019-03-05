import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: string, length: number = value.length + 1): any {
    return value.substr(0, length);
  }

}
