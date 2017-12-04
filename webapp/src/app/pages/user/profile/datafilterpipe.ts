import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => {
        const hasUserId = row.userId && row.userId.indexOf(query) > -1;
        const hasId = row.id && row.id.indexOf(query) > -1;
        return hasUserId || hasId;
      });
    }
    return array;
  }
}