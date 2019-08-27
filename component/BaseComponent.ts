import BaseClass from "../BaseClass";

export default abstract class BaseComponent extends BaseClass {
    abstract init(...args: any): BaseComponent;
}
