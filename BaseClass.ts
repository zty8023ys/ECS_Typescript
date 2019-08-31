let globalIndex: number = 1;

export enum BaseIdType {
    BaseEntityIdType,
    BaseSystemIdType,
    BaseComponentIdType,
}


export class BaseClass<T extends BaseIdType> {
    private _id: number = globalIndex++;
    getId() {
        return this._id as unknown as T;
    }
}
