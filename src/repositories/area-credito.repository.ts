import {DefaultCrudRepository} from '@loopback/repository';
import {AreaCredito, AreaCreditoRelations} from '../models';
import {HolaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AreaCreditoRepository extends DefaultCrudRepository<
  AreaCredito,
  typeof AreaCredito.prototype.idCliente,
  AreaCreditoRelations
> {
  constructor(
    @inject('datasources.hola') dataSource: HolaDataSource,
  ) {
    super(AreaCredito, dataSource);
  }
}
