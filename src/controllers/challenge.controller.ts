import {get} from '@loopback/rest';
import {arrayNumber} from '../constants/constans';
import {MultipleNumbers} from '../models/numbers.model';
import {multiple} from '../repositories/multiple';

export class NumberMultipleController {
  @get('/multiple')
  hello(): MultipleNumbers[] {
    let arrayNumbers: MultipleNumbers[] = [];
    let leyend: string;
    let itemsNumbers: MultipleNumbers;
    let isMultiple: boolean = true;
    let multipleNumber: multiple = new multiple();

    arrayNumber.filter(item => {
      itemsNumbers = new MultipleNumbers();
      multipleNumber.selectedMultiple(
        item,
        isMultiple,
        itemsNumbers,
        arrayNumbers,
        leyend,
      );
    });

    return arrayNumbers;
  }
}
