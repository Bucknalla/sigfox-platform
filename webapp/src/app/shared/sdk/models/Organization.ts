/* tslint:disable */
import {
  User,
  Message,
  Device,
  Category
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  "name": string;
  "ownerId": string;
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  Members?: User[];
  Messages?: Message[];
  Devices?: Device[];
  Categories?: Category[];
}

export class Organization implements OrganizationInterface {
  "name": string = 'New organization';
  "ownerId": string = '';
  "id": number = 0;
  "createdAt": Date = new Date(0);
  "updatedAt": Date = new Date(0);
  Members: User[] = null;
  Messages: Message[] = null;
  Devices: Device[] = null;
  Categories: Category[] = null;
  constructor(data?: OrganizationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Organization`.
   */
  public static getModelName() {
    return "Organization";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Organization for dynamic purposes.
  **/
  public static factory(data: OrganizationInterface): Organization{
    return new Organization(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Organization',
      plural: 'Organizations',
      path: 'Organizations',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string',
          default: 'New organization'
        },
        "ownerId": {
          name: 'ownerId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        Members: {
          name: 'Members',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'Organizationuser',
          keyThrough: 'userId',
          keyFrom: 'id',
          keyTo: 'organizationId'
        },
        Messages: {
          name: 'Messages',
          type: 'Message[]',
          model: 'Message',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        Devices: {
          name: 'Devices',
          type: 'Device[]',
          model: 'Device',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        Categories: {
          name: 'Categories',
          type: 'Category[]',
          model: 'Category',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
      }
    }
  }
}
