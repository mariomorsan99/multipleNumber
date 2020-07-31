import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MultipleNumbers extends Model {
  @property({
    type: 'string',
    default: null,
  })
  leyend?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  ismultiple?: boolean;

  @property({
    type: 'number',
    default: 0,
  })
  number?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MultipleNumbers>) {
    super(data);
  }
}

export interface NumbersRelations {
  // describe navigational properties here
}

export type NumbersWithRelations = MultipleNumbers & NumbersRelations;
