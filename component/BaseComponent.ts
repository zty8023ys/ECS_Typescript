import { BaseIdType, BaseClass } from "../BaseClass";
import { BaseEntity } from "../ECS";

export class BaseComponent extends BaseClass<BaseIdType.BaseComponentIdType> {
    public entity: BaseEntity = null;
}
