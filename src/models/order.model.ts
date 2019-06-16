import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  toppings: object[];

  @property({
    type: 'date',
  })
  createdTime?: string;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
