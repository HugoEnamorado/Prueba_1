import {DefaultCrudRepository} from '@loopback/repository';
import {FechaEnvio, FechaEnvioRelations} from '../models';
import {HolaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FechaEnvioRepository extends DefaultCrudRepository<
  FechaEnvio,
  typeof FechaEnvio.prototype.proveedorId,
  FechaEnvioRelations
> {
  constructor(
    @inject('datasources.hola') dataSource: HolaDataSource,
  ) {
    super(FechaEnvio, dataSource);
  }
}
