export type IndexedObject<T> = { [key: string]: T }
export type ValueOf<T> = T[keyof T]
