import 'reflect-metadata'
class Collection<T = any>{
    static collection: Collection = new Collection();
    private constructor() { }
    private containerMap = new Map<string | symbol, any>();
    public set(id: string | symbol, value: T): void {
        this.containerMap.set(id, value);
    }
    public get(id: string | symbol): T {
        return this.containerMap.get(id);
    }
    public has(id: string | symbol): boolean {
        return this.containerMap.has(id);
    }
}
@Reflect.metadata('class', 'class')
class UserService {
    @Reflect.metadata('property', 'property')
    name: string = '人民';
    @Reflect.metadata('method', 'method')
    public login() {
        console.log(this.name)
    }
}
console.log(Reflect.getMetadata('class', UserService))