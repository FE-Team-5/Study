# map 구현해야힐 사항

interface Map<K, V> {
clear(): void;
/**
_ @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
_/
delete(key: K): boolean;
/**
_ Executes a provided function once per each key/value pair in the Map, in insertion order.
_/
forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
/**
_ Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
_ @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
\*/
get(key: K): V | undefined;
/**
_ @returns boolean indicating whether an element with the specified key exists or not.
_/
has(key: K): boolean;
/**
_ Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
_/
set(key: K, value: V): this;
/**
_ @returns the number of elements in the Map.
_/
readonly size: number;
}

# set 구현해야할 사항

interface Set<T> {
/\*\*
_ Appends a new element with a specified value to the end of the Set.
_/
add(value: T): this;

    clear(): void;
    /**
     * Removes a specified value from the Set.
     * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
     */
    delete(value: T): boolean;
    /**
     * Executes a provided function once per each value in the Set object, in insertion order.
     */
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    /**
     * @returns a boolean indicating whether an element with the specified value exists in the Set or not.
     */
    has(value: T): boolean;
    /**
     * @returns the number of (unique) elements in Set.
     */
    readonly size: number;

}
