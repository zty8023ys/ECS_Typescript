let globalIndex: number = 1;
export default class BaseClass {
    private _id: number = globalIndex++;
    getId() {
        return this._id;
    }
}
