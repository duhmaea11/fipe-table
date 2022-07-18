import { BaseInterface } from "./_base.interface";

export interface ModelInterface extends BaseInterface {}

export interface ModelResultInterface {
  modelos: ModelInterface[];
  anos: BaseInterface[];
}
