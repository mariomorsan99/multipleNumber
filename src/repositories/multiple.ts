import {SET_MUSICA, SET_MUSICAL, SET_TI} from '../constants/constans';
import {MultipleNumbers} from '../models/numbers.model';

export class multiple {
  constructor() {}
  AddItemMultiple(
    itemsNumbers: MultipleNumbers,
    arrayNumbers: MultipleNumbers[],
    item?: number,
    leyend?: string,
  ) {
    itemsNumbers.leyend = `${leyend}  por que el numero fue ${item}`;
    itemsNumbers.ismultiple = true;
    itemsNumbers.number = item;
    arrayNumbers.push(itemsNumbers);
  }

  AddItemNotMultiple(
    itemsNumbers: MultipleNumbers,
    arrayNumbers: MultipleNumbers[],
    item?: number,
  ) {
    itemsNumbers.leyend = `No es multiplo`;
    itemsNumbers.ismultiple = false;
    itemsNumbers.number = item;
    arrayNumbers.push(itemsNumbers);
  }

  selectedMultiple(
    itemNumber: number,
    isMultiple: boolean,
    itemsNumbers: MultipleNumbers,
    arrayNumbers: MultipleNumbers[],
    leyend: string,
  ) {
    switch (isMultiple) {
      case itemNumber % 3 == 0 && itemNumber % 5 == 0:
        leyend = SET_MUSICAL;
        this.AddItemMultiple(itemsNumbers, arrayNumbers, itemNumber, leyend);
        break;
      case itemNumber % 3 == 0:
        leyend = SET_MUSICA;
        this.AddItemMultiple(itemsNumbers, arrayNumbers, itemNumber, leyend);
        break;
      case itemNumber % 5 == 0:
        leyend = SET_TI;
        this.AddItemMultiple(itemsNumbers, arrayNumbers, itemNumber, leyend);
        break;

      default:
        this.AddItemNotMultiple(itemsNumbers, arrayNumbers, itemNumber);
        break;
    }
  }
}
