import { BaseComponent } from "../ECS";
import BaseClass from "../BaseClass";

export default class BaseEntity extends BaseClass {
    private component: { [name: string]: BaseComponent } = {};

    addComponent<T extends BaseComponent>(component: new () => T): T {
        if (this.includeComponent(component)) {
            return this.getComponent(component);
        }
        const componentInstance = new component();
        this.component[component.name] = componentInstance;
        return componentInstance;
    }
    getComponent<T extends BaseComponent>(component: new () => T): T {
        return this.component[component.name] as T;
    }
    includeComponents(...components: typeof BaseComponent[]): boolean {
        for (const component of components) {
            if (!this.includeComponent(component)) {
                return false;
            }
        }
        return true;
    }
    includeComponent(component: typeof BaseComponent): boolean {
        return !!this.component[component.name];
    }
    removeAllComponent() {
        for (let k in this.component) {
            delete this.component[k];
        }
    }
}
