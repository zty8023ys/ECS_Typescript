import BaseClass from "../BaseClass";
import { BaseComponent, BaseEntity } from "../ECS";

export default abstract class BaseSystem extends BaseClass {
    entities: BaseEntity[] = [];
    protected watchComponents: typeof BaseComponent[] = [];

    checkWatch<T extends BaseEntity>(entity: T): boolean {
        if (entity.includeComponents(...this.watchComponents)) {
            this.entities.push(entity);
            return true;
        }
        return false;
    }
}

