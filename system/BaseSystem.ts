import { BaseClass, BaseIdType } from "../BaseClass";
import { BaseComponent, BaseEntity } from "../ECS";

export abstract class BaseSystem extends BaseClass<BaseIdType.BaseSystemIdType> {
    public entities: BaseEntity[] = [];
    public context: any;
    protected watchComponents: typeof BaseComponent[] = [];

    checkWatch<T extends BaseEntity>(entity: T): boolean {
        if (entity.includeComponents(...this.watchComponents)) {
            this.entities.push(entity);
            return true;
        }
        return false;
    }
}

